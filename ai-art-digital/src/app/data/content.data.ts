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
      he: '',
      en: ''
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
        he: 'הנדסת שרשרת אספקה',
        en: 'Supply Chain Engineering'
      },
      description: {
        he: 'ניסיון בניהול מערכות מורכבות ואופטימיזציה של תהליכים',
        en: 'Experience managing complex systems and process optimization'
      }
    },
    {
      title: {
        he: 'פיתוח Full-Stack',
        en: 'Full-Stack Development'
      },
      description: {
        he: 'פיתוח פתרונות מקצה לקצה - מהחזון ועד המוצר הסופי',
        en: 'End-to-end solutions - from vision to final product'
      }
    },
    {
      title: {
        he: 'ניתוח נתונים',
        en: 'Data Analytics'
      },
      description: {
        he: 'המרת נתונים להחלטות עסקיות מושכלות',
        en: 'Turning data into smart business decisions'
      }
    },
    {
      title: {
        he: 'חשיבה מערכתית',
        en: 'Systems Thinking'
      },
      description: {
        he: 'יכולת לראות את התמונה הגדולה ולפתור בעיות מורכבות',
        en: 'Ability to see the big picture and solve complex problems'
      }
    }
  ],

  // Stats for the combined expertise section
  stats: [
    {
      value: '20+',
      label: {
        he: 'שנות ניסיון בטכנולוגיה',
        en: 'Years in Technology'
      }
    },
    {
      value: 'R&D',
      label: {
        he: 'מהנדס שרשרת אספקה',
        en: 'Supply Chain Engineer'
      }
    },
    {
      value: '100+',
      label: {
        he: 'פרויקטים הושלמו',
        en: 'Projects Completed'
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
  ],
  articles: [
    {
      id: 'perfect-app-product-teams',
      title: {
        he: 'האפליקציה המושלמת לצוות המוצר שלכם',
        en: 'The Perfect App for Your Product Teams'
      },
      description: {
        he: 'איך לבחור ולבנות את האפליקציה המושלמת עבור צוות המוצר שלכם. מתודולוגיות, כלים וטיפים מעשיים מהשטח לשיפור תהליכי העבודה והשיתוף.',
        en: 'How to choose and build the perfect application for your product team. Methodologies, tools and practical tips from the field to improve work processes and collaboration.'
      },
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
      link: 'https://www.geektime.co.il/the-perfect-app-for-your-product-teams/',
      date: '2024-11-20',
      readTime: {
        he: '10 דקות קריאה',
        en: '10 min read'
      },
      tags: {
        he: ['Product Management', 'צוותי פיתוח', 'Agile'],
        en: ['Product Management', 'Development Teams', 'Agile']
      }
    },
    {
      id: 'agentic-ai-understanding',
      title: {
        he: 'Agentic AI לא כאן כדי להחליט - זה כאן כדי להבין',
        en: 'Agentic AI Isn\'t Here to Decide - It\'s Here to Understand'
      },
      description: {
        he: 'חקר מעמיק של Agentic AI ותפקידו האמיתי בעולם העסקי. למה AI לא בא להחליף את קבלת ההחלטות האנושית, אלא לשפר את ההבנה והניתוח שמאחוריה.',
        en: 'A deep exploration of Agentic AI and its true role in the business world. Why AI isn\'t here to replace human decision-making, but to enhance the understanding and analysis behind it.'
      },
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      link: 'https://medium.com/philips-technology-blog/agentic-ai-isnt-here-to-decide-it-s-here-to-understand-60892c296448',
      date: '2024-10-15',
      readTime: {
        he: '8 דקות קריאה',
        en: '8 min read'
      },
      tags: {
        he: ['AI', 'Agentic AI', 'טכנולוגיה'],
        en: ['AI', 'Agentic AI', 'Technology']
      }
    },
    {
      id: 'ai-english-tutor-bot',
      title: {
        he: 'בנה את המורה לאנגלית AI שלך עם בוט טלגרם - מקומי וחינמי',
        en: 'Build Your Own AI English Tutor Telegram Bot - Local & Free'
      },
      description: {
        he: 'מדריך מעשי שלב אחר שלב לבניית בוט טלגרם לימוד אנגלית מבוסס AI. למד איך ליצור פתרון מקומי וחינמי עם Gemini AI, כולל קוד מלא והסברים מפורטים.',
        en: 'A practical step-by-step guide to building an AI-powered English learning Telegram bot. Learn how to create a local and free solution with Gemini AI, including full code and detailed explanations.'
      },
      imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop',
      link: 'https://medium.com/philips-technology-blog/build-your-own-ai-english-tutor-telegram-bot-local-free-d739621e7b1c',
      date: '2024-09-25',
      readTime: {
        he: '15 דקות קריאה',
        en: '15 min read'
      },
      tags: {
        he: ['AI', 'Telegram Bot', 'Tutorial'],
        en: ['AI', 'Telegram Bot', 'Tutorial']
      }
    }
  ]
};