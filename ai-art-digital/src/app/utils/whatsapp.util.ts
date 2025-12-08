import { Language } from '../language.service';

export interface WhatsAppMessageOptions {
  service?: string;
  language: Language;
  customMessage?: string;
}

export class WhatsAppUtil {
  static generateWhatsAppUrl(phoneNumber: string, options: WhatsAppMessageOptions): string {
    const message = this.generateMessage(options);
    const encodedMessage = encodeURIComponent(message);

    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      return `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }
  }

  private static generateMessage(options: WhatsAppMessageOptions): string {
    if (options.customMessage) {
      return options.customMessage;
    }

    const messages = {
      he: {
        general: 'שלום! אני מעוניין בשירותים הדיגיטליים שלך.',
        withService: (service: string) => `שלום! אני מעוניין ב${service}. אשמח לקבל פרטים נוספים.`
      },
      en: {
        general: 'Hello! I\'m interested in your digital services.',
        withService: (service: string) => `Hello! I\'m interested in ${service}. I\'d like to get more details.`
      }
    };

    const langMessages = messages[options.language];

    if (options.service) {
      return langMessages.withService(options.service);
    }

    return langMessages.general;
  }

  static formatPrice(price: { min: number; max: number; currency: string }, language: Language): string {
    const { min, max, currency } = price;

    if (language === 'he') {
      if (min === 0) {
        return max > 0 ? `עד ${currency}${max}` : 'חינם';
      }
      return min === max ? `${currency}${min}` : `${currency}${min}-${max}`;
    } else {
      if (min === 0) {
        return max > 0 ? `Up to ${currency}${max}` : 'Free';
      }
      return min === max ? `${currency}${min}` : `${currency}${min}-${max}`;
    }
  }

  static formatDeliveryTime(time: { he: string; en: string }, language: Language): string {
    return time[language];
  }
}