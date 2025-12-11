export interface SiteConfig {
  // Display Options
  showPricing: boolean;
  showAboutMe: boolean;
  showPortfolio: boolean;
  showTestimonials: boolean;
  showResources: boolean;

  // Contact
  whatsappNumber: string;
  email: string;

  // Language
  defaultLanguage: 'he' | 'en';
  enableLanguageSwitch: boolean;
  defaultDirection: 'rtl' | 'ltr';

  // Features
  enableDarkMode: boolean;
  enableAnalytics: boolean;

  // Business Hours
  businessHours: {
    enabled: boolean;
    message: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  // Display Options
  showPricing: false,
  showAboutMe: true,
  showPortfolio: true,
  showTestimonials: false,
  showResources: true,

  // Contact
  whatsappNumber: '972522770881',
  email: 'hadards@gmail.com',

  // Language
  defaultLanguage: 'he',
  enableLanguageSwitch: true,
  defaultDirection: 'rtl',

  // Features
  enableDarkMode: false,
  enableAnalytics: false,

  // Business Hours
  businessHours: {
    enabled: false,
    message: 'I respond within 24 hours'
  }
};