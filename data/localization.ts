import { Content, Language } from '../types';

const en: Content = {
  header: {
    navItems: [
      {
        type: 'dropdown',
        title: 'Products',
        items: [
          { href: '#/products/operation-sys', text: 'AI Operations System', description: 'Automate your entire workflow.' },
          { href: '#/products/pickup-time', text: 'Smart Pickup & Tracking', description: 'Real-time GPS tracking for pickups.' },
          { href: '#/products/live-support', text: 'Live Quality Support', description: 'Proactive review & feedback management.' },
        ],
      },
      { type: 'link', href: '#/test-automation', text: 'Try Experience' },
      { type: 'link', href: '#/about', text: 'About Us' },
      { type: 'link', href: '#/faq', text: 'FAQ' },
      { type: 'link', href: '#/contact', text: 'Contact' }
    ],
    cta: 'Book a Consultation',
  },
  hero: {
    headline: 'The AI Operating System for Modern Tour Operators',
    secondaryText: 'Automate bookings, streamline communication, and elevate your guest experience. Designed for GetYourGuide suppliers.',
    ctaTrial: 'Book a Free Consultation',
    ctaDemo: 'Watch Intro',
    ctaIntro: 'Watch Intro',
  },
  trustedPartners: {
    title: 'Seamlessly Compatible with All Your Booking Platforms',
    partners: [
        { name: 'GetYourGuide', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648049/GetYourGuide_Logo_fb8ral.jpg' },
        { name: 'Viator', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648301/maxresdefault_dvftgx.jpg' },
        { name: 'Headout', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648345/1730430084666.headout-logo-400x300_rclqkh.jpg' },
        { name: 'Tiqets', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648540/AIdro_maZ2fUG38f8CLeNPzubXCQ8vhcrPe6qBhJFDkJbQQkzg_s900-c-k-c0x00ffffff-no-rj_azxd30.jpg' },
    ],
  },
  stats: {
    stats: [
      { value: '80%', label: 'Reduction in Manual Work' },
      { value: '95%', label: 'Customer Satisfaction' },
      { value: '24/7', label: 'Automated Support' },
      { value: '3x', label: 'Faster Response Time' },
    ],
  },
  whoItIsFor: {
    title: 'Designed for Growth-Focused Tour Operators',
    focus: 'If you use GetYourGuide, Viator, Headout, or Tiqets, you need TourCare.ai.',
    points: [
      'GetYourGuide & Viator Suppliers',
      'Desert Safari & City Tour Operators',
      'Attraction & Experience Providers',
      'DMC & Inbound Tour Operators',
      'Companies aiming to scale operations',
      'Teams tired of manual, repetitive tasks',
    ],
  },
  workflow: {
    title: 'How It Works: Simple & Powerful',
    steps: [
      { icon: '1️⃣', title: 'Connect', description: 'Integrate with your booking platforms in minutes.' },
      { icon: '2️⃣', title: 'Configure', description: 'Set up your automation rules and messaging templates.' },
      { icon: '3️⃣', title: 'Automate', description: 'Let the AI handle pickup times, FAQs, and support.' },
      { icon: '4️⃣', title: 'Grow', description: 'Focus on your business while we handle the operations.' },
    ],
  },
  visualFeatures: {
    title: 'Everything You Need. Nothing You Don\'t.',
    features: [
      {
        image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760600739/Generated_File_October_05_2025_-_7_52PM_y9xuad.mp4',
        title: 'Automated Pickup Time Communication',
        description: 'Eliminate no-shows and reduce support queries by automatically sending accurate pickup times to your guests via WhatsApp, iMessage, and SMS.',
        points: [
          'Automatic calculation based on location',
          'Multi-channel notifications',
          'Reduces inbound "where is my pickup?" calls',
          'Customizable message templates',
        ],
      },
      {
        image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760650718/assets_task_01k7nzevahf1ev9yppcr9xm1pd_task_01k7nzevahf1ev9yppcr9xm1pd_genid_af342fa4-71e5-44e3-b1bd-b541577ef97d_25_10_16_07_48_188040_videos_00000_260261227_md_ir8sfv.mp4',
        title: 'AI-Powered 24/7 Live Support',
        description: 'Provide instant, accurate answers to your customers\' questions around the clock. Our AI is trained on your specific tour data and business policies.',
        points: [
          'Handles up to 80% of common queries',
          'Available 24/7, 365 days a year',
          'Understands multiple languages',
          'Seamless handover to human agents if needed',
        ],
      },
    ],
  },
  ctaSection: {
    title: 'Ready to Automate Your Operations?',
    subtitle: 'Schedule a free, no-obligation consultation to see how TourCare.ai can transform your business.',
    cta: 'Book Your Free Consultation',
  },
  playground: {
    title: 'Try the Automation Engine',
    description: 'See how our system instantly messages customers. Enter the details below to simulate sending a pickup time notification via WhatsApp.',
    form: {
      bookingId: 'Booking ID',
      route: 'Tour / Route Name',
      pickupTime: 'Pickup Time',
      button: 'Send Notification',
    },
    result: {
      title: 'API Response',
      status: 'Status',
      success: 'Success',
      sent: 'A WhatsApp message has been sent to the customer with the details.',
    },
  },
  integrations: {
    title: 'Seamlessly Integrates With Your Existing Tools',
    partners: ['Gmail Interface', 'ChatGPT API', 'DeepSeek API', 'WhatsApp Cloud API', 'Zapier', 'Make.com'],
  },
  testimonials: {
    title: 'What Our Partners Say',
    quote: 'TourCare.ai has been a game-changer for our operations. We\'ve cut down our manual workload by more than 80% and our customer satisfaction has never been higher. It\'s a must-have for any serious tour operator on GetYourGuide.',
    author: 'Ahmed M.',
    company: 'Operations Manager, OceanAir Travels',
  },
  pricing: {
    title: 'Simple, Transparent Pricing',
    plans: [
      { name: 'Basic Setup', price: '$499', features: ['1 Booking Platform Integration', 'Pickup Time Automation', 'Basic AI Support Bot', 'WhatsApp Channel'], cta: 'Choose Basic' },
      { name: 'Pro Setup', price: '$999', features: ['Up to 3 Integrations', 'Advanced Automation Rules', 'Custom-Trained AI Bot', '24/7 Live Agent Handover'], cta: 'Choose Pro' },
      { name: 'Advanced Setup', price: '$1,999', features: ['Unlimited Integrations', 'Full Operations OS', 'Dedicated Success Manager', 'API Access & Custom Logic'], cta: 'Choose Advanced' },
    ],
    retainer: 'All plans include a monthly retainer for support and maintenance.',
  },
  slogan: 'Focus on the tour, not the tasks.',
  footer: {
    slogan: 'The AI Operating System for Modern Tour Operators.',
    copyright: '© 2024 TourCare.ai. All rights reserved.',
    socials: [
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
    ],
    columns: [
      {
        title: 'Products',
        links: [
          { text: 'AI Operations System', href: '#/products/operation-sys' },
          { text: 'Smart Pickup & Tracking', href: '#/products/pickup-time' },
          { text: 'Live Quality Support', href: '#/products/live-support' },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About Us', href: '#/about' },
          { text: 'Try Experience', href: '#/test-automation' },
          { text: 'Contact Us', href: '#/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { text: 'FAQ', href: '#/faq' },
          { text: 'Blog', href: '#' },
          { text: 'Case Studies', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: 'Privacy Policy', href: '#' },
          { text: 'Terms of Service', href: '#' },
        ],
      },
    ]
  },
  aiAssistant: {
    openButtonLabel: 'Open AI Assistant',
    title: 'TourCare.ai Assistant',
    description: 'Ask me about pricing, features, or book a consultation!',
    initialMessage: 'Hello! I am the TourCare.ai assistant. How can I help you today? You can ask me to "show pricing" or "schedule a consultation".',
    inputPlaceholder: 'Type your message...',
    clearChat: 'Clear Chat',
  },
  authModal: {
    title: 'Book a Free Consultation',
    closeButton: 'Close',
    formPlaceholderFirstName: 'First Name',
    formPlaceholderLastName: 'Last Name',
    formPlaceholderEmail: 'Email Address',
    formPlaceholderNote: 'Anything else we should know? (optional)',
    slotPickerTitle: 'Choose a time that works for you:',
    noSlots: 'No available slots. Please contact us directly.',
    submitButton: 'Confirm Booking',
    confirming: 'Confirming your booking...',
    confirmationTitle: 'Booking Confirmed!',
    confirmationMessage: 'Thank you! A calendar invite has been sent to your email.',
    errorTitle: 'Oops!',
    errorMessage: 'Something went wrong. Please try again or contact us.',
  },
  commercialOffer: {
    mainTitle: 'Our Mission: To Empower Tour Operators with AI',
    whoWeAre: {
        description: `TourCare.ai was founded by a team of tour operators and AI engineers who experienced firsthand the operational challenges of scaling a business on platforms like GetYourGuide.\n\nWe grew tired of the repetitive emails, the late-night support calls, and the constant fear of a missed pickup time leading to a bad review. We knew there had to be a better way. That's why we built TourCare.ai: an intelligent, automated system designed to handle the tedious tasks, so you can focus on what you do best—creating unforgettable experiences.`
    },
    vision: {
        title: 'Our Vision',
        description: 'To become the essential operating system for every tour and activity provider worldwide, making sophisticated automation and AI accessible and affordable for businesses of all sizes.'
    },
    whatWeOffer: {
        title: 'What We Offer',
        description: 'A comprehensive suite of tools to automate your entire customer journey.',
        features: [
            { icon: '🤖', text: 'AI-Powered Automation: From booking confirmations to post-tour feedback, automate every step.' },
            { icon: '💬', text: '24/7 Multilingual Support: An AI assistant that speaks your customers\' language, any time of day.' },
            { icon: '📊', text: 'Actionable Insights: Understand your operations like never before with intelligent analytics and reporting.' },
            { icon: '🔌', text: 'Seamless Integration: Connect effortlessly with the platforms you already use, like GetYourGuide, Viator, and WhatsApp.' }
        ]
    }
  },
  faqSection: {
    pageTitle: 'Frequently Asked Questions',
    allCategories: 'All',
    searchPlaceholder: 'Search for a question...',
    categories: [
        {
            title: 'General',
            icon: '🌍',
            items: [
                { q: 'What is TourCare.ai?', a: 'TourCare.ai is an AI-powered operating system for tour operators. It automates key tasks like sending pickup times, answering customer questions 24/7, and managing bookings to save you time and improve guest satisfaction.' },
                { q: 'Who is this for?', a: 'Our system is designed specifically for tour and activity operators, especially those who are suppliers on platforms like GetYourGuide and Viator. If you manage bookings, coordinate pickups, and communicate with guests, TourCare.ai is for you.' }
            ]
        },
        {
            title: 'Technical',
            icon: '⚙️',
            items: [
                { q: 'How does it integrate with GetYourGuide?', a: 'We use official APIs and secure integration methods to connect with your GetYourGuide supplier account. This allows us to read booking information in real-time to trigger automations.' },
                { q: 'Is my data safe?', a: 'Absolutely. We use industry-standard encryption and security practices to protect all your data and your customers\' information. We are fully GDPR compliant.' }
            ]
        },
        {
            title: 'Pricing',
            icon: '💰',
            items: [
                { q: 'How does the pricing work?', a: 'We offer one-time setup packages based on your needs, followed by a monthly retainer for ongoing support, maintenance, and system usage. This ensures the system is always running smoothly and you have access to our team when you need it.' },
                { q: 'Is there a free trial?', a: 'We don\'t offer a free trial, but we do offer a free, in-depth consultation and live demo to show you exactly how the system would work for your business. This allows us to tailor the demonstration to your specific operational needs.' }
            ]
        }
    ]
  },
  contactPage: {
    pageTitle: 'Get in Touch',
    intro: 'Have a question, a custom request, or just want to see a demo? \nWe’d love to hear from you. Reach out, and let\'s discuss how we can help you grow.',
    whyContact: {
        title: 'Why Contact Us?',
        reasons: [
            'Schedule a personalized demo',
            'Discuss a custom automation project',
            'Inquire about enterprise solutions',
            'Explore partnership opportunities',
            'Get answers to specific questions',
            'Provide feedback or suggestions'
        ]
    },
    directContact: {
        title: 'Direct Contact',
        items: [
            { icon: '📧', label: 'Email Us', value: 'contact@tourcare.ai', href: 'mailto:contact@tourcare.ai' },
            { icon: '📞', label: 'Call Us (UAE)', value: '+971 50 123 4567', href: 'tel:+971501234567' },
            { icon: '📍', label: 'Our Office', value: 'Dubai, United Arab Emirates' }
        ]
    },
    instantChannels: {
        title: 'Instant Channels',
        items: [
            { icon: '💬', label: 'WhatsApp', action: 'Chat with us now', href: 'https://wa.me/971501234567' },
            { icon: '🤖', label: 'AI Assistant', action: 'Ask our AI a question', href: '#/ai-assistant-shortcut' }
        ]
    },
    formSection: {
        title: 'Send Us a Message',
        subtitle: 'Fill out the form below, and our team will get back to you within 24 hours.',
        form: {
            companyName: 'Company Name',
            contactPerson: 'Your Name',
            email: 'Your Email',
            phone: 'Your Phone Number',
            platforms: 'Which booking platforms do you use?',
            platformOptions: ['GetYourGuide', 'Viator', 'Booking.com', 'Own Website', 'Other'],
            message: 'Your Message',
            submitButton: 'Send Message',
            sendingButton: 'Sending...'
        },
        confirmation: 'We respect your privacy and will never share your information.'
    }
  },
  productPages: {
    operationSys: {
      navTitle: 'AI Operations System',
      hero: { title: 'The Complete AI Operations System', subtitle: 'Integrate all your tools into a single, intelligent hub that manages your business on autopilot.' },
      descriptionSection: {
        title: 'Product Description',
        content: 'A comprehensive solution for managing and operating all stages of the tour, from the moment of booking to the end of the experience, designed to transform all manual tasks into fully automated processes.\n\nAt TourCare, we offer an integrated operating system that covers every point in the booking lifecycle and transforms tour management into a smart, fully automated process:',
        features: [
          { icon: '🤖', text: 'Automatically aggregate bookings from all platforms in one place without manual intervention.' },
          { icon: '💬', text: 'Instant automatic reply to the customer after booking to confirm details and build trust.' },
          { icon: '📩', text: 'Send pickup times automatically via email or WhatsApp.' },
          { icon: '⏰', text: 'Automatic reminders to the customer about the pickup time before the trip to reduce delays or no-shows.' },
          { icon: '💳', text: 'Automatically collect any additional amounts or optional services from the customer by linking with payment gateways, with an automatic electronic invoice sent with the welcome or pickup time message.' },
          { icon: '📧', text: 'Professional email templates customized for each stage (booking confirmation - reminder - sending pickup time - review request - complaint follow-up - invoices), with multilingual wording that reflects your brand identity.' },
          { icon: '🤖', text: 'AI Agent to automatically collect important customer data such as hotel name, room number, or geographic location via email or WhatsApp, reducing errors and speeding up operational processes.' },
          { icon: '⭐', text: 'Automatically request reviews after the trip and forward any complaints directly to the quality department for analysis and follow-up.' },
          { icon: '📍', text: 'Track drivers and trips in real-time via a smart dashboard to reduce no-show and cancellation rates.' },
          { icon: '📱', text: 'Automatically send last-minute bookings to the operations manager via WhatsApp for quick execution.' },
          { icon: '👤', text: 'Create sub-accounts for guides, drivers, and suppliers to follow up on operational tasks and update the status of each trip in real-time.' },
          { icon: '📊', text: 'Automatic daily reporting system sent via email showing the actual number of bookings on each platform (GetYourGuide - Viator - Headout - etc.), with a detailed breakdown by destinations and products.' },
          { icon: '📈', text: 'A comprehensive analytics dashboard that displays all performance indicators (bookings, revenue, cancellation rates, customer ratings, and reviews) in one place to enable management to make faster and more accurate decisions.' }
        ]
      },
      pricing: {
        title: 'Pricing for the Full OS',
        plans: [
          { name: 'Pro', price: '$999', features: ['All core features', 'Up to 3 integrations', '24/7 Live Support'], cta: 'Choose Pro' },
          { name: 'Advanced', price: '$1,999', features: ['Everything in Pro', 'Unlimited integrations', 'API Access'], cta: 'Choose Advanced' },
          { name: 'Enterprise', price: 'Custom', features: ['Fully bespoke solution', 'Dedicated infrastructure', 'On-site training'], cta: 'Contact Us' },
        ]
      },
      cta: { title: 'Ready for a True Autopilot?', subtitle: 'Let\'s build your custom operating system.', cta: 'Book a Scoping Call' },
    },
    pickupTime: {
      navTitle: 'Smart Pickup & Tracking',
      hero: { title: 'Smart Pickup & Tracking System', subtitle: 'GPS-based customer pickup system' },
      descriptionSection: {
        title: 'Product Description',
        content: 'A smart platform specialized in managing and organizing pickup and transport operations for tourist trips, enabling you to track every driver and customer in real-time, ensuring every trip arrives on time without delay. The system works to improve operational accuracy and provide a more professional and smooth experience for customers from the moment they leave their hotel until their tour begins.',
        features: [
            { icon: '📍', text: 'Real-Time Tracking: Monitor driver and customer locations moment by moment using GPS technology.' },
            { icon: '🔔', text: 'Instant Notifications: Immediate alerts if a driver is delayed or a customer\'s location changes.' },
            { icon: '🧭', text: 'Live Operations Dashboard: View the live status of every pickup operation in a single, easy-to-use control panel.' },
            { icon: '📞', text: 'Secure & Direct Communication: Enable drivers to contact customers directly without revealing phone numbers to protect data privacy.' },
            { icon: '📸', text: 'Media Support: Ability to capture photos from the driver\'s location and send them to the customer to increase reliability and confirm presence.' },
            { icon: '📍', text: 'Live Location Sharing: In case of a no-show, a live location can be sent at the backup time to help the customer arrive easily and reduce the likelihood of a refund request.' },
            { icon: '📊', text: 'Accurate Operational Reports: View detailed analytics on driver performance, no-show cases, and cancellation rates, with tools to improve performance and reduce losses.' }
        ]
      },
      benefits: {
          title: 'Benefits',
          features: [
              { icon: '🚗', text: 'Significantly reduce no-show and cancellation rates.' },
              { icon: '🤝', text: 'Improve the customer experience from the moment they leave the hotel until their tour begins.' },
              { icon: '📉', text: 'A major reduction in refunds resulting from arrival issues.' },
              { icon: '📈', text: 'Increase operational efficiency and enhance your company\'s reputation on global platforms.' }
          ]
      },
      pricing: {
        title: 'Simple Pricing',
        plans: []
      },
      cta: { title: 'Automate Your Pickups Today', subtitle: 'With the Smart Pickup & Tracking system, you can manage all transport and pickup operations with complete professionalism, building a more accurate and reliable customer experience that helps you reduce losses and increase profits.', cta: 'Book a Free Consultation' },
    },
    liveSupport: {
      navTitle: 'Live Quality Support',
      hero: { title: 'Live Quality Support', subtitle: 'Customer Service System for Quality and Reviews' },
      descriptionSection: {
        title: 'Product Description',
        content: 'An integrated solution that combines a professional human support team with intelligent AI to manage service quality after the tour ends, analyze customer behavior, collect reviews, and handle complaints professionally to help you improve your product rankings on OTAs like GetYourGuide and Viator. The system follows the customer\'s experience from the moment they return from the trip until the review stage, ensuring the highest satisfaction rates and reducing the likelihood of negative reviews or refund requests.',
        features: [
            { icon: '📬', text: 'Send automated review requests after the trip with professional, multilingual texts to increase the chances of getting positive reviews.' },
            { icon: '🤖', text: 'Sentiment Analysis: Use artificial intelligence to detect dissatisfied customers early before they write a negative review.' },
            { icon: '🔎', text: 'Complaint Investigation: Collect details and analyze the reasons for negative reviews to make corrective decisions and improve service.' },
            { icon: '🧑‍⚖', text: 'Negative Review Removal: Meticulously follow up with OTAs to remove reviews that violate their terms and conditions.' },
            { icon: '🤝', text: 'Negotiate with Customers: Communicate professionally to offer alternative solutions that prevent them from requesting a refund or writing a negative review.' },
            { icon: '💼', text: 'Refund Request Management: Manage requests step-by-step until closure, documenting all communication stages.' },
            { icon: '📊', text: 'AI-Powered Review Analysis: Extract actionable insights about the reasons for customer satisfaction or dissatisfaction and provide monthly reports to management.' }
        ]
      },
      benefits: {
          title: 'Benefits',
          features: [
              { icon: '📈', text: 'Boost your product ratings on platforms like GetYourGuide and Viator and improve their search rankings.' },
              { icon: '🚀', text: 'Increase conversion rates and sales thanks to a strong reputation and positive reviews.' },
              { icon: '🧠', text: 'Gain a deeper understanding of the customer experience and improve service quality based on real data and analytics.' },
              { icon: '🕐', text: 'Save time and effort by relying on a specialized team and AI tools that manage the entire process for you.' }
          ]
      },
      pricing: {
        title: 'Simple Pricing',
        plans: []
      },
      cta: { title: 'Upgrade Your Customer Support', subtitle: 'With Live Quality Support, you no longer have to worry about negative reviews or complaints—we manage them for you professionally, turning every negative experience into an opportunity to improve service and increase your customer satisfaction.', cta: 'Book a Free Consultation' },
    },
  },
};

const ar: Content = {
    header: {
        navItems: [
            {
                type: 'dropdown',
                title: 'المنتجات',
                items: [
                    { href: '#/products/operation-sys', text: 'نظام التشغيل بالذكاء الاصطناعي', description: 'أتمتة سير عملك بالكامل.' },
                    { href: '#/products/pickup-time', text: 'التتبع الذكي للاستلام', description: 'تتبع GPS مباشر لعمليات الاستلام.' },
                    { href: '#/products/live-support', text: 'دعم الجودة المباشر', description: 'إدارة استباقية للتقييمات والملاحظات.' },
                ],
            },
            { type: 'link', href: '#/test-automation', text: 'جرب التجربة' },
            { type: 'link', href: '#/about', text: 'من نحن' },
            { type: 'link', href: '#/faq', text: 'الأسئلة الشائعة' },
            { type: 'link', href: '#/contact', text: 'اتصل بنا' }
        ],
        cta: 'احجز استشارة',
    },
    hero: {
        headline: 'نظام التشغيل الذكي لمنظمي الرحلات السياحية العصريين',
        secondaryText: 'أتمتة الحجوزات، تبسيط التواصل، والارتقاء بتجربة ضيوفك. مصمم لموردي GetYourGuide.',
        ctaTrial: 'احجز استشارة مجانية',
        ctaDemo: 'شاهد المقدمة',
        ctaIntro: 'شاهد المقدمة',
    },
    trustedPartners: {
        title: 'متوافق بسلاسة مع جميع منصات الحجز الخاصة بك',
        partners: [
            { name: 'GetYourGuide', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648049/GetYourGuide_Logo_fb8ral.jpg' },
            { name: 'Viator', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648301/maxresdefault_dvftgx.jpg' },
            { name: 'Headout', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648345/1730430084666.headout-logo-400x300_rclqkh.jpg' },
            { name: 'Tiqets', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648540/AIdro_maZ2fUG38f8CLeNPzubXCQ8vhcrPe6qBhJFDkJbQQkzg_s900-c-k-c0x00ffffff-no-rj_azxd30.jpg' },
        ],
    },
    stats: {
        stats: [
            { value: '80%', label: 'تقليل في العمل اليدوي' },
            { value: '95%', label: 'رضا العملاء' },
            { value: '24/7', label: 'دعم آلي' },
            { value: '3x', label: 'سرعة في الاستجابة' },
        ],
    },
    whoItIsFor: {
        title: 'مصمم لمنظمي الرحلات السياحية الذين يركزون على النمو',
        focus: 'إذا كنت تستخدم GetYourGuide, Viator, Headout, أو Tiqets، فأنت بحاجة إلى TourCare.ai.',
        points: [
            'موردو GetYourGuide و Viator',
            'منظمو رحلات السفاري الصحراوية والجولات في المدن',
            'مزودو مناطق الجذب السياحي والتجارب',
            'شركات إدارة الوجهات السياحية ومنظمو الرحلات الداخلية',
            'الشركات التي تهدف إلى توسيع نطاق عملياتها',
            'الفرق التي سئمت من المهام اليدوية المتكررة',
        ],
    },
    workflow: {
        title: 'كيف يعمل: بسيط وقوي',
        steps: [
            { icon: '1️⃣', title: 'اتصال', description: 'تكامل مع منصات الحجز الخاصة بك في دقائق.' },
            { icon: '2️⃣', title: 'تكوين', description: 'قم بإعداد قواعد الأتمتة وقوالب الرسائل الخاصة بك.' },
            { icon: '3️⃣', title: 'أتمتة', description: 'دع الذكاء الاصطناعي يتعامل مع أوقات الاستلام والأسئلة الشائعة والدعم.' },
            { icon: '4️⃣', title: 'نمو', description: 'ركز على عملك بينما نتولى نحن العمليات.' },
        ],
    },
    visualFeatures: {
        title: 'كل ما تحتاجه. لا شيء لا تحتاجه.',
        features: [
            {
                image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760600739/Generated_File_October_05_2025_-_7_52PM_y9xuad.mp4',
                title: 'تواصل آلي لوقت الاستلام',
                description: 'تخلص من عدم الحضور وتقليل استفسارات الدعم عن طريق إرسال أوقات استلام دقيقة تلقائيًا إلى ضيوفك عبر WhatsApp و iMessage و SMS.',
                points: [
                    'حساب تلقائي بناءً على الموقع',
                    'إشعارات متعددة القنوات',
                    'يقلل من المكالمات الواردة "أين موعد استلامي؟"',
                    'قوالب رسائل قابلة للتخصيص',
                ],
            },
            {
                image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760650718/assets_task_01k7nzevahf1ev9yppcr9xm1pd_task_01k7nzevahf1ev9yppcr9xm1pd_genid_af342fa4-71e5-44e3-b1bd-b541577ef97d_25_10_16_07_48_188040_videos_00000_260261227_md_ir8sfv.mp4',
                title: 'دعم مباشر يعمل بالذكاء الاصطناعي على مدار 24/7',
                description: 'قدم إجابات فورية ودقيقة لأسئلة عملائك على مدار الساعة. يتم تدريب الذكاء الاصطناعي لدينا على بيانات جولتك وسياسات عملك المحددة.',
                points: [
                    'يتعامل مع ما يصل إلى 80٪ من الاستفسارات الشائعة',
                    'متاح 24/7، 365 يومًا في السنة',
                    'يفهم لغات متعددة',
                    'تسليم سلس للوكلاء البشريين إذا لزم الأمر',
                ],
            },
        ],
    },
    ctaSection: {
        title: 'هل أنت مستعد لأتمتة عملياتك؟',
        subtitle: 'حدد موعدًا لاستشارة مجانية وغير ملزمة لترى كيف يمكن لـ TourCare.ai تحويل عملك.',
        cta: 'احجز استشارتك المجانية',
    },
    playground: {
        title: 'جرب محرك الأتمتة',
        description: 'شاهد كيف يقوم نظامنا بمراسلة العملاء على الفور. أدخل التفاصيل أدناه لمحاكاة إرسال إشعار بوقت الاستلام عبر WhatsApp.',
        form: {
            bookingId: 'معرف الحجز',
            route: 'اسم الجولة / المسار',
            pickupTime: 'وقت الاستلام',
            button: 'إرسال الإشعار',
        },
        result: {
            title: 'استجابة API',
            status: 'الحالة',
            success: 'نجاح',
            sent: 'تم إرسال رسالة WhatsApp إلى العميل بالتفاصيل.',
        },
    },
    integrations: {
        title: 'يتكامل بسلاسة مع أدواتك الحالية',
        partners: ['واجهة Gmail', 'ChatGPT API', 'DeepSeek API', 'WhatsApp Cloud API', 'Zapier', 'Make.com'],
    },
    testimonials: {
        title: 'ماذا يقول شركاؤنا',
        quote: 'لقد كان TourCare.ai بمثابة تغيير جذري في عملياتنا. لقد قلصنا عبء العمل اليدوي لدينا بأكثر من 80٪ ولم يكن رضا عملائنا أعلى من أي وقت مضى. إنه أمر لا بد منه لأي منظم رحلات جاد على GetYourGuide.',
        author: 'أحمد م.',
        company: 'مدير العمليات، OceanAir Travels',
    },
    pricing: {
        title: 'أسعار بسيطة وشفافة',
        plans: [
            { name: 'الإعداد الأساسي', price: '499 دولارًا', features: ['تكامل منصة حجز واحدة', 'أتمتة وقت الاستلام', 'روبوت دعم ذكاء اصطناعي أساسي', 'قناة WhatsApp'], cta: 'اختر الأساسي' },
            { name: 'الإعداد الاحترافي', price: '999 دولارًا', features: ['ما يصل إلى 3 تكاملات', 'قواعد أتمتة متقدمة', 'روبوت ذكاء اصطناعي مدرب خصيصًا', 'تسليم للوكيل المباشر على مدار 24/7'], cta: 'اختر الاحترافي' },
            { name: 'الإعداد المتقدم', price: '1,999 دولارًا', features: ['تكاملات غير محدودة', 'نظام تشغيل كامل للعمليات', 'مدير نجاح مخصص', 'الوصول إلى API والمنطق المخصص'], cta: 'اختر المتقدم' },
        ],
        retainer: 'تشمل جميع الخطط رسوم شهرية للدعم والصيانة.',
    },
    slogan: 'ركز على الجولة، وليس على المهام.',
    footer: {
      slogan: 'نظام التشغيل الذكي لمنظمي الرحلات السياحية العصريين.',
      copyright: '© 2024 TourCare.ai. كل الحقوق محفوظة.',
      socials: [
        { name: 'Facebook', href: 'https://facebook.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
      ],
      columns: [
        {
          title: 'المنتجات',
          links: [
            { text: 'نظام التشغيل بالذكاء الاصطناعي', href: '#/products/operation-sys' },
            { text: 'التتبع الذكي للاستلام', href: '#/products/pickup-time' },
            { text: 'دعم الجودة المباشر', href: '#/products/live-support' },
          ],
        },
        {
          title: 'الشركة',
          links: [
            { text: 'من نحن', href: '#/about' },
            { text: 'جرب التجربة', href: '#/test-automation' },
            { text: 'اتصل بنا', href: '#/contact' },
          ],
        },
        {
          title: 'المصادر',
          links: [
            { text: 'الأسئلة الشائعة', href: '#/faq' },
            { text: 'المدونة', href: '#' },
            { text: 'دراسات الحالة', href: '#' },
          ],
        },
        {
          title: 'قانوني',
          links: [
            { text: 'سياسة الخصوصية', href: '#' },
            { text: 'شروط الخدمة', href: '#' },
          ],
        },
      ]
    },
    aiAssistant: {
        openButtonLabel: 'افتح مساعد الذكاء الاصطناعي',
        title: 'مساعد TourCare.ai',
        description: 'اسألني عن الأسعار والميزات أو احجز استشارة!',
        initialMessage: 'مرحبًا! أنا مساعد TourCare.ai. كيف يمكنني مساعدتك اليوم؟ يمكنك أن تطلب مني "عرض الأسعار" أو "تحديد موعد استشارة".',
        inputPlaceholder: 'اكتب رسالتك...',
        clearChat: 'مسح المحادثة',
    },
    authModal: {
        title: 'احجز استشارة مجانية',
        closeButton: 'إغلاق',
        formPlaceholderFirstName: 'الاسم الأول',
        formPlaceholderLastName: 'اسم العائلة',
        formPlaceholderEmail: 'عنوان البريد الإلكتروني',
        formPlaceholderNote: 'هل هناك أي شيء آخر يجب أن نعرفه؟ (اختياري)',
        slotPickerTitle: 'اختر الوقت المناسب لك:',
        noSlots: 'لا توجد مواعيد متاحة. يرجى الاتصال بنا مباشرة.',
        submitButton: 'تأكيد الحجز',
        confirming: 'جاري تأكيد حجزك...',
        confirmationTitle: 'تم تأكيد الحجز!',
        confirmationMessage: 'شكرًا لك! تم إرسال دعوة تقويم إلى بريدك الإلكتروني.',
        errorTitle: 'عفوًا!',
        errorMessage: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا.',
    },
    commercialOffer: {
        mainTitle: 'مهمتنا: تمكين منظمي الرحلات السياحية بالذكاء الاصطناعي',
        whoWeAre: {
            description: `تأسست TourCare.ai على يد فريق من منظمي الرحلات ومهندسي الذكاء الاصطناعي الذين عانوا بشكل مباشر من التحديات التشغيلية لتوسيع نطاق الأعمال على منصات مثل GetYourGuide.\n\nلقد سئمنا من رسائل البريد الإلكتروني المتكررة، ومكالمات الدعم في وقت متأخر من الليل، والخوف المستمر من تفويت موعد الاستلام مما يؤدي إلى مراجعة سيئة. كنا نعلم أنه يجب أن تكون هناك طريقة أفضل. لهذا السبب قمنا ببناء TourCare.ai: نظام ذكي ومؤتمت مصمم للتعامل مع المهام الشاقة، حتى تتمكن من التركيز على ما تفعله بشكل أفضل - خلق تجارب لا تُنسى.`
        },
        vision: {
            title: 'رؤيتنا',
            description: 'أن نصبح نظام التشغيل الأساسي لكل مزود جولات وأنشطة في جميع أنحاء العالم، مما يجعل الأتمتة والذكاء الاصطناعي المتطورين متاحين وبأسعار معقولة للشركات من جميع الأحجام.'
        },
        whatWeOffer: {
            title: 'ماذا نقدم',
            description: 'مجموعة شاملة من الأدوات لأتمتة رحلة العميل بأكملها.',
            features: [
                { icon: '🤖', text: 'أتمتة مدعومة بالذكاء الاصطناعي: من تأكيدات الحجز إلى ملاحظات ما بعد الجولة، أتمتة كل خطوة.' },
                { icon: '💬', text: 'دعم متعدد اللغات على مدار الساعة طوال أيام الأسبوع: مساعد ذكاء اصطناعي يتحدث لغة عملائك، في أي وقت من اليوم.' },
                { icon: '📊', text: 'رؤى قابلة للتنفيذ: افهم عملياتك بشكل لم يسبق له مثيل من خلال التحليلات والتقارير الذكية.' },
                { icon: '🔌', text: 'تكامل سلس: تواصل بسهولة مع المنصات التي تستخدمها بالفعل، مثل GetYourGuide و Viator و WhatsApp.' }
            ]
        }
    },
    faqSection: {
        pageTitle: 'الأسئلة المتداولة',
        allCategories: 'الكل',
        searchPlaceholder: 'ابحث عن سؤال...',
        categories: [
            {
                title: 'عام',
                icon: '🌍',
                items: [
                    { q: 'ما هو TourCare.ai؟', a: 'TourCare.ai هو نظام تشغيل يعمل بالذكاء الاصطناعي لمنظمي الرحلات السياحية. يقوم بأتمتة المهام الرئيسية مثل إرسال أوقات الاستلام، والإجابة على أسئلة العملاء على مدار الساعة طوال أيام الأسبوع، وإدارة الحجوزات لتوفير الوقت وتحسين رضا الضيوف.' },
                    { q: 'لمن هذا؟', a: 'نظامنا مصمم خصيصًا لمنظمي الجولات والأنشطة، خاصة أولئك الذين هم موردون على منصات مثل GetYourGuide و Viator. إذا كنت تدير الحجوزات وتنسق عمليات الاستلام وتتواصل مع الضيوف، فإن TourCare.ai مناسب لك.' }
                ]
            },
            {
                title: 'تقني',
                icon: '⚙️',
                items: [
                    { q: 'كيف يتكامل مع GetYourGuide؟', a: 'نحن نستخدم واجهات برمجة التطبيقات الرسمية وطرق التكامل الآمنة للاتصال بحساب المورد الخاص بك على GetYourGuide. يتيح لنا ذلك قراءة معلومات الحجز في الوقت الفعلي لتشغيل الأتمتة.' },
                    { q: 'هل بياناتي آمنة؟', a: 'بالتأكيد. نحن نستخدم التشفير وممارسات الأمان المتوافقة مع معايير الصناعة لحماية جميع بياناتك ومعلومات عملائك. نحن متوافقون تمامًا مع اللائحة العامة لحماية البيانات.' }
                ]
            },
            {
                title: 'التسعير',
                icon: '💰',
                items: [
                    { q: 'كيف يعمل التسعير؟', a: 'نحن نقدم حزم إعداد لمرة واحدة بناءً على احتياجاتك، تليها رسوم شهرية للدعم المستمر والصيانة واستخدام النظام. هذا يضمن أن النظام يعمل دائمًا بسلاسة وأن لديك حق الوصول إلى فريقنا عند الحاجة.' },
                    { q: 'هل هناك نسخة تجريبية مجانية؟', a: 'نحن لا نقدم نسخة تجريبية مجانية، لكننا نقدم استشارة مجانية ومتعمقة وعرضًا حيًا لنوضح لك بالضبط كيف سيعمل النظام لعملك. يتيح لنا ذلك تخصيص العرض التوضيحي لاحتياجاتك التشغيلية المحددة.' }
                ]
            }
        ]
    },
    contactPage: {
        pageTitle: 'تواصل معنا',
        intro: 'لديك سؤال أو طلب مخصص أو ترغب فقط في مشاهدة عرض توضيحي؟ \nيسعدنا أن نسمع منك. تواصل معنا، ودعنا نناقش كيف يمكننا مساعدتك على النمو.',
        whyContact: {
            title: 'لماذا تتصل بنا؟',
            reasons: [
                'تحديد موعد عرض توضيحي شخصي',
                'مناقشة مشروع أتمتة مخصص',
                'الاستفسار عن حلول المؤسسات',
                'استكشاف فرص الشراكة',
                'الحصول على إجابات لأسئلة محددة',
                'تقديم ملاحظات أو اقتراحات'
            ]
        },
        directContact: {
            title: 'الاتصال المباشر',
            items: [
                { icon: '📧', label: 'راسلنا عبر البريد الإلكتروني', value: 'contact@tourcare.ai', href: 'mailto:contact@tourcare.ai' },
                { icon: '📞', label: 'اتصل بنا (الإمارات)', value: '+971 50 123 4567', href: 'tel:+971501234567' },
                { icon: '📍', label: 'مكتبنا', value: 'دبي، الإمارات العربية المتحدة' }
            ]
        },
        instantChannels: {
            title: 'القنوات الفورية',
            items: [
                { icon: '💬', label: 'WhatsApp', action: 'تحدث معنا الآن', href: 'https://wa.me/971501234567' },
                { icon: '🤖', label: 'مساعد الذكاء الاصطناعي', action: 'اطرح سؤالاً على الذكاء الاصطناعي لدينا', href: '#/ai-assistant-shortcut' }
            ]
        },
        formSection: {
            title: 'أرسل لنا رسالة',
            subtitle: 'املأ النموذج أدناه، وسيقوم فريقنا بالرد عليك في غضون 24 ساعة.',
            form: {
                companyName: 'اسم الشركة',
                contactPerson: 'اسمك',
                email: 'بريدك الإلكتروني',
                phone: 'رقم هاتفك',
                platforms: 'ما هي منصات الحجز التي تستخدمها؟',
                platformOptions: ['GetYourGuide', 'Viator', 'Booking.com', 'موقع خاص', 'أخرى'],
                message: 'رسالتك',
                submitButton: 'إرسال الرسالة',
                sendingButton: 'جاري الإرسال...'
            },
            confirmation: 'نحن نحترم خصوصيتك ولن نشارك معلوماتك أبدًا.'
        }
    },
    productPages: {
        operationSys: {
            navTitle: 'نظام التشغيل بالذكاء الاصطناعي',
            hero: { title: 'نظام التشغيل الكامل بالذكاء الاصطناعي', subtitle: 'ادمج جميع أدواتك في مركز واحد ذكي يدير عملك تلقائيًا.' },
            descriptionSection: {
                title: 'وصف المنتج',
                content: 'حل شامل لإدارة وتشغيل كل مراحل الرحلة من لحظة الحجز وحتى نهاية التجربة، مصمم ليحوّل كل المهام اليدوية إلى عمليات أوتوماتيكية بالكامل.\n\nفي TourCare، بنقدّم نظام تشغيل متكامل يغطي كل نقطة في دورة حياة الحجز ويحوّل إدارة الرحلات إلى عملية ذكية وأوتوماتيكية بالكامل:',
                features: [
                  { icon: '🤖', text: 'تجميع الحجوزات أوتوماتيكيًا من جميع المنصات في مكان واحد دون تدخل يدوي.' },
                  { icon: '💬', text: 'رد تلقائي فوري للعميل بعد الحجز لتأكيد التفاصيل وتعزيز الثقة.' },
                  { icon: '📩', text: 'إرسال وقت الاستقبال (Backup Time) بشكل أوتوماتيكي عبر البريد الإلكتروني أو الواتساب.' },
                  { icon: '⏰', text: 'تذكيرات تلقائية للعميل بموعد الاستقبال قبل الرحلة لتقليل حالات التأخير أو الغياب.' },
                  { icon: '💳', text: 'تحصيل أي مبالغ إضافية أو خدمات اختيارية من العميل تلقائيًا من خلال الربط مع بوابات الدفع (Payment Gateway)، مع إنشاء فاتورة إلكترونية تلقائية تُرسل مع رسالة الترحيب أو رسالة الباكب تايم.' },
                  { icon: '📧', text: 'قوالب بريد إلكتروني احترافية مخصصة لكل مرحلة (تأكيد الحجز – التذكير – إرسال الباكب تايم – طلب الريفيو – متابعة الشكاوى – الفواتير)، بصياغة متعددة اللغات تعكس هوية علامتك التجارية.' },
                  { icon: '🤖', text: 'وكيل ذكاء اصطناعي (AI Agent) لجمع بيانات العميل المهمة مثل اسم الفندق، رقم الغرفة أو الموقع الجغرافي (اللوكيشن) بشكل أوتوماتيكي عبر الإيميل أو الواتساب، مما يقلّل الأخطاء ويسرّع العمليات التشغيلية.' },
                  { icon: '⭐', text: 'طلب الريفيوهات تلقائيًا بعد انتهاء الرحلة وتحويل أي شكاوى مباشرة لقسم الجودة للتحليل والمتابعة.' },
                  { icon: '📍', text: 'متابعة السائقين والرحلات لحظيًا عبر لوحة تشغيل ذكية لتقليل نسب الـ No-Show والإلغاءات.' },
                  { icon: '📱', text: 'إرسال حجوزات اللحظة الأخيرة أوتوماتيكيًا لمسؤول العمليات عبر الواتساب لسرعة التنفيذ.' },
                  { icon: '👤', text: 'إنشاء حسابات فرعية للمرشدين والسائقين والموردين لمتابعة المهام التشغيلية وتحديث حالة كل رحلة في الوقت الفعلي.' },
                  { icon: '📊', text: 'نظام تقارير يومي تلقائي يُرسل عبر البريد الإلكتروني يوضح أعداد الحجوزات الفعلية على كل منصة (GetYourGuide – Viator – Headout – وغيرها)، مع تقسيم تفصيلي حسب الوجهات والمنتجات.' },
                  { icon: '📈', text: 'لوحة تحليلات شاملة (Dashboard) تعرض جميع مؤشرات الأداء (الحجوزات، الإيرادات، معدلات الإلغاء، تقييمات العملاء والريفيوهات) في مكان واحد لتمكين الإدارة من اتخاذ قرارات أسرع وأكثر دقة.' }
                ]
            },
            pricing: {
                title: 'تسعير نظام التشغيل الكامل',
                plans: [
                    { name: 'احترافي', price: '999 دولارًا', features: ['جميع الميزات الأساسية', 'ما يصل إلى 3 تكاملات', 'دعم مباشر على مدار 24/7'], cta: 'اختر الاحترافي' },
                    { name: 'متقدم', price: '1,999 دولارًا', features: ['كل شيء في الاحترافي', 'تكاملات غير محدودة', 'الوصول إلى API'], cta: 'اختر المتقدم' },
                    { name: 'مؤسسي', price: 'مخصص', features: ['حل مصمم بالكامل', 'بنية تحتية مخصصة', 'تدريب في الموقع'], cta: 'اتصل بنا' },
                ]
            },
            cta: { title: 'هل أنت مستعد للتشغيل التلقائي الحقيقي؟', subtitle: 'دعنا نبني نظام التشغيل المخصص لك.', cta: 'احجز مكالمة تحديد نطاق' },
        },
        pickupTime: {
            navTitle: 'التتبع الذكي للاستلام',
            hero: { title: 'نظام التقاط العميل بالـ GPS', subtitle: 'Smart Pickup & Tracking' },
            descriptionSection: {
                title: 'وصف المنتج',
                content: 'منصة ذكية متخصصة في إدارة وتنظيم عمليات الاستقبال والنقل في الرحلات السياحية، تمكّنك من متابعة كل سائق وعميل في الوقت الفعلي، وضمان وصول كل رحلة في موعدها بدون تأخير. يعمل النظام على تحسين دقة التشغيل، وتقديم تجربة أكثر احترافية وسلاسة للعملاء من لحظة خروجهم من الفندق وحتى بدء جولتهم.',
                features: [
                    { icon: '📍', text: 'تتبّع مباشر (Real-Time Tracking): متابعة مواقع السائقين والعملاء لحظة بلحظة باستخدام تقنية الـ GPS.' },
                    { icon: '🔔', text: 'إشعارات لحظية: تنبيهات فورية في حال تأخر السائق أو تغيير موقع العميل.' },
                    { icon: '🧭', text: 'لوحة تشغيل لحظية: عرض الحالة المباشرة لكل عملية Pickup في واجهة تحكم واحدة وسهلة الاستخدام.' },
                    { icon: '📞', text: 'تواصل آمن ومباشر: تمكين السائق من التواصل مع العميل مباشرة دون إظهار رقم الهاتف حفاظًا على خصوصية البيانات.' },
                    { icon: '📸', text: 'دعم الوسائط: إمكانية التقاط صور من موقع السائق وإرسالها للعميل لزيادة الموثوقية وتأكيد الحضور.' },
                    { icon: '📍', text: 'مشاركة الموقع اللحظي: في حالة عدم ظهور العميل (No-Show)، يمكن إرسال Live Location في وقت الـ Backup Time لمساعدة العميل على الوصول بسهولة وتقليل احتمالية طلب الاسترداد (Refund).' },
                    { icon: '📊', text: 'تقارير تشغيلية دقيقة: عرض تحليلات تفصيلية عن أداء السائقين، حالات الـ No-Show، ونِسَب الإلغاءات، مع أدوات لتحسين الأداء وتقليل الخسائر.' }
                ]
            },
            benefits: {
                title: 'الفائدة',
                features: [
                    { icon: '🚗', text: 'تقليل نسب الـ No-Show والإلغاءات بنسبة كبيرة جدًا.' },
                    { icon: '🤝', text: 'تحسين تجربة العميل منذ لحظة خروجه من الفندق حتى بدء جولته.' },
                    { icon: '📉', text: 'خفض كبير في عدد الريفندات الناتجة عن مشكلات الوصول.' },
                    { icon: '📈', text: 'رفع كفاءة التشغيل وتحسين سمعة شركتك على المنصات العالمية.' }
                ]
            },
            pricing: {
              title: 'تسعير بسيط',
              plans: []
            },
            cta: { title: 'أتمتة عمليات الاستلام الخاصة بك اليوم', subtitle: 'بفضل نظام Smart Pickup & Tracking، هتقدر تدير كل عمليات النقل والاستقبال باحترافية كاملة، وتبني تجربة عميل أكثر دقة وموثوقية تساعدك في تقليل الخسائر وزيادة الأرباح.', cta: 'احجز استشارة مجانية' },
        },
        liveSupport: {
            navTitle: 'دعم الجودة المباشر',
            hero: { title: 'Live Quality Support', subtitle: 'نظام خدمة العملاء للجودة والريفيوهات' },
            descriptionSection: {
                title: 'وصف المنتج',
                content: 'حل متكامل يجمع بين فريق دعم بشري محترف وذكاء اصطناعي ذكي لإدارة جودة الخدمة بعد انتهاء الرحلة، وتحليل سلوك العملاء، وجمع التقييمات (Reviews)، ومعالجة الشكاوى بطريقة احترافية تساعدك على تحسين ترتيب منتجاتك على منصات OTAs مثل GetYourGuide وViator. يعمل النظام على متابعة تجربة العميل من لحظة عودته من الرحلة وحتى مرحلة التقييم، لضمان أعلى معدلات الرضا وتقليل احتمالية الحصول على تقييمات سلبية أو طلبات ريفند.',
                features: [
                    { icon: '📬', text: 'إرسال طلبات تقييم تلقائية بعد الرحلة بنصوص احترافية متعددة اللغات لزيادة فرص الحصول على تقييمات إيجابية.' },
                    { icon: '🤖', text: 'تحليل المشاعر (Sentiment Analysis): استخدام الذكاء الاصطناعي لاكتشاف العملاء غير الراضين مبكرًا قبل كتابة تقييم سلبي.' },
                    { icon: '🔎', text: 'التحقيق في الشكاوى: جمع التفاصيل وتحليل أسباب التقييمات السلبية لاتخاذ قرارات تصحيحية وتحسين الخدمة.' },
                    { icon: '🧑‍⚖', text: 'حذف الريفيوهات السلبية: متابعة دقيقة مع منصات OTAs لحذف التقييمات التي تخالف الشروط والأحكام.' },
                    { icon: '🤝', text: 'التفاوض مع العملاء: التواصل معهم بشكل احترافي لتقديم حلول بديلة تمنعهم من طلب ريفند أو كتابة تقييم سلبي.' },
                    { icon: '💼', text: 'إدارة طلبات الريفند (Refunds): إدارة الطلبات خطوة بخطوة حتى الإغلاق مع توثيق كل مراحل التواصل.' },
                    { icon: '📊', text: 'تحليل الريفيوهات بالذكاء الصناعي: استخراج رؤى قابلة للتنفيذ (Insights) حول أسباب رضا أو عدم رضا العملاء وتقديم تقارير شهرية للإدارة.' }
                ]
            },
            benefits: {
                title: 'الفائدة',
                features: [
                    { icon: '📈', text: 'رفع تقييمات منتجاتك على منصات مثل GetYourGuide وViator وتحسين ترتيبها في نتائج البحث.' },
                    { icon: '🚀', text: 'زيادة معدل التحويل والمبيعات بفضل السمعة القوية والتقييمات الإيجابية.' },
                    { icon: '🧠', text: 'فهم أعمق لتجربة العملاء وتحسين جودة الخدمة بناءً على بيانات وتحليلات حقيقية.' },
                    { icon: '🕐', text: 'توفير الوقت والجهد من خلال الاعتماد على فريق مختص وأدوات ذكاء اصطناعي تدير العملية بالكامل نيابةً عنك.' }
                ]
            },
            pricing: {
              title: 'تسعير بسيط',
              plans: []
            },
            cta: { title: 'قم بترقية دعم العملاء الخاص بك', subtitle: 'مع Live Quality Support، لن تضطر للقلق بشأن التقييمات السلبية أو الشكاوى بعد الآن – نحن نديرها عنك باحتراف، ونحوّل كل تجربة سلبية إلى فرصة لتحسين الخدمة وزيادة رضا عملائك.', cta: 'احجز استشارة مجانية' },
        },
    },
};

const de: Content = {
  header: {
    navItems: [
      {
        type: 'dropdown',
        title: 'Produkte',
        items: [
          { href: '#/products/operation-sys', text: 'KI-Betriebssystem', description: 'Automatisieren Sie Ihren gesamten Arbeitsablauf.' },
          { href: '#/products/pickup-time', text: 'Intelligente Abholung & Nachverfolgung', description: 'Echtzeit-GPS-Verfolgung für Abholungen.' },
          { href: '#/products/live-support', text: 'Live-Qualitätssupport', description: 'Proaktives Bewertungs- & Feedback-Management.' },
        ],
      },
      { type: 'link', href: '#/test-automation', text: 'Erlebnis testen' },
      { type: 'link', href: '#/about', text: 'Über uns' },
      { type: 'link', href: '#/faq', text: 'FAQ' },
      { type: 'link', href: '#/contact', text: 'Kontakt' }
    ],
    cta: 'Beratung buchen',
  },
  hero: {
    headline: 'Das KI-Betriebssystem für moderne Reiseveranstalter',
    secondaryText: 'Automatisieren Sie Buchungen, optimieren Sie die Kommunikation und verbessern Sie das Erlebnis Ihrer Gäste. Entwickelt für GetYourGuide-Anbieter.',
    ctaTrial: 'Kostenlose Beratung buchen',
    ctaDemo: 'Intro ansehen',
    ctaIntro: 'Intro ansehen',
  },
  trustedPartners: {
    title: 'Nahtlos kompatibel mit all Ihren Buchungsplattformen',
    partners: [
        { name: 'GetYourGuide', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648049/GetYourGuide_Logo_fb8ral.jpg' },
        { name: 'Viator', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648301/maxresdefault_dvftgx.jpg' },
        { name: 'Headout', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648345/1730430084666.headout-logo-400x300_rclqkh.jpg' },
        { name: 'Tiqets', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648540/AIdro_maZ2fUG38f8CLeNPzubXCQ8vhcrPe6qBhJFDkJbQQkzg_s900-c-k-c0x00ffffff-no-rj_azxd30.jpg' },
    ],
  },
  stats: {
    stats: [
      { value: '80%', label: 'Reduzierung manueller Arbeit' },
      { value: '95%', label: 'Kundenzufriedenheit' },
      { value: '24/7', label: 'Automatisierter Support' },
      { value: '3x', label: 'Schnellere Reaktionszeit' },
    ],
  },
  whoItIsFor: {
    title: 'Entwickelt für wachstumsorientierte Reiseveranstalter',
    focus: 'Wenn Sie GetYourGuide, Viator, Headout oder Tiqets nutzen, benötigen Sie TourCare.ai.',
    points: [
      'GetYourGuide- & Viator-Anbieter',
      'Wüstensafari- & Stadtrundfahrtveranstalter',
      'Anbieter von Attraktionen & Erlebnissen',
      'DMC & Inbound-Reiseveranstalter',
      'Unternehmen, die ihre Betriebsabläufe skalieren möchten',
      'Teams, die manuelle, repetitive Aufgaben leid sind',
    ],
  },
  workflow: {
    title: 'So funktioniert es: Einfach & leistungsstark',
    steps: [
      { icon: '1️⃣', title: 'Verbinden', description: 'Integrieren Sie Ihre Buchungsplattformen in wenigen Minuten.' },
      { icon: '2️⃣', title: 'Konfigurieren', description: 'Richten Sie Ihre Automatisierungsregeln und Nachrichtenvorlagen ein.' },
      { icon: '3️⃣', title: 'Automatisieren', description: 'Überlassen Sie der KI die Abholzeiten, FAQs und den Support.' },
      { icon: '4️⃣', title: 'Wachsen', description: 'Konzentrieren Sie sich auf Ihr Geschäft, während wir die Abläufe übernehmen.' },
    ],
  },
  visualFeatures: {
    title: 'Alles, was Sie brauchen. Nichts, was Sie nicht brauchen.',
    features: [
      {
        image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760600739/Generated_File_October_05_2025_-_7_52PM_y9xuad.mp4',
        title: 'Automatisierte Kommunikation der Abholzeit',
        description: 'Beseitigen Sie Nichterscheinen und reduzieren Sie Supportanfragen, indem Sie Ihren Gästen automatisch genaue Abholzeiten per WhatsApp, iMessage und SMS senden.',
        points: [
          'Automatische Berechnung basierend auf dem Standort',
          'Benachrichtigungen über mehrere Kanäle',
          'Reduziert eingehende Anrufe wie "Wo bleibt meine Abholung?"',
          'Anpassbare Nachrichtenvorlagen',
        ],
      },
      {
        image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760650718/assets_task_01k7nzevahf1ev9yppcr9xm1pd_task_01k7nzevahf1ev9yppcr9xm1pd_genid_af342fa4-71e5-44e3-b1bd-b541577ef97d_25_10_16_07_48_188040_videos_00000_260261227_md_ir8sfv.mp4',
        title: 'KI-gestützter 24/7-Live-Support',
        description: 'Bieten Sie Ihren Kunden rund um die Uhr sofortige und genaue Antworten auf ihre Fragen. Unsere KI ist auf Ihre spezifischen Tourdaten und Geschäftsrichtlinien trainiert.',
        points: [
          'Bearbeitet bis zu 80 % der häufigsten Anfragen',
          'Verfügbar 24/7, 365 Tage im Jahr',
          'Versteht mehrere Sprachen',
          'Nahtlose Übergabe an menschliche Agenten bei Bedarf',
        ],
      },
    ],
  },
  ctaSection: {
    title: 'Bereit, Ihre Abläufe zu automatisieren?',
    subtitle: 'Vereinbaren Sie eine kostenlose, unverbindliche Beratung, um zu sehen, wie TourCare.ai Ihr Unternehmen verändern kann.',
    cta: 'Ihre kostenlose Beratung buchen',
  },
  playground: {
    title: 'Testen Sie die Automatisierungs-Engine',
    description: 'Sehen Sie, wie unser System Kunden sofort benachrichtigt. Geben Sie die Details unten ein, um das Senden einer Abholzeit-Benachrichtigung per WhatsApp zu simulieren.',
    form: {
      bookingId: 'Buchungs-ID',
      route: 'Tour / Routenname',
      pickupTime: 'Abholzeit',
      button: 'Benachrichtigung senden',
    },
    result: {
      title: 'API-Antwort',
      status: 'Status',
      success: 'Erfolg',
      sent: 'Eine WhatsApp-Nachricht mit den Details wurde an den Kunden gesendet.',
    },
  },
  integrations: {
    title: 'Nahtlose Integration mit Ihren bestehenden Tools',
    partners: ['Gmail Interface', 'ChatGPT API', 'DeepSeek API', 'WhatsApp Cloud API', 'Zapier', 'Make.com'],
  },
  testimonials: {
    title: 'Was unsere Partner sagen',
    quote: 'TourCare.ai hat unsere Arbeitsabläufe revolutioniert. Wir haben unseren manuellen Arbeitsaufwand um mehr als 80 % reduziert und unsere Kundenzufriedenheit war noch nie höher. Es ist ein Muss für jeden ernsthaften Reiseveranstalter auf GetYourGuide.',
    author: 'Ahmed M.',
    company: 'Operations Manager, OceanAir Travels',
  },
  pricing: {
    title: 'Einfache, transparente Preise',
    plans: [
      { name: 'Basis-Setup', price: '499 $', features: ['1 Buchungsplattform-Integration', 'Automatisierung der Abholzeit', 'Basis-KI-Support-Bot', 'WhatsApp-Kanal'], cta: 'Basis wählen' },
      { name: 'Pro-Setup', price: '999 $', features: ['Bis zu 3 Integrationen', 'Erweiterte Automatisierungsregeln', 'Maßgeschneiderter KI-Bot', '24/7-Übergabe an Live-Agenten'], cta: 'Pro wählen' },
      { name: 'Erweitertes Setup', price: '1.999 $', features: ['Unbegrenzte Integrationen', 'Vollständiges Betriebs-OS', 'Dedizierter Erfolgsmanager', 'API-Zugang & benutzerdefinierte Logik'], cta: 'Erweitert wählen' },
    ],
    retainer: 'Alle Pläne beinhalten eine monatliche Pauschale für Support und Wartung.',
  },
  slogan: 'Konzentrieren Sie sich auf die Tour, nicht auf die Aufgaben.',
  footer: {
    slogan: 'Das KI-Betriebssystem für moderne Reiseveranstalter.',
    copyright: '© 2024 TourCare.ai. Alle Rechte vorbehalten.',
    socials: [
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
    ],
    columns: [
      {
        title: 'Produkte',
        links: [
          { text: 'KI-Betriebssystem', href: '#/products/operation-sys' },
          { text: 'Intelligente Abholung & Nachverfolgung', href: '#/products/pickup-time' },
          { text: 'Live-Qualitätssupport', href: '#/products/live-support' },
        ],
      },
      {
        title: 'Unternehmen',
        links: [
          { text: 'Über uns', href: '#/about' },
          { text: 'Erlebnis testen', href: '#/test-automation' },
          { text: 'Kontakt', href: '#/contact' },
        ],
      },
      {
        title: 'Ressourcen',
        links: [
          { text: 'FAQ', href: '#/faq' },
          { text: 'Blog', href: '#' },
          { text: 'Fallstudien', href: '#' },
        ],
      },
      {
        title: 'Rechtliches',
        links: [
          { text: 'Datenschutzrichtlinie', href: '#' },
          { text: 'Nutzungsbedingungen', href: '#' },
        ],
      },
    ]
  },
  aiAssistant: {
    openButtonLabel: 'KI-Assistent öffnen',
    title: 'TourCare.ai Assistent',
    description: 'Fragen Sie mich nach Preisen, Funktionen oder buchen Sie eine Beratung!',
    initialMessage: 'Hallo! Ich bin der TourCare.ai-Assistent. Wie kann ich Ihnen heute helfen? Sie können mich bitten, "Preise anzuzeigen" oder "eine Beratung zu vereinbaren".',
    inputPlaceholder: 'Geben Sie Ihre Nachricht ein...',
    clearChat: 'Chat löschen',
  },
  authModal: {
    title: 'Kostenlose Beratung buchen',
    closeButton: 'Schließen',
    formPlaceholderFirstName: 'Vorname',
    formPlaceholderLastName: 'Nachname',
    formPlaceholderEmail: 'E-Mail-Adresse',
    formPlaceholderNote: 'Sollten wir sonst noch etwas wissen? (optional)',
    slotPickerTitle: 'Wählen Sie eine Zeit, die Ihnen passt:',
    noSlots: 'Keine verfügbaren Termine. Bitte kontaktieren Sie uns direkt.',
    submitButton: 'Buchung bestätigen',
    confirming: 'Ihre Buchung wird bestätigt...',
    confirmationTitle: 'Buchung bestätigt!',
    confirmationMessage: 'Vielen Dank! Eine Kalendereinladung wurde an Ihre E-Mail gesendet.',
    errorTitle: 'Hoppla!',
    errorMessage: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns.',
  },
  commercialOffer: {
    mainTitle: 'Unsere Mission: Reiseveranstalter mit KI zu stärken',
    whoWeAre: {
        description: `TourCare.ai wurde von einem Team aus Reiseveranstaltern und KI-Ingenieuren gegründet, die die betrieblichen Herausforderungen beim Skalieren eines Geschäfts auf Plattformen wie GetYourGuide aus erster Hand erlebt haben.\n\nWir waren die sich wiederholenden E-Mails, die nächtlichen Supportanrufe und die ständige Angst, dass eine verpasste Abholzeit zu einer schlechten Bewertung führt, leid. Wir wussten, es muss einen besseren Weg geben. Deshalb haben wir TourCare.ai entwickelt: ein intelligentes, automatisiertes System, das die mühsamen Aufgaben erledigt, damit Sie sich auf das konzentrieren können, was Sie am besten können – unvergessliche Erlebnisse schaffen.`
    },
    vision: {
        title: 'Unsere Vision',
        description: 'Das unverzichtbare Betriebssystem für jeden Tour- und Aktivitätenanbieter weltweit zu werden und anspruchsvolle Automatisierung und KI für Unternehmen jeder Größe zugänglich und erschwinglich zu machen.'
    },
    whatWeOffer: {
        title: 'Was wir bieten',
        description: 'Eine umfassende Suite von Tools zur Automatisierung Ihrer gesamten Kundenreise.',
        features: [
            { icon: '🤖', text: 'KI-gestützte Automatisierung: Von Buchungsbestätigungen bis hin zu Feedback nach der Tour, automatisieren Sie jeden Schritt.' },
            { icon: '💬', text: 'Mehrsprachiger 24/7-Support: Ein KI-Assistent, der die Sprache Ihrer Kunden spricht, zu jeder Tageszeit.' },
            { icon: '📊', text: 'Handlungsrelevante Einblicke: Verstehen Sie Ihre Abläufe wie nie zuvor mit intelligenten Analysen und Berichten.' },
            { icon: '🔌', text: 'Nahtlose Integration: Verbinden Sie sich mühelos mit den Plattformen, die Sie bereits nutzen, wie GetYourGuide, Viator und WhatsApp.' }
        ]
    }
  },
  faqSection: {
    pageTitle: 'Häufig gestellte Fragen',
    allCategories: 'Alle',
    searchPlaceholder: 'Nach einer Frage suchen...',
    categories: [
        {
            title: 'Allgemein',
            icon: '🌍',
            items: [
                { q: 'Was ist TourCare.ai?', a: 'TourCare.ai ist ein KI-gestütztes Betriebssystem für Reiseveranstalter. Es automatisiert wichtige Aufgaben wie das Senden von Abholzeiten, die Beantwortung von Kundenfragen rund um die Uhr und die Verwaltung von Buchungen, um Ihnen Zeit zu sparen und die Zufriedenheit der Gäste zu verbessern.' },
                { q: 'Für wen ist das?', a: 'Unser System ist speziell für Tour- und Aktivitätenanbieter konzipiert, insbesondere für diejenigen, die Anbieter auf Plattformen wie GetYourGuide und Viator sind. Wenn Sie Buchungen verwalten, Abholungen koordinieren und mit Gästen kommunizieren, ist TourCare.ai für Sie.' }
            ]
        },
        {
            title: 'Technisch',
            icon: '⚙️',
            items: [
                { q: 'Wie integriert es sich mit GetYourGuide?', a: 'Wir verwenden offizielle APIs und sichere Integrationsmethoden, um uns mit Ihrem GetYourGuide-Anbieterkonto zu verbinden. Dies ermöglicht uns, Buchungsinformationen in Echtzeit zu lesen, um Automatisierungen auszulösen.' },
                { q: 'Sind meine Daten sicher?', a: 'Absolut. Wir verwenden branchenübliche Verschlüsselungs- und Sicherheitspraktiken, um alle Ihre Daten und die Informationen Ihrer Kunden zu schützen. Wir sind vollständig DSGVO-konform.' }
            ]
        },
        {
            title: 'Preise',
            icon: '💰',
            items: [
                { q: 'Wie funktioniert die Preisgestaltung?', a: 'Wir bieten einmalige Setup-Pakete je nach Ihren Bedürfnissen an, gefolgt von einer monatlichen Pauschale für laufenden Support, Wartung und Systemnutzung. Dies stellt sicher, dass das System immer reibungslos läuft und Sie bei Bedarf Zugang zu unserem Team haben.' },
                { q: 'Gibt es eine kostenlose Testversion?', a: 'Wir bieten keine kostenlose Testversion an, aber eine kostenlose, ausführliche Beratung und Live-Demo, um Ihnen genau zu zeigen, wie das System für Ihr Unternehmen funktionieren würde. Dies ermöglicht es uns, die Demonstration auf Ihre spezifischen betrieblichen Anforderungen zuzuschneiden.' }
            ]
        }
    ]
  },
  contactPage: {
    pageTitle: 'Kontaktieren Sie uns',
    intro: 'Haben Sie eine Frage, einen speziellen Wunsch oder möchten Sie einfach eine Demo sehen? \nWir würden uns freuen, von Ihnen zu hören. Melden Sie sich, und lassen Sie uns besprechen, wie wir Ihnen beim Wachsen helfen können.',
    whyContact: {
        title: 'Warum uns kontaktieren?',
        reasons: [
            'Eine personalisierte Demo vereinbaren',
            'Ein benutzerdefiniertes Automatisierungsprojekt besprechen',
            'Informationen zu Unternehmenslösungen anfordern',
            'Partnerschaftsmöglichkeiten erkunden',
            'Antworten auf spezifische Fragen erhalten',
            'Feedback oder Vorschläge geben'
        ]
    },
    directContact: {
        title: 'Direkter Kontakt',
        items: [
            { icon: '📧', label: 'E-Mail an uns', value: 'contact@tourcare.ai', href: 'mailto:contact@tourcare.ai' },
            { icon: '📞', label: 'Rufen Sie uns an (VAE)', value: '+971 50 123 4567', href: 'tel:+971501234567' },
            { icon: '📍', label: 'Unser Büro', value: 'Dubai, Vereinigte Arabische Emirate' }
        ]
    },
    instantChannels: {
        title: 'Sofortkanäle',
        items: [
            { icon: '💬', label: 'WhatsApp', action: 'Chatten Sie jetzt mit uns', href: 'https://wa.me/971501234567' },
            { icon: '🤖', label: 'KI-Assistent', action: 'Stellen Sie unserer KI eine Frage', href: '#/ai-assistant-shortcut' }
        ]
    },
    formSection: {
        title: 'Senden Sie uns eine Nachricht',
        subtitle: 'Füllen Sie das untenstehende Formular aus, und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.',
        form: {
            companyName: 'Firmenname',
            contactPerson: 'Ihr Name',
            email: 'Ihre E-Mail',
            phone: 'Ihre Telefonnummer',
            platforms: 'Welche Buchungsplattformen nutzen Sie?',
            platformOptions: ['GetYourGuide', 'Viator', 'Booking.com', 'Eigene Website', 'Andere'],
            message: 'Ihre Nachricht',
            submitButton: 'Nachricht senden',
            sendingButton: 'Wird gesendet...'
        },
        confirmation: 'Wir respektieren Ihre Privatsphäre und werden Ihre Informationen niemals weitergeben.'
    }
  },
  productPages: {
    operationSys: {
      navTitle: 'KI-Betriebssystem',
      hero: { title: 'Das komplette KI-Betriebssystem', subtitle: 'Integrieren Sie all Ihre Tools in einen einzigen, intelligenten Hub, der Ihr Geschäft auf Autopilot verwaltet.' },
      descriptionSection: {
        title: 'Produktbeschreibung',
        content: 'Eine umfassende Lösung zur Verwaltung und zum Betrieb aller Phasen der Tour, vom Buchungszeitpunkt bis zum Ende des Erlebnisses, die darauf ausgelegt ist, alle manuellen Aufgaben in vollautomatische Prozesse umzuwandeln.\n\nBei TourCare bieten wir ein integriertes Betriebssystem, das jeden Punkt im Lebenszyklus der Buchung abdeckt und das Tourmanagement in einen intelligenten, vollautomatischen Prozess verwandelt:',
        features: [
          { icon: '🤖', text: 'Sammeln Sie Buchungen von allen Plattformen automatisch an einem Ort ohne manuellen Eingriff.' },
          { icon: '💬', text: 'Sofortige automatische Antwort an den Kunden nach der Buchung zur Bestätigung der Details und zum Aufbau von Vertrauen.' },
          { icon: '📩', text: 'Senden Sie Abholzeiten automatisch per E-Mail oder WhatsApp.' },
          { icon: '⏰', text: 'Automatische Erinnerungen an den Kunden über die Abholzeit vor der Reise, um Verspätungen oder Nichterscheinen zu reduzieren.' },
          { icon: '💳', text: 'Erheben Sie automatisch zusätzliche Beträge oder optionale Dienstleistungen vom Kunden durch Anbindung an Zahlungsgateways, mit einer automatischen elektronischen Rechnung, die mit der Willkommens- oder Abholzeitnachricht gesendet wird.' },
          { icon: '📧', text: 'Professionelle E-Mail-Vorlagen, die für jede Phase angepasst sind (Buchungsbestätigung - Erinnerung - Senden der Abholzeit - Bewertungsanfrage - Beschwerdeverfolgung - Rechnungen), mit mehrsprachiger Formulierung, die Ihre Markenidentität widerspiegelt.' },
          { icon: '🤖', text: 'KI-Agent zum automatischen Sammeln wichtiger Kundendaten wie Hotelname, Zimmernummer oder geografischer Standort per E-Mail oder WhatsApp, was Fehler reduziert und betriebliche Prozesse beschleunigt.' },
          { icon: '⭐', text: 'Fordern Sie nach der Reise automatisch Bewertungen an und leiten Sie Beschwerden direkt an die Qualitätsabteilung zur Analyse und Nachverfolgung weiter.' },
          { icon: '📍', text: 'Verfolgen Sie Fahrer und Fahrten in Echtzeit über ein intelligentes Dashboard, um die Raten von Nichterscheinen und Stornierungen zu reduzieren.' },
          { icon: '📱', text: 'Senden Sie Last-Minute-Buchungen automatisch per WhatsApp an den Betriebsleiter zur schnellen Ausführung.' },
          { icon: '👤', text: 'Erstellen Sie Unterkonten für Reiseführer, Fahrer und Lieferanten, um betriebliche Aufgaben zu verfolgen und den Status jeder Reise in Echtzeit zu aktualisieren.' },
          { icon: '📊', text: 'Automatisches tägliches Berichtssystem, das per E-Mail gesendet wird und die tatsächliche Anzahl der Buchungen auf jeder Plattform (GetYourGuide - Viator - Headout - usw.) anzeigt, mit einer detaillierten Aufschlüsselung nach Zielen und Produkten.' },
          { icon: '📈', text: 'Ein umfassendes Analyse-Dashboard, das alle Leistungsindikatoren (Buchungen, Einnahmen, Stornierungsraten, Kundenbewertungen und Rezensionen) an einem Ort anzeigt, damit das Management schnellere und genauere Entscheidungen treffen kann.' }
        ]
      },
      pricing: {
        title: 'Preise für das vollständige Betriebssystem',
        plans: [
          { name: 'Pro', price: '999 $', features: ['Alle Kernfunktionen', 'Bis zu 3 Integrationen', '24/7 Live-Support'], cta: 'Pro wählen' },
          { name: 'Erweitert', price: '1.999 $', features: ['Alles in Pro', 'Unbegrenzte Integrationen', 'API-Zugang'], cta: 'Erweitert wählen' },
          { name: 'Unternehmen', price: 'Individuell', features: ['Vollständig maßgeschneiderte Lösung', 'Dedizierte Infrastruktur', 'Schulung vor Ort'], cta: 'Kontaktieren Sie uns' },
        ]
      },
      cta: { title: 'Bereit für echten Autopiloten?', subtitle: 'Lassen Sie uns Ihr individuelles Betriebssystem erstellen.', cta: 'Planungsgespräch buchen' },
    },
    pickupTime: {
      navTitle: 'Intelligente Abholung & Nachverfolgung',
      hero: { title: 'Intelligentes Abhol- & Nachverfolgungssystem', subtitle: 'GPS-basiertes Kundenabholungssystem' },
      descriptionSection: {
        title: 'Produktbeschreibung',
        content: 'Eine intelligente Plattform, die auf die Verwaltung und Organisation von Abhol- und Transportvorgängen für touristische Reisen spezialisiert ist und es Ihnen ermöglicht, jeden Fahrer und Kunden in Echtzeit zu verfolgen, um sicherzustellen, dass jede Reise pünktlich und ohne Verzögerung ankommt. Das System verbessert die betriebliche Genauigkeit und bietet ein professionelleres und reibungsloseres Erlebnis für die Kunden vom Verlassen ihres Hotels bis zum Beginn ihrer Tour.',
        features: [
            { icon: '📍', text: 'Echtzeit-Nachverfolgung: Überwachen Sie die Standorte von Fahrern und Kunden von Moment zu Moment mithilfe der GPS-Technologie.' },
            { icon: '🔔', text: 'Sofortige Benachrichtigungen: Unverzügliche Warnungen, wenn sich ein Fahrer verspätet oder sich der Standort eines Kunden ändert.' },
            { icon: '🧭', text: 'Live-Betriebs-Dashboard: Sehen Sie den Live-Status jedes Abholvorgangs in einem einzigen, einfach zu bedienenden Kontrollpanel.' },
            { icon: '📞', text: 'Sichere & direkte Kommunikation: Ermöglichen Sie es den Fahrern, Kunden direkt zu kontaktieren, ohne Telefonnummern preiszugeben, um den Datenschutz zu gewährleisten.' },
            { icon: '📸', text: 'Medienunterstützung: Möglichkeit, Fotos vom Standort des Fahrers aufzunehmen und an den Kunden zu senden, um die Zuverlässigkeit zu erhöhen und die Anwesenheit zu bestätigen.' },
            { icon: '📍', text: 'Live-Standortfreigabe: Im Falle eines Nichterscheinens kann zur Backup-Zeit ein Live-Standort gesendet werden, um dem Kunden die Anreise zu erleichtern und die Wahrscheinlichkeit einer Rückerstattungsanforderung zu verringern.' },
            { icon: '📊', text: 'Genaue Betriebsberichte: Sehen Sie detaillierte Analysen zur Fahrerleistung, zu Fällen von Nichterscheinen und Stornierungsraten, mit Tools zur Leistungsverbesserung und Verlustreduzierung.' }
        ]
      },
      benefits: {
          title: 'Vorteile',
          features: [
              { icon: '🚗', text: 'Reduzieren Sie die Raten von Nichterscheinen und Stornierungen erheblich.' },
              { icon: '🤝', text: 'Verbessern Sie das Kundenerlebnis vom Verlassen des Hotels bis zum Beginn der Tour.' },
              { icon: '📉', text: 'Eine deutliche Reduzierung der Rückerstattungen aufgrund von Ankunftsproblemen.' },
              { icon: '📈', text: 'Steigern Sie die betriebliche Effizienz und verbessern Sie den Ruf Ihres Unternehmens auf globalen Plattformen.' }
          ]
      },
      pricing: {
        title: 'Einfache Preise',
        plans: []
      },
      cta: { title: 'Automatisieren Sie Ihre Abholungen noch heute', subtitle: 'Mit dem intelligenten Abhol- & Nachverfolgungssystem können Sie alle Transport- und Abholvorgänge mit vollständiger Professionalität verwalten und ein genaueres und zuverlässigeres Kundenerlebnis schaffen, das Ihnen hilft, Verluste zu reduzieren und Gewinne zu steigern.', cta: 'Kostenlose Beratung buchen' },
    },
    liveSupport: {
      navTitle: 'Live-Qualitätssupport',
      hero: { title: 'Live-Qualitätssupport', subtitle: 'Kundenservice-System für Qualität und Bewertungen' },
      descriptionSection: {
        title: 'Produktbeschreibung',
        content: 'Eine integrierte Lösung, die ein professionelles menschliches Support-Team mit intelligenter KI kombiniert, um die Servicequalität nach Ende der Tour zu verwalten, das Kundenverhalten zu analysieren, Bewertungen zu sammeln und Beschwerden professionell zu bearbeiten, um Ihnen zu helfen, Ihre Produkt-Rankings auf OTAs wie GetYourGuide und Viator zu verbessern. Das System verfolgt das Erlebnis des Kunden vom Moment seiner Rückkehr von der Reise bis zur Bewertungsphase, um höchste Zufriedenheitsraten zu gewährleisten und die Wahrscheinlichkeit negativer Bewertungen oder Rückerstattungsanträge zu reduzieren.',
        features: [
            { icon: '📬', text: 'Senden Sie nach der Reise automatisierte Bewertungsanfragen mit professionellen, mehrsprachigen Texten, um die Chancen auf positive Bewertungen zu erhöhen.' },
            { icon: '🤖', text: 'Stimmungsanalyse: Verwenden Sie künstliche Intelligenz, um unzufriedene Kunden frühzeitig zu erkennen, bevor sie eine negative Bewertung schreiben.' },
            { icon: '🔎', text: 'Beschwerdeuntersuchung: Sammeln Sie Details und analysieren Sie die Gründe für negative Bewertungen, um korrigierende Entscheidungen zu treffen und den Service zu verbessern.' },
            { icon: '🧑‍⚖', text: 'Entfernung negativer Bewertungen: Sorgfältige Nachverfolgung bei OTAs, um Bewertungen zu entfernen, die gegen deren Geschäftsbedingungen verstoßen.' },
            { icon: '🤝', text: 'Verhandeln Sie mit Kunden: Kommunizieren Sie professionell, um alternative Lösungen anzubieten, die sie davon abhalten, eine Rückerstattung zu beantragen oder eine negative Bewertung zu schreiben.' },
            { icon: '💼', text: 'Verwaltung von Rückerstattungsanträgen: Verwalten Sie Anträge Schritt für Schritt bis zum Abschluss und dokumentieren Sie alle Kommunikationsphasen.' },
            { icon: '📊', text: 'KI-gestützte Bewertungsanalyse: Extrahieren Sie handlungsrelevante Einblicke über die Gründe für die Zufriedenheit oder Unzufriedenheit der Kunden und stellen Sie der Geschäftsleitung monatliche Berichte zur Verfügung.' }
        ]
      },
      benefits: {
          title: 'Vorteile',
          features: [
              { icon: '📈', text: 'Steigern Sie Ihre Produktbewertungen auf Plattformen wie GetYourGuide und Viator und verbessern Sie deren Suchrankings.' },
              { icon: '🚀', text: 'Erhöhen Sie die Konversionsraten und den Umsatz dank eines starken Rufs und positiver Bewertungen.' },
              { icon: '🧠', text: 'Gewinnen Sie ein tieferes Verständnis für das Kundenerlebnis und verbessern Sie die Servicequalität auf der Grundlage von echten Daten und Analysen.' },
              { icon: '🕐', text: 'Sparen Sie Zeit und Mühe, indem Sie sich auf ein spezialisiertes Team und KI-Tools verlassen, die den gesamten Prozess für Sie verwalten.' }
          ]
      },
      pricing: {
        title: 'Einfache Preise',
        plans: []
      },
      cta: { title: 'Verbessern Sie Ihren Kundensupport', subtitle: 'Mit Live Quality Support müssen Sie sich keine Sorgen mehr über negative Bewertungen oder Beschwerden machen – wir verwalten sie professionell für Sie und verwandeln jede negative Erfahrung in eine Chance, den Service zu verbessern und Ihre Kundenzufriedenheit zu steigern.', cta: 'Kostenlose Beratung buchen' },
    },
  },
};

const es: Content = {
  header: {
    navItems: [
      {
        type: 'dropdown',
        title: 'Productos',
        items: [
          { href: '#/products/operation-sys', text: 'Sistema de Operaciones con IA', description: 'Automatice todo su flujo de trabajo.' },
          { href: '#/products/pickup-time', text: 'Recogida y Seguimiento Inteligente', description: 'Seguimiento GPS en tiempo real para recogidas.' },
          { href: '#/products/live-support', text: 'Soporte de Calidad en Vivo', description: 'Gestión proactiva de reseñas y comentarios.' },
        ],
      },
      { type: 'link', href: '#/test-automation', text: 'Probar Experiencia' },
      { type: 'link', href: '#/about', text: 'Sobre nosotros' },
      { type: 'link', href: '#/faq', text: 'Preguntas Frecuentes' },
      { type: 'link', href: '#/contact', text: 'Contacto' }
    ],
    cta: 'Reservar una consulta',
  },
  hero: {
    headline: 'El Sistema Operativo con IA para Operadores Turísticos Modernos',
    secondaryText: 'Automatice las reservas, agilice la comunicación y mejore la experiencia de sus huéspedes. Diseñado para proveedores de GetYourGuide.',
    ctaTrial: 'Reservar consulta gratuita',
    ctaDemo: 'Ver introducción',
    ctaIntro: 'Ver introducción',
  },
  trustedPartners: {
    title: 'Compatible sin problemas con todas sus plataformas de reserva',
    partners: [
        { name: 'GetYourGuide', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648049/GetYourGuide_Logo_fb8ral.jpg' },
        { name: 'Viator', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648301/maxresdefault_dvftgx.jpg' },
        { name: 'Headout', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648345/1730430084666.headout-logo-400x300_rclqkh.jpg' },
        { name: 'Tiqets', logoUrl: 'https://res.cloudinary.com/dqlurfwet/image/upload/v1760648540/AIdro_maZ2fUG38f8CLeNPzubXCQ8vhcrPe6qBhJFDkJbQQkzg_s900-c-k-c0x00ffffff-no-rj_azxd30.jpg' },
    ],
  },
  stats: {
    stats: [
      { value: '80%', label: 'Reducción del trabajo manual' },
      { value: '95%', label: 'Satisfacción del cliente' },
      { value: '24/7', label: 'Soporte automatizado' },
      { value: '3x', label: 'Tiempo de respuesta más rápido' },
    ],
  },
  whoItIsFor: {
    title: 'Diseñado para operadores turísticos centrados en el crecimiento',
    focus: 'Si utiliza GetYourGuide, Viator, Headout o Tiqets, necesita TourCare.ai.',
    points: [
      'Proveedores de GetYourGuide y Viator',
      'Operadores de safaris por el desierto y tours por la ciudad',
      'Proveedores de atracciones y experiencias',
      'DMC y operadores de turismo receptivo',
      'Empresas que buscan escalar operaciones',
      'Equipos cansados de tareas manuales y repetitivas',
    ],
  },
  workflow: {
    title: 'Cómo funciona: Simple y potente',
    steps: [
      { icon: '1️⃣', title: 'Conectar', description: 'Integre sus plataformas de reserva en minutos.' },
      { icon: '2️⃣', title: 'Configurar', description: 'Configure sus reglas de automatización y plantillas de mensajes.' },
      { icon: '3️⃣', title: 'Automatizar', description: 'Deje que la IA se encargue de los horarios de recogida, las preguntas frecuentes y el soporte.' },
      { icon: '4️⃣', title: 'Crecer', description: 'Concéntrese en su negocio mientras nosotros nos encargamos de las operaciones.' },
    ],
  },
  visualFeatures: {
    title: 'Todo lo que necesita. Nada que no necesite.',
    features: [
      {
        image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760600739/Generated_File_October_05_2025_-_7_52PM_y9xuad.mp4',
        title: 'Comunicación automatizada de la hora de recogida',
        description: 'Elimine las ausencias y reduzca las consultas de soporte enviando automáticamente a sus huéspedes las horas de recogida precisas a través de WhatsApp, iMessage y SMS.',
        points: [
          'Cálculo automático basado en la ubicación',
          'Notificaciones multicanal',
          'Reduce las llamadas entrantes de "¿dónde está mi recogida?"',
          'Plantillas de mensajes personalizables',
        ],
      },
      {
        image: 'https://res.cloudinary.com/dqlurfwet/video/upload/v1760650718/assets_task_01k7nzevahf1ev9yppcr9xm1pd_task_01k7nzevahf1ev9yppcr9xm1pd_genid_af342fa4-71e5-44e3-b1bd-b541577ef97d_25_10_16_07_48_188040_videos_00000_260261227_md_ir8sfv.mp4',
        title: 'Soporte en vivo 24/7 impulsado por IA',
        description: 'Proporcione respuestas instantáneas y precisas a las preguntas de sus clientes durante todo el día. Nuestra IA está entrenada con los datos específicos de su tour y las políticas de su empresa.',
        points: [
          'Maneja hasta el 80% de las consultas comunes',
          'Disponible 24/7, los 365 días del año',
          'Entiende múltiples idiomas',
          'Traspaso sin problemas a agentes humanos si es necesario',
        ],
      },
    ],
  },
  ctaSection: {
    title: '¿Listo para automatizar sus operaciones?',
    subtitle: 'Programe una consulta gratuita y sin compromiso para ver cómo TourCare.ai puede transformar su negocio.',
    cta: 'Reserve su consulta gratuita',
  },
  playground: {
    title: 'Pruebe el motor de automatización',
    description: 'Vea cómo nuestro sistema envía mensajes a los clientes al instante. Ingrese los detalles a continuación para simular el envío de una notificación de hora de recogida a través de WhatsApp.',
    form: {
      bookingId: 'ID de reserva',
      route: 'Nombre del tour / ruta',
      pickupTime: 'Hora de recogida',
      button: 'Enviar notificación',
    },
    result: {
      title: 'Respuesta de la API',
      status: 'Estado',
      success: 'Éxito',
      sent: 'Se ha enviado un mensaje de WhatsApp al cliente con los detalles.',
    },
  },
  integrations: {
    title: 'Se integra perfectamente con sus herramientas existentes',
    partners: ['Interfaz de Gmail', 'API de ChatGPT', 'API de DeepSeek', 'API de WhatsApp Cloud', 'Zapier', 'Make.com'],
  },
  testimonials: {
    title: 'Lo que dicen nuestros socios',
    quote: 'TourCare.ai ha cambiado las reglas del juego para nuestras operaciones. Hemos reducido nuestra carga de trabajo manual en más del 80% y la satisfacción de nuestros clientes nunca ha sido tan alta. Es imprescindible para cualquier operador turístico serio en GetYourGuide.',
    author: 'Ahmed M.',
    company: 'Gerente de Operaciones, OceanAir Travels',
  },
  pricing: {
    title: 'Precios simples y transparentes',
    plans: [
      { name: 'Configuración Básica', price: '$499', features: ['Integración de 1 plataforma de reservas', 'Automatización de la hora de recogida', 'Bot de soporte de IA básico', 'Canal de WhatsApp'], cta: 'Elegir Básica' },
      { name: 'Configuración Pro', price: '$999', features: ['Hasta 3 integraciones', 'Reglas de automatización avanzadas', 'Bot de IA entrenado a medida', 'Traspaso a agente en vivo 24/7'], cta: 'Elegir Pro' },
      { name: 'Configuración Avanzada', price: '$1,999', features: ['Integraciones ilimitadas', 'SO de operaciones completo', 'Gerente de éxito dedicado', 'Acceso a la API y lógica personalizada'], cta: 'Elegir Avanzada' },
    ],
    retainer: 'Todos los planes incluyen una tarifa mensual de soporte y mantenimiento.',
  },
  slogan: 'Concéntrese en el tour, no en las tareas.',
  footer: {
    slogan: 'El Sistema Operativo con IA para Operadores Turísticos Modernos.',
    copyright: '© 2024 TourCare.ai. Todos los derechos reservados.',
    socials: [
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
    ],
    columns: [
      {
        title: 'Productos',
        links: [
          { text: 'Sistema de Operaciones con IA', href: '#/products/operation-sys' },
          { text: 'Recogida y Seguimiento Inteligente', href: '#/products/pickup-time' },
          { text: 'Soporte de Calidad en Vivo', href: '#/products/live-support' },
        ],
      },
      {
        title: 'Compañía',
        links: [
          { text: 'Sobre nosotros', href: '#/about' },
          { text: 'Probar Experiencia', href: '#/test-automation' },
          { text: 'Contáctenos', href: '#/contact' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { text: 'Preguntas Frecuentes', href: '#/faq' },
          { text: 'Blog', href: '#' },
          { text: 'Casos de estudio', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: 'Política de privacidad', href: '#' },
          { text: 'Términos de servicio', href: '#' },
        ],
      },
    ]
  },
  aiAssistant: {
    openButtonLabel: 'Abrir Asistente de IA',
    title: 'Asistente de TourCare.ai',
    description: '¡Pregúnteme sobre precios, características o reserve una consulta!',
    initialMessage: '¡Hola! Soy el asistente de TourCare.ai. ¿Cómo puedo ayudarle hoy? Puede pedirme que "muestre los precios" o "programe una consulta".',
    inputPlaceholder: 'Escriba su mensaje...',
    clearChat: 'Limpiar chat',
  },
  authModal: {
    title: 'Reservar una consulta gratuita',
    closeButton: 'Cerrar',
    formPlaceholderFirstName: 'Nombre',
    formPlaceholderLastName: 'Apellido',
    formPlaceholderEmail: 'Dirección de correo electrónico',
    formPlaceholderNote: '¿Algo más que debamos saber? (opcional)',
    slotPickerTitle: 'Elija un horario que le convenga:',
    noSlots: 'No hay horarios disponibles. Por favor, contáctenos directamente.',
    submitButton: 'Confirmar reserva',
    confirming: 'Confirmando su reserva...',
    confirmationTitle: '¡Reserva confirmada!',
    confirmationMessage: '¡Gracias! Se ha enviado una invitación de calendario a su correo electrónico.',
    errorTitle: '¡Vaya!',
    errorMessage: 'Algo salió mal. Por favor, inténtelo de nuevo o contáctenos.',
  },
  commercialOffer: {
    mainTitle: 'Nuestra misión: Empoderar a los operadores turísticos con IA',
    whoWeAre: {
        description: `TourCare.ai fue fundado por un equipo de operadores turísticos e ingenieros de IA que experimentaron de primera mano los desafíos operativos de escalar un negocio en plataformas como GetYourGuide.\n\nNos cansamos de los correos electrónicos repetitivos, las llamadas de soporte nocturnas y el miedo constante de que una hora de recogida perdida condujera a una mala crítica. Sabíamos que tenía que haber una mejor manera. Es por eso que construimos TourCare.ai: un sistema inteligente y automatizado diseñado para manejar las tareas tediosas, para que pueda concentrarse en lo que mejor sabe hacer: crear experiencias inolvidables.`
    },
    vision: {
        title: 'Nuestra visión',
        description: 'Convertirnos en el sistema operativo esencial para cada proveedor de tours y actividades en todo el mundo, haciendo que la automatización sofisticada y la IA sean accesibles y asequibles para empresas de todos los tamaños.'
    },
    whatWeOffer: {
        title: 'Lo que ofrecemos',
        description: 'Un conjunto completo de herramientas para automatizar todo el recorrido de su cliente.',
        features: [
            { icon: '🤖', text: 'Automatización impulsada por IA: Desde confirmaciones de reserva hasta comentarios posteriores al tour, automatice cada paso.' },
            { icon: '💬', text: 'Soporte multilingüe 24/7: Un asistente de IA que habla el idioma de sus clientes, a cualquier hora del día.' },
            { icon: '📊', text: 'Información procesable: Entienda sus operaciones como nunca antes con análisis e informes inteligentes.' },
            { icon: '🔌', text: 'Integración perfecta: Conéctese sin esfuerzo con las plataformas que ya utiliza, como GetYourGuide, Viator y WhatsApp.' }
        ]
    }
  },
  faqSection: {
    pageTitle: 'Preguntas Frecuentes',
    allCategories: 'Todas',
    searchPlaceholder: 'Buscar una pregunta...',
    categories: [
        {
            title: 'General',
            icon: '🌍',
            items: [
                { q: '¿Qué es TourCare.ai?', a: 'TourCare.ai es un sistema operativo impulsado por IA para operadores turísticos. Automatiza tareas clave como el envío de horarios de recogida, la respuesta a preguntas de los clientes 24/7 y la gestión de reservas para ahorrarle tiempo y mejorar la satisfacción de los huéspedes.' },
                { q: '¿Para quién es esto?', a: 'Nuestro sistema está diseñado específicamente para operadores de tours y actividades, especialmente aquellos que son proveedores en plataformas como GetYourGuide y Viator. Si gestiona reservas, coordina recogidas y se comunica con los huéspedes, TourCare.ai es para usted.' }
            ]
        },
        {
            title: 'Técnico',
            icon: '⚙️',
            items: [
                { q: '¿Cómo se integra con GetYourGuide?', a: 'Utilizamos API oficiales y métodos de integración seguros para conectarnos con su cuenta de proveedor de GetYourGuide. Esto nos permite leer la información de la reserva en tiempo real para activar las automatizaciones.' },
                { q: '¿Están mis datos seguros?', a: 'Absolutamente. Utilizamos prácticas de seguridad y cifrado estándar de la industria para proteger todos sus datos y la información de sus clientes. Cumplimos totalmente con el GDPR.' }
            ]
        },
        {
            title: 'Precios',
            icon: '💰',
            items: [
                { q: '¿Cómo funciona el precio?', a: 'Ofrecemos paquetes de configuración únicos basados en sus necesidades, seguidos de una tarifa mensual para soporte continuo, mantenimiento y uso del sistema. Esto garantiza que el sistema siempre funcione sin problemas y que tenga acceso a nuestro equipo cuando lo necesite.' },
                { q: '¿Hay una prueba gratuita?', a: 'No ofrecemos una prueba gratuita, pero sí ofrecemos una consulta gratuita y detallada y una demostración en vivo para mostrarle exactamente cómo funcionaría el sistema para su negocio. Esto nos permite adaptar la demostración a sus necesidades operativas específicas.' }
            ]
        }
    ]
  },
  contactPage: {
    pageTitle: 'Póngase en contacto',
    intro: '¿Tiene una pregunta, una solicitud personalizada o simplemente quiere ver una demostración? \nNos encantaría saber de usted. Comuníquese y hablemos de cómo podemos ayudarlo a crecer.',
    whyContact: {
        title: '¿Por qué contactarnos?',
        reasons: [
            'Programar una demostración personalizada',
            'Discutir un proyecto de automatización a medida',
            'Consultar sobre soluciones empresariales',
            'Explorar oportunidades de asociación',
            'Obtener respuestas a preguntas específicas',
            'Proporcionar comentarios o sugerencias'
        ]
    },
    directContact: {
        title: 'Contacto directo',
        items: [
            { icon: '📧', label: 'Envíenos un correo electrónico', value: 'contact@tourcare.ai', href: 'mailto:contact@tourcare.ai' },
            { icon: '📞', label: 'Llámenos (EAU)', value: '+971 50 123 4567', href: 'tel:+971501234567' },
            { icon: '📍', label: 'Nuestra oficina', value: 'Dubai, Emiratos Árabes Unidos' }
        ]
    },
    instantChannels: {
        title: 'Canales instantáneos',
        items: [
            { icon: '💬', label: 'WhatsApp', action: 'Chatee con nosotros ahora', href: 'https://wa.me/971501234567' },
            { icon: '🤖', label: 'Asistente de IA', action: 'Haga una pregunta a nuestra IA', href: '#/ai-assistant-shortcut' }
        ]
    },
    formSection: {
        title: 'Envíenos un mensaje',
        subtitle: 'Complete el formulario a continuación y nuestro equipo se comunicará con usted dentro de las 24 horas.',
        form: {
            companyName: 'Nombre de la empresa',
            contactPerson: 'Su nombre',
            email: 'Su correo electrónico',
            phone: 'Su número de teléfono',
            platforms: '¿Qué plataformas de reserva utiliza?',
            platformOptions: ['GetYourGuide', 'Viator', 'Booking.com', 'Sitio web propio', 'Otro'],
            message: 'Su mensaje',
            submitButton: 'Enviar mensaje',
            sendingButton: 'Enviando...'
        },
        confirmation: 'Respetamos su privacidad y nunca compartiremos su información.'
    }
  },
  productPages: {
    operationSys: {
      navTitle: 'Sistema de Operaciones con IA',
      hero: { title: 'El Sistema de Operaciones con IA Completo', subtitle: 'Integre todas sus herramientas en un único centro inteligente que gestiona su negocio en piloto automático.' },
      descriptionSection: {
        title: 'Descripción del producto',
        content: 'Una solución integral para gestionar y operar todas las etapas del tour, desde el momento de la reserva hasta el final de la experiencia, diseñada para transformar todas las tareas manuales en procesos totalmente automatizados.\n\nEn TourCare, ofrecemos un sistema operativo integrado que cubre cada punto del ciclo de vida de la reserva y transforma la gestión de tours en un proceso inteligente y totalmente automatizado:',
        features: [
          { icon: '🤖', text: 'Agregue reservas de todas las plataformas automáticamente en un solo lugar sin intervención manual.' },
          { icon: '💬', text: 'Respuesta automática instantánea al cliente después de la reserva para confirmar detalles y generar confianza.' },
          { icon: '📩', text: 'Envíe los horarios de recogida automáticamente por correo electrónico o WhatsApp.' },
          { icon: '⏰', text: 'Recordatorios automáticos al cliente sobre la hora de recogida antes del viaje para reducir retrasos o ausencias.' },
          { icon: '💳', text: 'Cobre automáticamente cualquier monto adicional o servicio opcional del cliente mediante la vinculación con pasarelas de pago, con una factura electrónica automática enviada con el mensaje de bienvenida o de hora de recogida.' },
          { icon: '📧', text: 'Plantillas de correo electrónico profesionales personalizadas para cada etapa (confirmación de reserva - recordatorio - envío de hora de recogida - solicitud de reseña - seguimiento de quejas - facturas), con redacción multilingüe que refleja la identidad de su marca.' },
          { icon: '🤖', text: 'Agente de IA para recopilar automáticamente datos importantes del cliente como el nombre del hotel, el número de habitación o la ubicación geográfica por correo electrónico o WhatsApp, reduciendo errores y acelerando los procesos operativos.' },
          { icon: '⭐', text: 'Solicite reseñas automáticamente después del viaje y reenvíe cualquier queja directamente al departamento de calidad para su análisis y seguimiento.' },
          { icon: '📍', text: 'Realice un seguimiento de los conductores y los viajes en tiempo real a través de un panel de control inteligente para reducir las tasas de ausencia y cancelación.' },
          { icon: '📱', text: 'Envíe las reservas de última hora automáticamente al gerente de operaciones a través de WhatsApp para una ejecución rápida.' },
          { icon: '👤', text: 'Cree subcuentas para guías, conductores y proveedores para dar seguimiento a las tareas operativas y actualizar el estado de cada viaje en tiempo real.' },
          { icon: '📊', text: 'Sistema de informes diarios automático enviado por correo electrónico que muestra el número real de reservas en cada plataforma (GetYourGuide - Viator - Headout - etc.), con un desglose detallado por destinos y productos.' },
          { icon: '📈', text: 'Un completo panel de análisis que muestra todos los indicadores de rendimiento (reservas, ingresos, tasas de cancelación, calificaciones y reseñas de clientes) en un solo lugar para permitir que la gerencia tome decisiones más rápidas y precisas.' }
        ]
      },
      pricing: {
        title: 'Precios para el SO completo',
        plans: [
          { name: 'Pro', price: '$999', features: ['Todas las características principales', 'Hasta 3 integraciones', 'Soporte en vivo 24/7'], cta: 'Elegir Pro' },
          { name: 'Avanzado', price: '$1,999', features: ['Todo en Pro', 'Integraciones ilimitadas', 'Acceso a la API'], cta: 'Elegir Avanzado' },
          { name: 'Empresarial', price: 'Personalizado', features: ['Solución totalmente a medida', 'Infraestructura dedicada', 'Capacitación en el sitio'], cta: 'Contáctenos' },
        ]
      },
      cta: { title: '¿Listo para un verdadero piloto automático?', subtitle: 'Construyamos su sistema operativo personalizado.', cta: 'Reservar una llamada de alcance' },
    },
    pickupTime: {
      navTitle: 'Recogida y Seguimiento Inteligente',
      hero: { title: 'Sistema Inteligente de Recogida y Seguimiento', subtitle: 'Sistema de recogida de clientes basado en GPS' },
      descriptionSection: {
        title: 'Descripción del producto',
        content: 'Una plataforma inteligente especializada en la gestión y organización de las operaciones de recogida y transporte para viajes turísticos, que le permite rastrear a cada conductor y cliente en tiempo real, asegurando que cada viaje llegue a tiempo sin demora. El sistema trabaja para mejorar la precisión operativa y proporcionar una experiencia más profesional y fluida para los clientes desde el momento en que salen de su hotel hasta que comienza su tour.',
        features: [
            { icon: '📍', text: 'Seguimiento en tiempo real: Monitoree las ubicaciones de los conductores y clientes momento a momento utilizando tecnología GPS.' },
            { icon: '🔔', text: 'Notificaciones instantáneas: Alertas inmediatas si un conductor se retrasa o la ubicación de un cliente cambia.' },
            { icon: '🧭', text: 'Panel de operaciones en vivo: Vea el estado en vivo de cada operación de recogida en un único panel de control fácil de usar.' },
            { icon: '📞', text: 'Comunicación segura y directa: Permita que los conductores se comuniquen directamente con los clientes sin revelar números de teléfono para proteger la privacidad de los datos.' },
            { icon: '📸', text: 'Soporte multimedia: Capacidad para capturar fotos desde la ubicación del conductor y enviarlas al cliente para aumentar la fiabilidad y confirmar la presencia.' },
            { icon: '📍', text: 'Compartir ubicación en vivo: En caso de no presentarse, se puede enviar una ubicación en vivo a la hora de respaldo para ayudar al cliente a llegar fácilmente y reducir la probabilidad de una solicitud de reembolso.' },
            { icon: '📊', text: 'Informes operativos precisos: Vea análisis detallados sobre el rendimiento de los conductores, los casos de no presentación y las tasas de cancelación, con herramientas para mejorar el rendimiento y reducir las pérdidas.' }
        ]
      },
      benefits: {
          title: 'Beneficios',
          features: [
              { icon: '🚗', text: 'Reduzca significativamente las tasas de no presentación y cancelación.' },
              { icon: '🤝', text: 'Mejore la experiencia del cliente desde el momento en que sale del hotel hasta que comienza su tour.' },
              { icon: '📉', text: 'Una reducción importante en los reembolsos resultantes de problemas de llegada.' },
              { icon: '📈', text: 'Aumente la eficiencia operativa y mejore la reputación de su empresa en plataformas globales.' }
          ]
      },
      pricing: {
        title: 'Precios simples',
        plans: []
      },
      cta: { title: 'Automatice sus recogidas hoy', subtitle: 'Con el sistema de Recogida y Seguimiento Inteligente, puede gestionar todas las operaciones de transporte y recogida con total profesionalidad, construyendo una experiencia de cliente más precisa y fiable que le ayuda a reducir pérdidas y aumentar beneficios.', cta: 'Reservar consulta gratuita' },
    },
    liveSupport: {
      navTitle: 'Soporte de Calidad en Vivo',
      hero: { title: 'Soporte de Calidad en Vivo', subtitle: 'Sistema de atención al cliente para calidad y reseñas' },
      descriptionSection: {
        title: 'Descripción del producto',
        content: 'Una solución integrada que combina un equipo de soporte humano profesional con IA inteligente para gestionar la calidad del servicio después de que finaliza el tour, analizar el comportamiento del cliente, recopilar reseñas y manejar quejas profesionalmente para ayudarlo a mejorar la clasificación de sus productos en OTAs como GetYourGuide y Viator. El sistema sigue la experiencia del cliente desde el momento en que regresa del viaje hasta la etapa de reseña, asegurando las tasas de satisfacción más altas y reduciendo la probabilidad de reseñas negativas o solicitudes de reembolso.',
        features: [
            { icon: '📬', text: 'Envíe solicitudes de reseña automatizadas después del viaje con textos profesionales y multilingües para aumentar las posibilidades de obtener reseñas positivas.' },
            { icon: '🤖', text: 'Análisis de sentimientos: Utilice la inteligencia artificial para detectar clientes insatisfechos temprano antes de que escriban una reseña negativa.' },
            { icon: '🔎', text: 'Investigación de quejas: Recopile detalles y analice las razones de las reseñas negativas para tomar decisiones correctivas y mejorar el servicio.' },
            { icon: '🧑‍⚖', text: 'Eliminación de reseñas negativas: Haga un seguimiento meticuloso con las OTAs para eliminar las reseñas que violan sus términos y condiciones.' },
            { icon: '🤝', text: 'Negocie con los clientes: Comuníquese profesionalmente para ofrecer soluciones alternativas que les impidan solicitar un reembolso o escribir una reseña negativa.' },
            { icon: '💼', text: 'Gestión de solicitudes de reembolso: Gestione las solicitudes paso a paso hasta su cierre, documentando todas las etapas de comunicación.' },
            { icon: '📊', text: 'Análisis de reseñas impulsado por IA: Extraiga información procesable sobre las razones de la satisfacción o insatisfacción del cliente y proporcione informes mensuales a la gerencia.' }
        ]
      },
      benefits: {
          title: 'Beneficios',
          features: [
              { icon: '📈', text: 'Aumente las calificaciones de sus productos en plataformas como GetYourGuide y Viator y mejore su clasificación en las búsquedas.' },
              { icon: '🚀', text: 'Aumente las tasas de conversión y las ventas gracias a una sólida reputación y reseñas positivas.' },
              { icon: '🧠', text: 'Obtenga una comprensión más profunda de la experiencia del cliente y mejore la calidad del servicio basándose en datos y análisis reales.' },
              { icon: '🕐', text: 'Ahorre tiempo y esfuerzo confiando en un equipo especializado y herramientas de IA que gestionan todo el proceso por usted.' }
          ]
      },
      pricing: {
        title: 'Precios simples',
        plans: []
      },
      cta: { title: 'Mejore su atención al cliente', subtitle: 'Con el Soporte de Calidad en Vivo, ya no tiene que preocuparse por las reseñas negativas o las quejas; las gestionamos por usted profesionalmente, convirtiendo cada experiencia negativa en una oportunidad para mejorar el servicio y aumentar la satisfacción de sus clientes.', cta: 'Reservar consulta gratuita' },
    },
  },
};

export const content = {
    en,
    ar,
    de,
    es,
};

export const getContent = (lang: Language): Content => {
    return content[lang] || content.en;
};