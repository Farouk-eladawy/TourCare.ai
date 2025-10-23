
import { Content, Language, PrivacyPolicyContent, TermsOfServiceContent } from '../types';

const privacyPolicyEn: PrivacyPolicyContent = {
  pageTitle: 'Privacy Policy – TourCare.ai',
  lastUpdated: 'Last updated: October 18, 2025',
  sections: [
    { title: '1. Who We Are', content: 'TourCare, Inc. (“TourCare”, “we”, “us”, or “our”) is a U.S.-based company providing AI-powered automation and operations systems for tour & activity suppliers working with online travel agencies (OTAs) such as GetYourGuide, Viator, Headout, and others.\n\nEmail: support@tourcare.ai\nData Protection Contact: support@tourcare.ai\nEU Representative (Art.27 GDPR): [To be designated]\nUK Representative (UK GDPR): [To be designated]\n\nThis Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website (www.tourcare.ai), products, and related services.' },
    { title: '2. Scope', content: [
        'Suppliers & Partners: Companies and individuals using TourCare’s platform.',
        'Website Visitors: Users visiting our website or demo pages.',
        'Prospective Clients: Potential partners contacting us for demos or information.',
        'End Customers: Limited data shared via supplier integrations with OTAs.'
    ] },
    { title: '3. Categories of Data We Collect', content: [
        'Identification & Contact Data: Name, email, phone/WhatsApp number, company name, role, country.',
        'Operational Booking Data: Booking ID, product details, date/time, guest count, pickup/hotel details, customer preferences, language.',
        'Communications Data: Messages via email, chat, or WhatsApp, support tickets, and review correspondence.',
        'Payment & Billing Data: Invoice references, payment status, transaction IDs (processed securely through payment gateways — TourCare does not store card details).',
        'Technical Data: IP address, browser type, device ID, cookie identifiers, log files, and usage analytics.',
        'Review & Quality Data: Post-tour ratings, complaints, feedback, refund status, and internal investigation results.'
    ] },
    { title: '4. How We Collect Data', content: [
        'Directly from you (form submissions, demo requests, emails, chats).',
        'Automatically through cookies, analytics, and integrations.',
        'From suppliers and OTAs where integrations are active.',
        'From third-party tools (payment, CRM, analytics, communication platforms).'
    ] },
    { title: '5. Purpose of Processing', content: [
        'Service Delivery: Manage bookings, send confirmations and pickup times, issue invoices, and automate operations.',
        'Customer Experience: Provide real-time pickup tracking, quality assurance, and review management.',
        'Payments: Process add-on charges and generate invoices via secure payment gateways.',
        'Marketing & Communication: Send service updates, newsletters, and demo offers (opt-out anytime).',
        'Analytics & Security: Improve our platform, ensure fraud prevention, and maintain infrastructure safety.'
    ] },
    { title: '6. Legal Basis for Processing (GDPR/UK-GDPR)', content: [
        'Consent (Art.6(1)(a)) – for newsletters, cookies, or optional analytics.',
        'Contract (Art.6(1)(b)) – to provide our services and integrations.',
        'Legal Obligation (Art.6(1)(c)) – for accounting, tax, or compliance.',
        'Legitimate Interest (Art.6(1)(f)) – to improve performance, security, and conduct B2B marketing (subject to easy opt-out).'
    ] },
    { title: '7. Do Not Sell or Share (CCPA/CPRA)', content: 'We do not “sell” personal information as defined by the CPRA.\nCertain analytics or advertising technologies may constitute “sharing” for cross-context behavioral advertising.\nYou can opt out at any time via our “Do Not Sell or Share My Personal Information” link, and we honor Global Privacy Control (GPC) signals.' },
    { title: '8. International Data Transfers', content: 'Data may be transferred to the United States or other countries.\nWhere applicable, we rely on Standard Contractual Clauses (SCCs) and conduct Transfer Impact Assessments (TIAs) to ensure adequate protection.' },
    { title: '9. Data Retention', content: 'We retain data only as long as necessary for the purposes described:\n\n**Data Type**\t**Retention Period**\nSupport & communication logs\t12–24 months\nOperational booking data\tDuration of supplier contract + legal requirements\nBilling & payments\t5–10 years (as required by law)\nMarketing contacts\tUntil you opt out\nAnalytics & cookies\tAs per consent or browser settings' },
    { title: '10. Cookies & Tracking Technologies', content: [
        'Essential Cookies – required for core functionality (always active).',
        'Performance Cookies – analytics to improve usability (requires consent in EU/UK).',
        'Personalization/Advertising Cookies – optional, activated only with your consent.',
        'You can manage or withdraw your cookie preferences anytime through our Cookie Settings panel.'
    ]},
    { title: '11. Automated Processing & AI', content: 'We use AI-based tools to assist with data analysis, pickup coordination, and review sentiment detection.\nWe do not make legally binding decisions solely through automated processing.\nUsers may request human review of any decision that significantly affects them.' },
    { title: '12. Security', content: [
        'Encryption in transit (SSL/TLS)',
        'Role-based access controls',
        'Regular security audits and penetration testing',
        'Activity logging and intrusion detection'
    ]},
    { title: '13. Children’s Data', content: 'TourCare.ai is not directed to children under 13, and we do not knowingly collect personal data from them.' },
    { title: '14. Your Privacy Rights', content: 'Under GDPR/UK-GDPR:\n\n- Right to access, rectify, delete, restrict, or object to processing.\n- Right to data portability and to withdraw consent.\nWe respond within 30 days (extendable by 60 days for complex requests).\n\nUnder CCPA/CPRA (California Residents):\n\n- Right to know, delete, correct, opt out of “sale/share,” and non-discrimination.\nWe respond within 45 days (extendable by 45 days if necessary).\n\nTo exercise your rights, email support@tourcare.ai with “Data Request” in the subject line. Identity verification may be required.' },
    { title: '15. Security of International Partners (Processors)', content: [
        'Payment & invoicing (Stripe, PayPal, etc.)',
        'Hosting & storage (AWS, Google Cloud)',
        'CRM & communication tools (HubSpot, Intercom, WhatsApp Business)',
        'Analytics (Google Analytics, Hotjar, LinkedIn Ads)',
        'All partners are bound by Data Processing Agreements (DPAs) and comply with GDPR or equivalent safeguards.'
    ]},
    { title: '16. Accessibility & Language', content: 'This policy is available in English and Arabic. Alternative accessible formats may be requested via support@tourcare.ai.' },
    { title: '17. Updates', content: 'We may update this Privacy Policy from time to time.\nThe latest version will always be available at www.tourcare.ai/privacy and include the date of the most recent revision.' },
    { title: 'Summary', content: 'TourCare.ai is committed to protecting your personal information.\nWe only collect what’s necessary, use it transparently, and give you full control over your data.\n\nFor any questions, please contact:\n📧 support@tourcare.ai' },
  ]
};

const privacyPolicyAr: PrivacyPolicyContent = {
  pageTitle: 'سياسة الخصوصية – TourCare.ai',
  lastUpdated: 'آخر تحديث: 18 أكتوبر 2025',
  sections: [
    { title: '1. من نحن', content: 'محتوى مترجم...' },
  ]
};

const privacyPolicyDe: PrivacyPolicyContent = {
  pageTitle: 'Datenschutzrichtlinie – TourCare.ai',
  lastUpdated: 'Zuletzt aktualisiert: 18. Oktober 2025',
  sections: [
    { title: '1. Wer wir sind', content: 'Übersetzter Inhalt...' },
  ]
};

const privacyPolicyEs: PrivacyPolicyContent = {
  pageTitle: 'Política de Privacidad – TourCare.ai',
  lastUpdated: 'Última actualización: 18 de octubre de 2025',
  sections: [
    { title: '1. Quiénes somos', content: 'Contenido traducido...' },
  ]
};

const termsOfServiceEn: TermsOfServiceContent = {
  pageTitle: 'Terms of Service – TourCare.ai',
  lastUpdated: 'Last Updated: October 18, 2025',
  sections: [
    { title: '1. Acceptance of Terms', content: 'By accessing or using the TourCare.ai website (“Site”), platform, or services (collectively, the “Service”), you agree to be bound by these Terms of Service (“Terms”).\nIf you do not agree to these Terms, please do not use the Service.\n\nTourCare, Inc. (“TourCare,” “we,” “us,” or “our”) reserves the right to update or modify these Terms at any time. Any changes will take effect upon posting on our website.' },
    { title: '2. Description of the Service', content: 'TourCare.ai provides an AI-powered operations and automation platform for tour & activity suppliers working with Online Travel Agencies (OTAs) such as GetYourGuide, Viator, Headout, and others.' },
    { title: '', content: [
        'Automated booking management & scheduling',
        'Smart pickup tracking with GPS',
        'AI-driven customer communication & review management',
        'Quality control & refund handling',
        'Analytics dashboards and automated reporting'
    ]},
    { title: '', content: 'We may add or modify features from time to time to improve the Service.'},
    { title: '3. Eligibility', content: 'You must be at least 18 years old and authorized to act on behalf of a registered company or supplier to use the Service.\nBy using the Service, you represent that you have the legal capacity to enter into this agreement.' },
    { title: '4. Account Registration & Security', content: 'To access the platform, you may need to create a TourCare account.\nYou agree to:' },
    { title: '', content: [
        'Provide accurate and complete information.',
        'Keep your login credentials confidential.',
        'Be responsible for all activity under your account.'
    ]},
    { title: '', content: 'If we suspect unauthorized use, we may suspend or terminate your account for security reasons.' },
    { title: '5. Subscription, Fees & Payments', content: 'TourCare.ai may offer free trials, paid subscriptions, or custom enterprise plans.' },
    { title: '', content: [
        'Fees are charged according to the selected plan and billing cycle.',
        'Payments are processed securely through third-party payment gateways (e.g., Stripe, PayPal).',
        'You authorize us to charge your payment method automatically according to your plan’s terms.',
        'All fees are non-refundable, except where required by law or specified otherwise.'
    ]},
    { title: '6. Data Processing & Privacy', content: 'Your use of the Service is also governed by our Privacy Policy.\nBy using TourCare, you acknowledge and agree that we may process and store data as described therein, including in the U.S. and other jurisdictions.' },
    { title: '7. Supplier & End-Customer Data', content: 'When you use TourCare’s platform to process bookings or communications with customers:' },
    { title: '', content: [
        'You remain the controller of your customer data under GDPR.',
        'TourCare acts as a data processor, processing data solely under your instructions.',
        'You must ensure all data you upload or share complies with applicable privacy laws.'
    ]},
    { title: '8. Acceptable Use', content: 'You agree not to:' },
    { title: '', content: [
        'Use the Service for unlawful or fraudulent purposes.',
        'Interfere with the platform’s functionality or security.',
        'Share content that is defamatory, abusive, or violates third-party rights.',
        'Reverse engineer, copy, or resell our software without written consent.'
    ]},
    { title: '', content: 'Violation of these rules may result in account suspension or termination.' },
    { title: '9. Intellectual Property', content: 'All content, designs, software, AI models, and trademarks related to TourCare.ai are the exclusive property of TourCare, Inc.\nYou are granted a limited, non-exclusive, non-transferable license to use the platform during your subscription.\nYou may not copy, modify, or distribute any part of the Service without prior written consent.' },
    { title: '10. Third-Party Integrations', content: 'TourCare may integrate with third-party platforms (e.g., OTAs, payment processors, CRMs).\nWe are not responsible for the availability, security, or accuracy of third-party systems.\nYour use of third-party services is governed by their respective terms and policies.' },
    { title: '11. Disclaimer of Warranties', content: 'The Service is provided on an “as-is” and “as-available” basis.\nTourCare makes no warranties, express or implied, regarding reliability, accuracy, uptime, or suitability for your specific needs.' },
    { title: '12. Limitation of Liability', content: 'To the maximum extent permitted by law:' },
    { title: '', content: [
        'TourCare shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data.',
        'Our total liability for any claim related to the Service shall not exceed the total fees paid by you in the previous 12 months.'
    ]},
    { title: '13. Termination', content: 'We may suspend or terminate your account at any time for:' },
    { title: '', content: [
        'Violation of these Terms,',
        'Non-payment of fees,',
        'Legal or security reasons.'
    ]},
    { title: '', content: 'Upon termination, your right to use the Service will immediately cease.' },
    { title: '14. Governing Law & Dispute Resolution', content: 'These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law principles.\nAny disputes shall be resolved through binding arbitration in Delaware, unless otherwise required by applicable law.' },
    { title: '15. Contact', content: 'For any questions or legal notices regarding these Terms:\n\nTourCare, Inc.\nEmail: support@tourcare.ai\nWebsite: www.tourcare.ai' },
    { title: '16. Entire Agreement', content: 'These Terms, along with the Privacy Policy, constitute the entire agreement between you and TourCare regarding the use of our services, superseding any prior agreements or communications.' },
  ]
};

const termsOfServiceAr: TermsOfServiceContent = {
  pageTitle: 'شروط الخدمة – TourCare.ai',
  lastUpdated: 'آخر تحديث: 18 أكتوبر 2025',
  sections: [{ title: '1. قبول الشروط', content: 'محتوى مترجم...' }]
};
const termsOfServiceDe: TermsOfServiceContent = {
  pageTitle: 'Nutzungsbedingungen – TourCare.ai',
  lastUpdated: 'Zuletzt aktualisiert: 18. Oktober 2025',
  sections: [{ title: '1. Annahme der Bedingungen', content: 'Übersetzter Inhalt...' }]
};
const termsOfServiceEs: TermsOfServiceContent = {
  pageTitle: 'Términos de Servicio – TourCare.ai',
  lastUpdated: 'Última actualización: 18 de octubre de 2025',
  sections: [{ title: '1. Aceptación de los Términos', content: 'Contenido traducido...' }]
};


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
      { type: 'link', href: '#/demo', text: 'Demo Mode' },
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
          { text: 'Demo Mode', href: '#/demo' },
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
          { text: 'Privacy Policy', href: '#/privacy' },
          { text: 'Terms of Service', href: '#/terms' },
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
            { icon: '📧', label: 'Email Us', value: 'support@tourcare.ai', href: 'mailto:support@tourcare.ai' },
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
  demoPage: {
    title: "Interactive Demo Hub",
    subtitle: "Choose a demonstration to see how TourCare.ai can revolutionize your operations. All data is simulated and will not be stored.",
    backButton: "Back to Demos",
    workflow: {
        title: "Live Experience Workflow",
        description: "Follow the steps to see how our system handles a booking from start to finish. Each action you take triggers a real-time automated workflow.",
        cta: "Start Workflow Demo",
    },
    dashboard: {
        title: "Supplier Dashboard Simulation",
        description: "Simulate connecting a supplier account to see the unified dashboard. This demonstrates how you can manage all your bookings and communications in one place.",
        connectGyg: "Demo with GetYourGuide",
        connectViator: "Demo with Viator",
    },
    dashboardSimulation: {
        loginModal: {
            title: "Log in to {{platform}}",
            description: "This is a simulated login. Your credentials are not stored or transmitted.",
            emailPlaceholder: "Email (e.g., demo@tourcare.ai)",
            passwordPlaceholder: "Password",
            loginButton: "Log In",
        },
        loadingScreen: {
            title: "Building Your Unified Dashboard...",
            steps: [
                "Authenticating session...",
                "Discovering your products and tours...",
                "Fetching recent bookings...",
                "Syncing conversations...",
                "Analyzing pickup schedules...",
                "Finalizing dashboard...",
            ],
            complete: "Dashboard ready!",
        },
        dashboard: {
            title: "Unified Dashboard",
            searchPlaceholder: "Search by booking # or customer name...",
            localDataWarning: "Data is currently stored in your browser for this session.",
            demoNotice: "This is a demo. All booking data is for demonstration purposes.",
            upgradeButton: "Book a consultation to go live.",
            tabs: {
                bookings: "Bookings",
                alerts: "Alerts",
            },
            bookingCard: {
                pickup: "Pickup",
                missingInfo: "Missing Info",
                status: "Status",
                sendMessage: "Send Message",
                setPickup: "Set Pickup",
            }
        }
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
      cta: { title: 'Automate Your Pickups Today', subtitle: 'With the Smart Pickup & Tracking system, you can manage all transport and pickup operations with complete professionalism, building a more accurate and reliable customer experience that helps you reduce losses and increase your profits.', cta: 'Book a Free Consultation' },
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
  privacyPolicy: privacyPolicyEn,
  termsOfService: termsOfServiceEn,
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
            { type: 'link', href: '#/demo', text: 'الوضع التجريبي' },
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
            { text: 'الوضع التجريبي', href: '#/demo' },
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
            { text: 'سياسة الخصوصية', href: '#/privacy' },
            { text: 'شروط الخدمة', href: '#/terms' },
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
                { icon: '📧', label: 'راسلنا عبر البريد الإلكتروني', value: 'support@tourcare.ai', href: 'mailto:support@tourcare.ai' },
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
    demoPage: {
        title: "المركز التفاعلي التجريبي",
        subtitle: "اختر عرضًا توضيحيًا لترى كيف يمكن لـ TourCare.ai إحداث ثورة في عملياتك. جميع البيانات محاكاة ولن يتم تخزينها.",
        backButton: "العودة إلى العروض التجريبية",
        workflow: {
            title: "سير عمل التجربة الحية",
            description: "اتبع الخطوات لترى كيف يتعامل نظامنا مع الحجز من البداية إلى النهاية. كل إجراء تتخذه يؤدي إلى سير عمل آلي في الوقت الفعلي.",
            cta: "بدء العرض التجريبي لسير العمل",
        },
        dashboard: {
            title: "محاكاة لوحة تحكم المورد",
            description: "قم بمحاكاة ربط حساب مورد لرؤية لوحة التحكم الموحدة. يوضح هذا كيف يمكنك إدارة جميع حجوزاتك واتصالاتك في مكان واحد.",
            connectGyg: "عرض تجريبي مع GetYourGuide",
            connectViator: "عرض تجريبي مع Viator",
        },
        dashboardSimulation: {
            loginModal: {
                title: "تسجيل الدخول إلى {{platform}}",
                description: "هذا تسجيل دخول محاكى. لا يتم تخزين أو نقل بيانات الاعتماد الخاصة بك.",
                emailPlaceholder: "البريد الإلكتروني (مثال: demo@tourcare.ai)",
                passwordPlaceholder: "كلمة المرور",
                loginButton: "تسجيل الدخول",
            },
            loadingScreen: {
                title: "جاري إنشاء لوحة التحكم الموحدة الخاصة بك...",
                steps: [
                    "جارٍ مصادقة الجلسة...",
                    "اكتشاف منتجاتك وجولاتك...",
                    "جلب الحجوزات الأخيرة...",
                    "مزامنة المحادثات...",
                    "تحليل جداول الاستلام...",
                    "وضع اللمسات الأخيرة على لوحة التحكم...",
                ],
                complete: "لوحة التحكم جاهزة!",
            },
            dashboard: {
                title: "لوحة التحكم الموحدة",
                searchPlaceholder: "ابحث برقم الحجز أو اسم العميل...",
                localDataWarning: "يتم تخزين البيانات حاليًا في متصفحك لهذه الجلسة.",
                demoNotice: "هذا عرض تجريبي. جميع بيانات الحجز هي لأغراض العرض التوضيحي.",
                upgradeButton: "احجز استشارة للانطلاق مباشرة.",
                tabs: {
                    bookings: "الحجوزات",
                    alerts: "التنبيهات",
                },
                bookingCard: {
                    pickup: "الاستلام",
                    missingInfo: "معلومات ناقصة",
                    status: "الحالة",
                    sendMessage: "إرسال رسالة",
                    setPickup: "تحديد وقت الاستلام",
                }
            }
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
                    { icon: '🧠', text: 'فهم أعمق لتجربة العملاء وتحسين جودة الخدمة بناءً на بيانات وتحليلات حقيقية.' },
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
    privacyPolicy: privacyPolicyAr,
    termsOfService: termsOfServiceAr,
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
      { type: 'link', href: '#/demo', text: 'Demo-Modus' },
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
          { text: 'Demo-Modus', href: '#/demo' },
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
          { text: 'Datenschutzrichtlinie', href: '#/privacy' },
          { text: 'Nutzungsbedingungen', href: '#/terms' },
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
            { icon: '📧', label: 'E-Mail an uns', value: 'support@tourcare.ai', href: 'mailto:support@tourcare.ai' },
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
  demoPage: en.demoPage,
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
      // FIX: Added missing 'cta' property and completed the object to resolve a type error.
      cta: { title: 'Automatisieren Sie Ihre Abholungen noch heute', subtitle: 'Mit dem Smart Pickup & Tracking-System können Sie alle Transport- und Abholvorgänge mit voller Professionalität verwalten und so ein genaueres und zuverlässigeres Kundenerlebnis schaffen, das Ihnen hilft, Verluste zu reduzieren und Gewinne zu steigern.', cta: 'Kostenlose Beratung buchen' },
    },
    liveSupport: {
      navTitle: 'Live-Qualitätssupport',
      hero: { title: 'Live-Qualitätssupport', subtitle: 'Kundenservice-System für Qualität und Bewertungen' },
      descriptionSection: {
        title: 'Produktbeschreibung',
        content: 'Eine integrierte Lösung, die ein professionelles menschliches Support-Team mit intelligenter KI kombiniert, um die Servicequalität nach Ende der Tour zu verwalten, das Kundenverhalten zu analysieren, Bewertungen zu sammeln und Beschwerden professionell zu bearbeiten, um Ihnen zu helfen, Ihre Produktrankings auf OTAs wie GetYourGuide und Viator zu verbessern. Das System begleitet die Erfahrung des Kunden von dem Moment seiner Rückkehr von der Reise bis zur Bewertungsphase, um höchste Zufriedenheitsraten zu gewährleisten und die Wahrscheinlichkeit negativer Bewertungen oder Rückerstattungsanträge zu reduzieren.',
        features: [
            { icon: '📬', text: 'Senden Sie nach der Reise automatisierte Bewertungsanfragen mit professionellen, mehrsprachigen Texten, um die Chancen auf positive Bewertungen zu erhöhen.' },
            { icon: '🤖', text: 'Sentiment-Analyse: Nutzen Sie künstliche Intelligenz, um unzufriedene Kunden frühzeitig zu erkennen, bevor sie eine negative Bewertung schreiben.' },
            { icon: '🔎', text: 'Beschwerdeuntersuchung: Sammeln Sie Details und analysieren Sie die Gründe für negative Bewertungen, um Korrekturmaßnahmen zu ergreifen und den Service zu verbessern.' },
            { icon: '🧑‍⚖', text: 'Entfernung negativer Bewertungen: Sorgfältige Nachverfolgung bei OTAs, um Bewertungen zu entfernen, die gegen deren Geschäftsbedingungen verstoßen.' },
            { icon: '🤝', text: 'Verhandeln mit Kunden: Kommunizieren Sie professionell, um alternative Lösungen anzubieten, die sie davon abhalten, eine Rückerstattung zu beantragen oder eine negative Bewertung zu schreiben.' },
            { icon: '💼', text: 'Management von Rückerstattungsanträgen: Verwalten Sie Anträge schrittweise bis zum Abschluss und dokumentieren Sie alle Kommunikationsphasen.' },
            { icon: '📊', text: 'KI-gestützte Bewertungsanalyse: Extrahieren Sie handlungsrelevante Einblicke über die Gründe für die Zufriedenheit oder Unzufriedenheit der Kunden und stellen Sie monatliche Berichte für das Management bereit.' }
        ]
      },
      benefits: {
          title: 'Vorteile',
          features: [
              { icon: '📈', text: 'Steigern Sie Ihre Produktbewertungen auf Plattformen wie GetYourGuide und Viator und verbessern Sie deren Suchrankings.' },
              { icon: '🚀', text: 'Erhöhen Sie die Konversionsraten und den Umsatz dank eines starken Rufs und positiver Bewertungen.' },
              { icon: '🧠', text: 'Gewinnen Sie ein tieferes Verständnis für das Kundenerlebnis und verbessern Sie die Servicequalität auf der Grundlage echter Daten und Analysen.' },
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
  privacyPolicy: privacyPolicyDe,
  termsOfService: termsOfServiceDe,
};

const es: Content = {
  header: {
    navItems: [
      {
        type: 'dropdown',
        title: 'Productos',
        items: [
          { href: '#/products/operation-sys', text: 'Sistema de Operaciones IA', description: 'Automatice todo su flujo de trabajo.' },
          { href: '#/products/pickup-time', text: 'Recogida y Seguimiento Inteligente', description: 'Seguimiento GPS en tiempo real para recogidas.' },
          { href: '#/products/live-support', text: 'Soporte de Calidad en Vivo', description: 'Gestión proactiva de reseñas y comentarios.' },
        ],
      },
       { type: 'link', href: '#/demo', text: 'Modo Demo' },
      { type: 'link', href: '#/about', text: 'Sobre Nosotros' },
      { type: 'link', href: '#/faq', text: 'FAQ' },
      { type: 'link', href: '#/contact', text: 'Contacto' }
    ],
    cta: 'Reservar una Consulta',
  },
  hero: {
    headline: 'El Sistema Operativo de IA para Operadores Turísticos Modernos',
    secondaryText: 'Automatice las reservas, agilice la comunicación y eleve la experiencia de sus huéspedes. Diseñado para proveedores de GetYourGuide.',
    ctaTrial: 'Reservar una Consulta Gratuita',
    ctaDemo: 'Ver Introducción',
    ctaIntro: 'Ver Introducción',
  },
  trustedPartners: en.trustedPartners,
  stats: {
    stats: [
      { value: '80%', label: 'Reducción del Trabajo Manual' },
      { value: '95%', label: 'Satisfacción del Cliente' },
      { value: '24/7', label: 'Soporte Automatizado' },
      { value: '3x', label: 'Tiempo de Respuesta más Rápido' },
    ],
  },
  whoItIsFor: en.whoItIsFor,
  workflow: en.workflow,
  visualFeatures: en.visualFeatures,
  ctaSection: {
    title: '¿Listo para Automatizar sus Operaciones?',
    subtitle: 'Programe una consulta gratuita y sin compromiso para ver cómo TourCare.ai puede transformar su negocio.',
    cta: 'Reserve su Consulta Gratuita',
  },
  playground: en.playground,
  integrations: en.integrations,
  testimonials: en.testimonials,
  pricing: en.pricing,
  slogan: 'Concéntrese en el tour, no en las tareas.',
  footer: {
    ...en.footer,
     columns: [
      {
        title: 'Productos',
        links: [
          { text: 'Sistema de Operaciones IA', href: '#/products/operation-sys' },
          { text: 'Recogida y Seguimiento Inteligente', href: '#/products/pickup-time' },
          { text: 'Soporte de Calidad en Vivo', href: '#/products/live-support' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { text: 'Sobre Nosotros', href: '#/about' },
          { text: 'Modo Demo', href: '#/demo' },
          { text: 'Contacto', href: '#/contact' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { text: 'FAQ', href: '#/faq' },
          { text: 'Blog', href: '#' },
          { text: 'Casos de Éxito', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: 'Política de Privacidad', href: '#/privacy' },
          { text: 'Términos de Servicio', href: '#/terms' },
        ],
      },
    ]
  },
  aiAssistant: en.aiAssistant,
  authModal: en.authModal,
  commercialOffer: en.commercialOffer,
  faqSection: en.faqSection,
  contactPage: en.contactPage,
  demoPage: en.demoPage,
  productPages: en.productPages,
  privacyPolicy: privacyPolicyEs,
  termsOfService: termsOfServiceEs,
};

// FIX: Added exports for 'content' and 'getContent' to be used in useLocalization hook.
export const content = {
    en,
    ar,
    de,
    es
};

export const getContent = (lang: Language): Content => {
    return content[lang] || content.en;
};
