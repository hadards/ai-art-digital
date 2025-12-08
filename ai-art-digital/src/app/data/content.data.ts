import { ContentSection, ServiceItem } from '../models/service.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landing-page',
    title: {
      he: 'עמוד נחיתה מקצועי',
      en: 'Professional Landing Page'
    },
    description: {
      he: 'אתר מותאם אישית עם עיצוב מודרני ואופטימיזציה למכירות',
      en: 'Custom website with modern design and sales optimization'
    },
    priceRange: {
      min: 1200,
      max: 2000,
      currency: '₪'
    },
    deliveryTime: {
      he: '5-7 ימים',
      en: '5-7 days'
    },
    includes: {
      he: [
        'עיצוב מותאם אישית',
        'אופטימיזציה למובייל',
        'SEO בסיסי',
        'טופס יצירת קשר',
        'אחסון שנה חינם'
      ],
      en: [
        'Custom design',
        'Mobile optimization',
        'Basic SEO',
        'Contact form',
        'Free hosting for 1 year'
      ]
    },
    featured: true
  },
  {
    id: 'event-invitation',
    title: {
      he: 'עיצוב הזמנות לאירועים',
      en: 'Event Invitation Design'
    },
    description: {
      he: 'הזמנות מעוצבות לחתונות, בר/בת מצווה ואירועים מיוחדים',
      en: 'Designed invitations for weddings, bar/bat mitzvahs and special events'
    },
    priceRange: {
      min: 300,
      max: 800,
      currency: '₪'
    },
    deliveryTime: {
      he: '3-5 ימים',
      en: '3-5 days'
    },
    includes: {
      he: [
        'עיצוב מקורי',
        'עד 3 תיקונים',
        'קבצים להדפסה',
        'גרסה דיגיטלית',
        'מגוון גדלים'
      ],
      en: [
        'Original design',
        'Up to 3 revisions',
        'Print-ready files',
        'Digital version',
        'Multiple sizes'
      ]
    }
  },
  {
    id: 'logo-design',
    title: {
      he: 'עיצוב לוגו',
      en: 'Logo Design'
    },
    description: {
      he: 'לוגו מקצועי ומזוהה עבור העסק או המותג שלך',
      en: 'Professional and recognizable logo for your business or brand'
    },
    priceRange: {
      min: 400,
      max: 1000,
      currency: '₪'
    },
    deliveryTime: {
      he: '3-5 ימים',
      en: '3-5 days'
    },
    includes: {
      he: [
        '3 קונספטים ראשוניים',
        'קבצים בכל הפורמטים',
        'גרסאות צבע ושחור לבן',
        'מדריך שימוש'
      ],
      en: [
        '3 initial concepts',
        'All format files',
        'Color and B&W versions',
        'Usage guidelines'
      ]
    },
    featured: true
  },
  {
    id: 'custom-comic',
    title: {
      he: 'ספר/קומיקס מותאם אישית',
      en: 'Personalized Comic/Storybook'
    },
    description: {
      he: 'סיפור מותאם אישית עם הדמויות שלכם כגיבורים',
      en: 'Personalized story with your characters as heroes'
    },
    priceRange: {
      min: 500,
      max: 1200,
      currency: '₪'
    },
    deliveryTime: {
      he: '7-10 ימים',
      en: '7-10 days'
    },
    includes: {
      he: [
        'עד 20 תמונות',
        'הדמיה של הדמויות',
        'עלילה מותאמת אישית',
        'איורים מקצועיים',
        'קובץ PDF איכותי'
      ],
      en: [
        'Up to 20 images',
        'Character illustrations',
        'Custom storyline',
        'Professional illustrations',
        'High-quality PDF file'
      ]
    }
  },
  {
    id: 'baby-story',
    title: {
      he: 'סיפור גדילה של תינוק',
      en: 'Baby Growth Story'
    },
    description: {
      he: 'אלבום דיגיטלי המתעד את השנה הראשונה של התינוק',
      en: 'Digital album documenting baby\'s first year'
    },
    priceRange: {
      min: 600,
      max: 1200,
      currency: '₪'
    },
    deliveryTime: {
      he: '5-7 ימים',
      en: '5-7 days'
    },
    includes: {
      he: [
        'עיבוד כ-20 תמונות',
        'עיצוב אלבום',
        'טקסטים מותאמים',
        'קובץ להדפסה',
        'גרסה דיגיטלית'
      ],
      en: [
        'About 20 Photos editing',
        'Album design',
        'Custom texts',
        'Print-ready file',
        'Digital version'
      ]
    }
  },
  {
    id: 'presentation',
    title: {
      he: 'עיצוב מצגת מותאם',
      en: 'Custom Presentation Design'
    },
    description: {
      he: 'מצגות PowerPoint מקצועיות לעסק או אירועים',
      en: 'Professional PowerPoint presentations for business or events'
    },
    priceRange: {
      min: 400,
      max: 800,
      currency: '₪'
    },
    deliveryTime: {
      he: '3-5 ימים',
      en: '3-5 days'
    },
    includes: {
      he: [
        'עד 20 שקפים',
        'עיצוב מקצועי',
        'תבניות לשימוש עתידי',
        'אנימציות',
        'קובץ PowerPoint'
      ],
      en: [
        'Up to 20 slides',
        'Professional design',
        'Templates for future use',
        'Animations',
        'PowerPoint file'
      ]
    }
  },
  {
    id: 'templates',
    title: {
      he: 'תבניות חינם + התאמה אישית',
      en: 'Free Templates + Customization'
    },
    description: {
      he: 'תבניות חינם עם אפשרות להתאמה אישית בתשלום',
      en: 'Free templates with optional paid customization'
    },
    priceRange: {
      min: 0,
      max: 800,
      currency: '₪'
    },
    deliveryTime: {
      he: '1-3 ימים',
      en: '1-3 days'
    },
    includes: {
      he: [
        'גישה לתבניות',
        'הוראות שימוש',
        'תמיכה בסיסית',
        'התאמה אישית (בתשלום)',
        'תיקונים קלים'
      ],
      en: [
        'Access to templates',
        'Usage instructions',
        'Basic support',
        'Custom modifications (paid)',
        'Minor adjustments'
      ]
    }
  }
];

export const CONTENT_DATA: ContentSection = {
  hero: {
    badge: {
      he: 'Senior Software & Data Leader',
      en: 'Senior Software & Data Leader'
    },
    headline: {
      he: 'ARTech - עיצובים דיגיטליים מתקדמים',
      en: 'ARTech - Advanced Digital Designs'
    },
    subheadline: {
      he: 'Full-Stack Development • Cloud Architecture • Data Analytics • דפי נחיתה מותאמים',
      en: 'Full-Stack Development • Cloud Architecture • Data Analytics • Custom Landing Pages'
    },
    cta: {
      he: 'צור קשר',
      en: 'Contact Me'
    }
  },
  benefits: [
    {
      title: {
        he: 'Full-Stack Development',
        en: 'Full-Stack Development'
      },
      description: {
        he: 'Angular, .NET, Node.js, Python',
        en: 'Angular, .NET, Node.js, Python'
      }
    },
    {
      title: {
        he: 'Cloud Architecture',
        en: 'Cloud Architecture'
      },
      description: {
        he: 'Azure, AWS, מיקרו-שירותים',
        en: 'Azure, AWS, Microservices'
      }
    },
    {
      title: {
        he: 'Enterprise Experience',
        en: 'Enterprise Experience'
      },
      description: {
        he: 'פיליפס מדיקל, אלביט מערכות',
        en: 'Philips Medical, Elbit Systems'
      }
    },
    {
      title: {
        he: 'Data Analytics',
        en: 'Data Analytics'
      },
      description: {
        he: 'PowerBI, Databricks, SQL Server',
        en: 'PowerBI, Databricks, SQL Server'
      }
    }
  ],
  services: SERVICES_DATA,
  about: {
    headline: {
      he: 'היי, אני הדר דשתי',
      en: 'Hi, I\'m Hadar Dashty'
    },
    bio: {
      he: 'Senior Software & Data Leader בפיליפס מדיקל עם 15+ שנות ניסיון בהייטק. אני מביא מומחיות טכנית מעולם הפיתוח התוכנה Enterprise לעולם העיצוב הדיגיטלי. מנסיון בהנעת צוותי פיתוח רב-תחומיים ופיתוח אפליקציות מורכבות, אני יוצר פתרונות דיגיטליים מתקדמים שמבוססים על טכנולוגיה אמינה.',
      en: 'Senior Software & Data Leader at Philips Medical with 15+ years of high-tech experience. I bring technical expertise from Enterprise software development to digital design. From leading cross-functional development teams and building complex applications, I create advanced digital solutions based on reliable technology.'
    },
    credentials: {
      he: 'פיליפס מדיקל: Data Tech & Quality Lead | אלביט מערכות: FullStack Team Lead לשעבר',
      en: 'Philips Medical: Data Tech & Quality Lead | Former Elbit Systems: FullStack Team Lead'
    }
  },
  process: [
    {
      step: 1,
      title: {
        he: 'צור קשר בוואטסאפ',
        en: 'Contact on WhatsApp'
      },
      description: {
        he: 'לחץ על הכפתור ושלח לי הודעה',
        en: 'Click the button and send me a message'
      }
    },
    {
      step: 2,
      title: {
        he: 'שתף פרטים',
        en: 'Share Details'
      },
      description: {
        he: 'ספר לי מה אתה צריך, שלח קבצים',
        en: 'Tell me what you need, send files'
      }
    },
    {
      step: 3,
      title: {
        he: 'קבל הצעת מחיר',
        en: 'Get Quote'
      },
      description: {
        he: 'מחיר מדויק וזמן אספקה',
        en: 'Exact price and delivery time'
      }
    },
    {
      step: 4,
      title: {
        he: 'אני יוצר',
        en: 'I Create'
      },
      description: {
        he: '3-7 ימים לעיצוב ושיפור',
        en: '3-7 days for design and refinement'
      }
    },
    {
      step: 5,
      title: {
        he: 'קבל את התוצר',
        en: 'Receive Product'
      },
      description: {
        he: 'קבצים סופיים דרך וואטסאפ/Google Drive',
        en: 'Final files via WhatsApp/Google Drive'
      }
    }
  ],
  faq: [
    {
      question: {
        he: 'מה קורה אם אני רוצה לשנות משהו?',
        en: 'What if I want to change something?'
      },
      answer: {
        he: 'כל שירות כולל מספר תיקונים ללא תוספת תשלום. תיקונים נוספים יתומחרו בנפרד.',
        en: 'Each service includes several revisions at no extra cost. Additional revisions will be priced separately.'
      }
    },
    {
      question: {
        he: 'אתה מספק תמיכה שוטפת?',
        en: 'Do you provide ongoing support?'
      },
      answer: {
        he: 'המוצרים שלי מיועדים להיות עצמאיים ללא צורך בתחזוקה. במקרה של בעיות טכניות, אני כאן לעזור.',
        en: 'My products are designed to be standalone with no maintenance required. In case of technical issues, I\'m here to help.'
      }
    },
    {
      question: {
        he: 'איך אני משלם?',
        en: 'How do I pay?'
      },
      answer: {
        he: 'מקבל תשלום באמצעות העברה בנקאית, ביט או PayPal. 50% מקדמה, 50% עם סיום הפרויקט.',
        en: 'I accept payment via bank transfer, Bit, or PayPal. 50% upfront, 50% upon project completion.'
      }
    },
    {
      question: {
        he: 'זמן אספקה טיפוסי?',
        en: 'Typical delivery time?'
      },
      answer: {
        he: 'רוב הפרויקטים מועברים תוך 3-7 ימי עבודה, תלוי במורכבות ובעומס העבודה הנוכחי.',
        en: 'Most projects are delivered within 3-7 business days, depending on complexity and current workload.'
      }
    },
    {
      question: {
        he: 'מה אם אני צריך משהו דחוף?',
        en: 'What if I need something urgent?'
      },
      answer: {
        he: 'אספקה מהירה אפשרית תמורת תוספת של 50% למחיר. צור קשר לבדיקת זמינות.',
        en: 'Rush delivery is possible for an additional 50% charge. Contact me to check availability.'
      }
    },
    {
      question: {
        he: 'אתה עובד עם עסקים ופרטיים?',
        en: 'Do you work with businesses and individuals?'
      },
      answer: {
        he: 'כן, אני עובד עם עסקים קטנים, סטארטאפים, ולקוחות פרטיים. כל פרויקט מקבל יחס אישי.',
        en: 'Yes, I work with small businesses, startups, and private clients. Every project receives personal attention.'
      }
    }
  ]
};