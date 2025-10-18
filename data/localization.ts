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
      { type: 'link', href: '#/test-automation', text: 'Test Automation' },
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
          { text: 'Test Automation', href: '#/test-automation' },
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
            { type: 'link', href: '#/test-automation', text: 'اختبار الأتمتة' },
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
            { text: 'اختبار الأتمتة', href: '#/test-automation' },
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

// Create placeholder content for new languages by cloning English
const de: Content = JSON.parse(JSON.stringify(en));
de.header.navItems = [
    { type: 'link', href: '#/products/operation-sys', text: 'Produkte' },
    { type: 'link', href: '#/test-automation', text: 'Test-Automatisierung' },
    { type: 'link', href: '#/about', text: 'Über uns' },
    { type: 'link', href: '#/faq', text: 'FAQ' },
    { type: 'link', href: '#/contact', text: 'Kontakt' }
];
de.header.cta = 'Beratung buchen';

const es: Content = JSON.parse(JSON.stringify(en));
es.header.navItems = [
    { type: 'link', href: '#/products/operation-sys', text: 'Productos' },
    { type: 'link', href: '#/test-automation', text: 'Prueba de Automatización' },
    { type: 'link', href: '#/about', text: 'Sobre nosotros' },
    { type: 'link', href: '#/faq', text: 'FAQ' },
    { type: 'link', href: '#/contact', text: 'Contacto' }
];
es.header.cta = 'Reservar consulta';


export const content = {
    en,
    ar,
    de,
    es,
};

export const getContent = (lang: Language): Content => {
    return content[lang] || content.en;
};