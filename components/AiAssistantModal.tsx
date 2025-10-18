import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AiAssistantContent, PricingContent, Plan, AppointmentSlot, CustomerData, Language } from '../types';
import { fetchAirtableSlots } from '../lib/api';
import AppointmentPicker from './AppointmentPicker';


interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  aiAssistantContent: AiAssistantContent;
  pricingContent: PricingContent;
  lang: Language;
}

interface Message {
    text: string | React.ReactNode;
    sender: 'user' | 'ai' | 'system' | 'system-error';
}

type ConversationState = 'chatting' | 'booking' | 'collecting_info';

const CHAT_HISTORY_KEY = 'tourcare_chat_history';

const deepSeekTools = [
    {
        type: 'function' as const,
        function: {
            name: 'schedule_consultation',
            description: 'Fetches available 30-minute free consultation slots from the calendar (via Airtable) to show the user.',
            parameters: { type: 'object', properties: {} }
        }
    },
    {
        type: 'function' as const,
        function: {
            name: 'show_pricing_plans',
            description: 'Displays the available service packages and their pricing.',
            parameters: { type: 'object', properties: {} }
        }
    },
    {
        type: 'function' as const,
        function: {
            name: 'start_onboarding',
            description: 'Starts the customer onboarding process when they choose a specific plan. This will involve collecting their information.',
            parameters: {
                type: 'object',
                properties: {
                    planName: { type: 'string', description: 'The name of the plan the user selected, e.g., "Basic Setup", "Pro Setup".' }
                },
                required: ['planName']
            }
        }
    },
];


const AiIcon = () => (
    <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2v2h12v-2h2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-3h-2v2h2V6zM8 6h2v2H8V6zm11 10h-2v-2H7v2H5v-5c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v5zM8.5 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 14.33 7 13.5 7.67 12 8.5 12zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
        </svg>
    </div>
);

const UserIcon = () => (
     <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
    </div>
);

const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, aiAssistantContent, pricingContent, lang }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversationState, setConversationState] = useState<ConversationState>('chatting');
    const [availableSlots, setAvailableSlots] = useState<AppointmentSlot[]>([]);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const getSystemInstruction = useCallback((currentLang: Language) => {
        return currentLang === 'ar' 
            ? `أنت TourCare.ai، مساعد ذكاء اصطناعي ودود ومحترف. هدفك هو مساعدة مديري شركات السياحة، خاصة موردي GetYourGuide، على فهم خدماتنا. الخدمات هي: الإعداد الأساسي، الإعداد الاحترافي، والإعداد المتقدم. يمكنك عرض الأسعار، وحجز استشارة مجانية مدتها 30 دقيقة، وبدء عملية الإعداد للعملاء. كن مهذبًا وذكيًا في طرح الأسئلة لتحديد الباقة الأنسب. استخدم الأدوات المتاحة لك عند الطلب.`
            : `You are TourCare.ai, a friendly and professional AI assistant. Your goal is to help tour operator managers, especially GetYourGuide suppliers, understand our services. The services are: Basic Setup, Pro Setup, and Advanced Setup. You can show pricing, schedule a free 30-minute consultation, and start the onboarding process for clients. Be polite and ask smart questions to determine the most suitable package. Use the tools available to you when requested.`;
    }, []);

    const initializeChat = useCallback(() => {
        const savedHistoryJSON = localStorage.getItem(CHAT_HISTORY_KEY);
        let initialMessages: Message[] = [];

        if (savedHistoryJSON) {
            try {
                const parsedMessages: Message[] = JSON.parse(savedHistoryJSON);
                if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
                    initialMessages = parsedMessages.filter(m => typeof m.text === 'string');
                }
            } catch (e) {
                console.error("Could not parse chat history:", e);
                localStorage.removeItem(CHAT_HISTORY_KEY);
            }
        }

        if (initialMessages.length === 0) {
            initialMessages = [{ text: aiAssistantContent.initialMessage, sender: 'ai' }];
        }
        
        setMessages(initialMessages);
    }, [aiAssistantContent.initialMessage]);


    useEffect(() => {
        if (isOpen) {
            initializeChat();
        } else {
            setMessages([]);
            setInput('');
            setIsLoading(false);
            setConversationState('chatting');
            setAvailableSlots([]);
            setSelectedPlan(null);
        }
    }, [isOpen, initializeChat]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);
    
    useEffect(() => {
        if (!isOpen || messages.length === 0) return;

        const serializableMessages = messages.filter(
            (msg) => (msg.sender === 'user' || msg.sender === 'ai') && typeof msg.text === 'string'
        );

        if (serializableMessages.length > 0) {
            localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(serializableMessages));
        } else {
            localStorage.removeItem(CHAT_HISTORY_KEY);
        }
    }, [messages, isOpen]);
    
    const resetChat = useCallback(() => {
        setIsLoading(false);
        localStorage.removeItem(CHAT_HISTORY_KEY);
        setMessages([{ text: aiAssistantContent.initialMessage, sender: 'ai' }]);
    }, [aiAssistantContent.initialMessage, lang, getSystemInstruction]);

    const handleSendMessage = async (messageText: string) => {
        const apiKey = import.meta.env.VITE_DEEP_SEEK_API_KEY;
        if (!apiKey) {
            const errorText = lang === 'ar' 
                ? "عفواً، لا يمكن تهيئة مساعد الذكاء الاصطناعي. يرجى التأكد من تكوين مفتاح VITE_DEEP_SEEK_API_KEY بشكل صحيح."
                : "Sorry, the AI Assistant could not be initialized. Please ensure the VITE_DEEP_SEEK_API_KEY is configured correctly.";
            setMessages(prev => [...prev, { text: errorText, sender: 'system-error' }]);
            return;
        }

        if (!messageText.trim() || isLoading) return;

        const newUserMessage: Message = { text: messageText, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setInput('');
        setIsLoading(true);
        
        let historyForApi = [...messages, newUserMessage]
            .filter(msg => (msg.sender === 'user' || msg.sender === 'ai') && typeof msg.text === 'string')
            .map(msg => ({
                role: msg.sender === 'ai' ? 'assistant' as const : 'user' as const,
                content: msg.text as string
            }));

        const systemInstruction = { role: 'system' as const, content: getSystemInstruction(lang) };
        let fullApiHistory: any[] = [systemInstruction, ...historyForApi];

        try {
            let done = false;
            while (!done) {
                const payload = {
                    model: 'deepseek-chat',
                    messages: fullApiHistory,
                    tools: deepSeekTools,
                    tool_choice: 'auto' as const
                };

                const response = await fetch('https://api.deepseek.com/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(await response.text());
                }
                
                const data = await response.json();
                const assistantResponse = data.choices[0].message;
                
                fullApiHistory.push(assistantResponse);

                if (assistantResponse.tool_calls && assistantResponse.tool_calls.length > 0) {
                    const toolCall = assistantResponse.tool_calls[0];
                    let functionResult;

                    switch (toolCall.function.name) {
                        case 'schedule_consultation':
                            try {
                                const slots = await fetchAirtableSlots();
                                setAvailableSlots(slots);
                                setConversationState('booking');
                                functionResult = { success: true, slotCount: slots.length };
                            } catch (error) {
                                functionResult = { success: false, error: (error as Error).message };
                            }
                            break;
                        case 'show_pricing_plans':
                            setMessages(prev => [...prev, { sender: 'system', text: <PricingCards /> }]);
                            functionResult = { success: true };
                            break;
                        case 'start_onboarding':
                            const args = JSON.parse(toolCall.function.arguments);
                            const planName = args.planName as string;
                            const plan = pricingContent.plans.find(p => p.name.toLowerCase() === planName.toLowerCase());
                            if (plan) {
                                setSelectedPlan(plan);
                                setConversationState('collecting_info');
                            }
                            functionResult = { success: !!plan };
                            break;
                        default:
                            functionResult = { success: false, error: `Unknown function: ${toolCall.function.name}` };
                    }
                    
                    fullApiHistory.push({
                        role: 'tool' as const,
                        tool_call_id: toolCall.id,
                        content: JSON.stringify(functionResult)
                    });
                    
                    done = false; // Continue loop for final response
                } else {
                    if (assistantResponse.content) {
                        const newAiMessage: Message = { text: assistantResponse.content, sender: 'ai' };
                        setMessages(prev => [...prev, newAiMessage]);
                    }
                    done = true; // Exit loop
                }
            }
        } catch (error) {
            console.error("Failed to fetch AI response:", error);
            const errorText = lang === 'ar' ? "عفواً، أواجه مشكلة في الاتصال الآن. يرجى المحاولة مرة أخرى لاحقاً." : "Sorry, I'm having trouble connecting right now. Please try again later.";
            setMessages(prev => [...prev, { text: errorText, sender: 'system-error' }]);
        } finally {
            setIsLoading(false);
        }
    };


    const handleSlotSelection = (slotId: string) => {
        const slot = availableSlots.find(s => s.id === slotId);
        if (!slot) return;
        setConversationState('chatting');
        setAvailableSlots([]);
        const readableTime = new Date(slot.fields.DateTime).toLocaleString(lang, { dateStyle: 'full', timeStyle: 'short' });
        const userMessage = lang === 'ar' ? `لقد اخترت هذا الموعد: ${readableTime}` : `I've selected this time: ${readableTime}`;
        handleSendMessage(userMessage);
    };

    const handleCustomerInfoSubmit = async (customerData: CustomerData) => {
        if (!selectedPlan) return;
        setIsLoading(true);
        setConversationState('chatting');
        
        const payload = { ...customerData, plan: selectedPlan.name, price: selectedPlan.price };
        try {
            const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
            if (!webhookUrl) {
                throw new Error("VITE_MAKE_WEBHOOK_URL is not configured.");
            }
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error('Webhook failed');
            
            const thankYouMessage = lang === 'ar'
                ? `شكرًا لك ${customerData.firstName}! تم إرسال فاتورتك إلى بريدك الإلكتروني. سيتواصل معك فريقنا قريبًا.`
                : `Thank you, ${customerData.firstName}! Your invoice has been sent to your email. Our team will be in touch shortly.`;

            setMessages(prev => [...prev, { text: thankYouMessage, sender: 'ai' }]);

        } catch (error) {
            console.error(error);
             const errorMessage = lang === 'ar' ? "عذرًا، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى." : "Sorry, an error occurred while processing your request. Please try again.";
            setMessages(prev => [...prev, { text: errorMessage, sender: 'system-error' }]);
        } finally {
            setIsLoading(false);
            setSelectedPlan(null);
        }
    };
    
    const TypingIndicator = () => (
        <div className="flex items-end gap-2.5 justify-start">
            <AiIcon />
            <div className="bg-white text-gray-800 p-3 rounded-xl rounded-bl-none border border-gray-200 flex items-center space-x-1.5">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
        </div>
    );
    
    const PricingCards = () => (
        <div className="space-y-3 my-2">
            <h4 className="font-bold text-gray-900 text-base mb-2">{lang === 'ar' ? 'إليك باقاتنا:' : 'Here are our plans:'}</h4>
            {pricingContent.plans.map(plan => (
                <div key={plan.name} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-brand-accent transition-colors">
                    <div className="flex justify-between items-center">
                        <div>
                            <h5 className="font-bold text-brand-accent">{plan.name}</h5>
                            <p className="font-semibold text-gray-900 text-lg">{plan.price}</p>
                        </div>
                        <button 
                            onClick={() => handleSendMessage(lang === 'ar' ? `أرغب في اختيار باقة ${plan.name}` : `I'd like to choose the ${plan.name} plan`)}
                            className="bg-brand-accent text-white text-sm font-bold px-4 py-2 rounded-md hover:bg-brand-accent-hover transition-transform transform hover:scale-105">
                            {lang === 'ar' ? 'اختر' : 'Choose'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    const CustomerInfoForm = () => {
        const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            handleCustomerInfoSubmit(formData);
        }

        return (
            <div className="bg-white p-4 rounded-lg border border-gray-200 my-2">
                <h4 className="font-bold text-gray-900 mb-3">{lang === 'ar' ? `لإكمال إعداد باقة "${selectedPlan?.name}"، يرجى تقديم التفاصيل الخاصة بك:` : `To complete your "${selectedPlan?.name}" setup, please provide your details:`}</h4>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                        <input type="text" placeholder={lang === 'ar' ? "الاسم الأول" : "First Name"} required className="bg-gray-100 p-2 rounded border border-gray-300 text-gray-800 w-full" onChange={e => setFormData(f => ({...f, firstName: e.target.value}))} />
                        <input type="text" placeholder={lang === 'ar' ? "اسم العائلة" : "Last Name"} required className="bg-gray-100 p-2 rounded border border-gray-300 text-gray-800 w-full" onChange={e => setFormData(f => ({...f, lastName: e.target.value}))} />
                    </div>
                    <input type="email" placeholder={lang === 'ar' ? "البريد الإلكتروني" : "Email Address"} required className="bg-gray-100 p-2 rounded border border-gray-300 text-gray-800 w-full" onChange={e => setFormData(f => ({...f, email: e.target.value}))} />
                    <input type="tel" placeholder={lang === 'ar' ? "رقم الهاتف" : "Phone Number"} required className="bg-gray-100 p-2 rounded border border-gray-300 text-gray-800 w-full" onChange={e => setFormData(f => ({...f, phone: e.target.value}))} />
                    <button type="submit" className="w-full bg-brand-accent text-white font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover">
                        {lang === 'ar' ? 'إرسال وإنشاء الفاتورة' : 'Submit & Create Invoice'}
                    </button>
                </form>
            </div>
        )
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="ai-assistant-title">
            <div className="bg-white w-full max-w-lg h-[80vh] max-h-[700px] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-brand-accent/50" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b border-gray-200 text-center relative">
                     <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 text-brand-accent">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2v2h12v-2h2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-3h-2v2h2V6zM8 6h2v2H8V6zm11 10h-2v-2H7v2H5v-5c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v5zM8.5 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 14.33 7 13.5 7.67 12 8.5 12zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/></svg>
                        </div>
                        <h3 id="ai-assistant-title" className="text-xl font-bold text-gray-900">{aiAssistantContent.title}</h3>
                     </div>
                    <p className="text-sm text-gray-500">{aiAssistantContent.description}</p>
                    <button 
                        onClick={resetChat} 
                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-700 transition-colors"
                        title={lang === 'ar' ? 'مسح المحادثة' : 'Clear Chat'}
                        aria-label={lang === 'ar' ? 'مسح المحادثة' : 'Clear Chat'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M5.5 9.5a7 7 0 107-5.4M12 4v5h5" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2.5 transition-all duration-300 ease-in-out ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender !== 'user' && msg.sender !== 'system' && <AiIcon />}
                            <div className={`max-w-[80%] p-3 rounded-xl ${
                                msg.sender === 'user' ? 'bg-brand-accent text-white rounded-br-none' :
                                msg.sender === 'ai' ? 'bg-white text-gray-800 rounded-bl-none border border-gray-200 shadow-sm' :
                                msg.sender === 'system-error' ? 'bg-red-100 border border-red-300 text-red-800 rounded-bl-none' :
                                '' // System components have their own backgrounds
                            }`}>
                                {msg.text}
                            </div>
                            {msg.sender === 'user' && <UserIcon />}
                        </div>
                    ))}
                    
                    {/* Typing Indicator with smooth reveal animation */}
                    <div className={`transition-all duration-500 ease-out overflow-hidden ${isLoading && conversationState === 'chatting' ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <TypingIndicator />
                    </div>

                    {conversationState === 'booking' && (
                        <div className="bg-white p-4 rounded-lg border border-gray-200 my-2">
                            <AppointmentPicker
                                availableSlots={availableSlots}
                                onSlotSelection={handleSlotSelection}
                                lang={lang}
                                noSlotsMessage={lang === 'ar' ? 'عذرًا، لا توجد مواعيد متاحة حاليًا.' : 'Sorry, there are no available slots.'}
                                selectedSlotId={null}
                            />
                        </div>
                    )}
                    {conversationState === 'collecting_info' && selectedPlan && <CustomerInfoForm />}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder={aiAssistantContent.inputPlaceholder}
                            className="flex-1 bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition shadow-inner"
                            disabled={isLoading || !import.meta.env.VITE_DEEP_SEEK_API_KEY || conversationState !== 'chatting'}
                            aria-label={aiAssistantContent.inputPlaceholder}
                        />
                        <button type="submit" className="bg-brand-accent text-white p-3 rounded-md hover:bg-brand-accent-hover disabled:bg-gray-300 transition hover:shadow-lg" disabled={isLoading || !import.meta.env.VITE_DEEP_SEEK_API_KEY || conversationState !== 'chatting'} aria-label={lang === 'ar' ? 'إرسال' : 'Send'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none'}}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AiAssistantModal;