// For `import.meta.env` used for non-Gemini keys (Airtable, Make)
// and `process.env` for the Gemini API Key as per guidelines.
// This setup prevents TypeScript errors for both syntaxes.
// FIX: Wrapped in `declare global` to correctly augment global types in a module, as this file has exports.
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_AIRTABLE_BASE_ID: string;
    readonly VITE_AIRTABLE_TABLE_NAME: string;
    readonly VITE_AIRTABLE_API_KEY: string;
    readonly VITE_MAKE_WEBHOOK_URL: string;
    readonly VITE_MAKE_BOOKING_WEBHOOK_URL: string;
    readonly VITE_MAKE_TEST_WEBHOOK_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

declare var process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  }
};


export type Language = 'en' | 'ar' | 'de' | 'es';
export type Direction = 'ltr' | 'rtl';

export interface Plan {
  name: string;
  price: string;
  features: string[];
  cta: string;
}

export interface PricingContent {
  title: string;
  plans: Plan[];
  retainer: string;
}

export interface AiAssistantContent {
  openButtonLabel: string;
  title: string;
  description: string;
  initialMessage: string;
  inputPlaceholder: string;
}

export interface AuthModalContent {
  title: string;
  closeButton: string;
  formPlaceholderFirstName: string;
  formPlaceholderLastName: string;
  formPlaceholderEmail: string;
  formPlaceholderNote: string;
  slotPickerTitle: string;
  noSlots: string;
  submitButton: string;
  confirming: string;
  confirmationTitle: string;
  confirmationMessage: string;
  errorTitle: string;
  errorMessage: string;
}

export type NavLink = {
  type: 'link';
  href: string;
  text: string;
};

export type NavDropdown = {
  type: 'dropdown';
  title: string;
  items: { href: string; text: string; description: string }[];
};

export type NavItem = NavLink | NavDropdown;

export interface HeaderContent {
  navItems: NavItem[];
  cta: string;
}

export interface HeroContent {
  headline: string;
  secondaryText: string;
  ctaTrial: string;
  ctaDemo: string;
  ctaIntro: string;
}

export interface TrustedPartnersContent {
    title: string;
    partners: { name: string; logoUrl: string; }[];
}

export interface Stat {
    value: string;
    label: string;
}

export interface StatsContent {
    stats: Stat[];
}

export interface WhoItIsForContent {
    title: string;
    focus: string;
    points: string[];
}

export interface WorkflowStep {
    icon: string;
    title: string;
    description: string;
}

export interface WorkflowContent {
    title: string;
    steps: WorkflowStep[];
}

export interface VisualFeature {
    image: string;
    title: string;
    description: string;
    points: string[];
}

export interface VisualFeaturesContent {
    title: string;
    features: VisualFeature[];
}

export interface CtaSectionContent {
    title: string;
    subtitle: string;
    cta: string;
}

export interface IntegrationsContent {
    title: string;
    partners: string[];
}

export interface TestimonialsContent {
    title: string;
    quote: string;
    author: string;
    company: string;
}

export interface PlaygroundContent {
    title: string;
    description: string;
    form: {
      bookingId: string;
      route: string;
      pickupTime: string;
      button: string;
    };
    result: {
      title: string;
      status: string;
      success: string;
      sent: string;
    };
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface FaqCategory {
    title: string;
    icon: string;
    items: FaqItem[];
}

export interface FaqSectionContent {
    pageTitle: string;
    allCategories: string;
    searchPlaceholder: string;
    categories: FaqCategory[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  slogan: string;
  copyright: string;
  socials: { name: string; href: string; }[];
  columns: FooterColumn[];
}

export interface CommercialOfferContent {
    mainTitle: string;
    whoWeAre: {
        description: string;
    };
    vision: {
        title: string;
        description: string;
    };
    whatWeOffer: {
        title: string;
        description: string;
        features: { icon: string; text: string }[];
    };
}

export interface ProductPageContent {
    navTitle: string;
    hero: {
        title: string;
        subtitle: string;
    };
    descriptionSection: {
        title: string;
        content: string;
        features: { icon: string; text: string }[];
    };
    benefits?: {
        title: string;
        features: { icon: string, text: string }[];
    };
    pricing?: {
        title: string;
        plans: Plan[];
    };
    cta: CtaSectionContent;
}

export interface ContactPageContent {
    pageTitle: string;
    intro: string;
    whyContact: {
        title: string;
        reasons: string[];
    };
    directContact: {
        title: string;
        items: {
            icon: string;
            label: string;
            value: string;
            href?: string;
        }[];
    };
    instantChannels: {
        title: string;
        items: {
            icon: string;
            label: string;
            action: string;
            href?: string;
        }[];
    };
    formSection: {
        title: string;
        subtitle: string;
        form: {
            companyName: string;
            contactPerson: string;
            email: string;
            phone: string;
            platforms: string;
            platformOptions: string[];
            message: string;
            submitButton: string;
            sendingButton: string;
        };
        confirmation: string;
    };
}

export interface Content {
  header: HeaderContent;
  hero: HeroContent;
  trustedPartners: TrustedPartnersContent;
  stats: StatsContent;
  whoItIsFor: WhoItIsForContent;
  workflow: WorkflowContent;
  visualFeatures: VisualFeaturesContent;
  ctaSection: CtaSectionContent;
  playground: PlaygroundContent;
  integrations: IntegrationsContent;
  testimonials: TestimonialsContent;
  pricing: PricingContent;
  slogan: string;
  footer: FooterContent;
  aiAssistant: AiAssistantContent;
  authModal: AuthModalContent;
  commercialOffer: CommercialOfferContent;
  faqSection: FaqSectionContent;
  contactPage: ContactPageContent;
  productPages: {
    operationSys: ProductPageContent;
    pickupTime: ProductPageContent;
    liveSupport: ProductPageContent;
  };
}

export interface AppointmentSlot {
  id: string;
  fields: {
    DateTime: string;
    Status: 'Available' | 'Booked';
  };
}

export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}