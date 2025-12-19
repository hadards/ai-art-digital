import { ContentSection, ServiceItem } from '../models/service.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'educational-materials',
    title: {
      he: 'חומרי הדרכה ומדריכים',
      en: 'Educational Materials & Guides'
    },
    description: {
      he: 'מדריכים מקצועיים וחומרי הדרכה מותאמים אישית',
      en: 'Professional guides and custom educational materials'
    },
    priceRange: {
      min: 0,
      max: 0,
      currency: '₪'
    },
    deliveryTime: {
      he: 'X',
      en: 'X'
    },
    includes: {
      he: [
        'עיצוב מקצועי',
        'תוכן מותאם אישית',
        'קבצים להדפסה',
        'גרסה דיגיטלית',
        'עד 3 תיקונים'
      ],
      en: [
        'Professional design',
        'Custom content',
        'Print-ready files',
        'Digital version',
        'Up to 3 revisions'
      ]
    },
    featured: true,
    manuals: [
      {
        title: {
          he: 'מצגת AI לכיתה ו',
          en: 'AI Presentation for 6th Grade'
        },
        description: {
          he: 'מצגת חינוכית מקיפה המציגה את עולם ה-AI לתלמידי כיתה ו',
          en: 'Comprehensive educational presentation introducing AI to 6th grade students'
        },
        url: '/assets/manuals/מצגת AI לכיתה ו.pdf',
        type: 'pdf'
      },
      {
        title: {
          he: 'מדריך ליצירת מצגת PowerPoint ב-Gemini',
          en: 'Create PowerPoint Presentation in Gemini Guide'
        },
        description: {
          he: 'מדריך פשוט ליצירת מצגות PowerPoint מקצועיות באמצעות Gemini',
          en: 'Simple guide for creating professional PowerPoint presentations using Gemini'
        },
        url: '/assets/manuals/Power-point-in-Canva-manual.png',
        type: 'image'
      },
      {
        title: {
          he: 'Excel Databricks Flow Automation',
          en: 'Excel Databricks Flow Automation'
        },
        description: {
          he: 'אוטומציה של זרימת עבודה בין Excel ל-Databricks',
          en: 'Workflow automation between Excel and Databricks'
        },
        url: '/assets/manuals/Excel-Databricks-Flow-Automation.png',
        type: 'image'
      },
      {
        title: {
          he: 'CoPilot Agent on Teams',
          en: 'CoPilot Agent on Teams'
        },
        description: {
          he: 'מדריך להטמעת CoPilot Agent ב-Microsoft Teams',
          en: 'Guide for implementing CoPilot Agent in Microsoft Teams'
        },
        url: '/assets/manuals/CoPilot-Agent-on-Teams.png',
        type: 'image'
      }
    ]
  },
  {
    id: 'landing-page',
    title: {
      he: 'עמוד נחיתה מקצועי',
      en: 'Professional Landing Page'
    },
    description: {
      he: 'אתר עסקי, דף נחיתה מקצועי ומעוצב. תקבלו את הקוד המלא בבעלות מלאה, והאתר יועלה בחינם לרשת',
      en: 'Fast custom website. You receive the complete code with full ownership, and the site is deployed online for free'
    },
    priceRange: {
      min: 0,
      max: 0,
      currency: '₪'
    },
    deliveryTime: {
      he: 'X',
      en: 'X'
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
    featured: true,
    media: {
      type: 'video',
      url: '/assets/videos/Recording-real-estate-landing-page.mp4'
    }
  },
  {
    id: 'custom-comic',
    title: {
      he: 'ספר/קומיקס מותאם אישית',
      en: 'Personalized Comic/Storybook'
    },
    description: {
      he: 'סיפור מאויר עם הדמויות שלכם כגיבורים, או כמתנה מקורית למישהו קרוב',
      en: 'Illustrated story with your characters as heroes, or as an original gift for someone close'
    },
    priceRange: {
      min: 0,
      max: 0,
      currency: '₪'
    },
    deliveryTime: {
      he: 'X',
      en: 'X'
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
    },
    gallery: [
      '/assets/images/IMG_8832.PNG',
      '/assets/images/family-info.png',
      '/assets/images/IMG_5713.jpg'
    ]
  },
  {
    id: 'event-invitation',
    title: {
      he: 'עיצוב הזמנות לאירועים',
      en: 'Event Invitation Design'
    },
    description: {
      he: 'הזמנות מעוצבות ייחודיות לאירועים מיוחדים',
      en: 'Unique designed invitations for special events'
    },
    priceRange: {
      min: 0,
      max: 0,
      currency: '₪'
    },
    deliveryTime: {
      he: 'X',
      en: 'X'
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
    },
    gallery: [
      '/assets/images/sample1.png',
      '/assets/images/11.jpg'
    ]
  },
  {
    id: 'logo-design',
    title: {
      he: 'עיצוב לוגו',
      en: 'Logo Design'
    },
    description: {
      he: 'לוגו מקצועי ומזוהה למותג שלך מעוצב באמצעות כלי AI מתקדמים ותוכנות עריכה',
      en: 'Professional recognizable logo for your brand designed using advanced AI tools and editing software'
    },
    priceRange: {
      min: 0,
      max: 0,
      currency: '₪'
    },
    deliveryTime: {
      he: 'X',
      en: 'X'
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
    featured: true,
    gallery: [
      '/assets/images/logo.png',
      '/assets/images/carrier-logo.jpg',
      '/assets/images/sample4.png',
      '/assets/images/sample3.png'
    ]
  },
  {
    id: 'baby-story',
    title: {
      he: 'סיפור גדילה של תינוק',
      en: 'Baby Growth Story'
    },
    description: {
      he: 'תמונה דיגיטלית של השנה הראשונה - סיפור התפתחות של התינוק שלכם מתועד בצורה מיוחדת עם כל הרגעים המרגשים',
      en: 'Digital image of the first year - your baby\'s development story documented in a special way with all the exciting moments'
    },
    priceRange: {
      min: 0,
      max: 0,
      currency: '₪'
    },
    deliveryTime: {
      he: 'X',
      en: 'X'
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
    },
    gallery: [
      '/assets/images/sample2.png'
    ]
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
      he: 'עיצובים אומנותיים • דפי נחיתה מותאמים • הדרכות טכניות',
      en: 'Artistic Designs • Custom Landing Pages • Technical Trainings'
    },
    cta: {
      he: 'צור קשר',
      en: 'Contact Me'
    }
  },
  benefits: [
    {
      title: {
        he: 'פיתוח תוכנה Full-Stack',
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
        he: 'אוטומציות ובינה מלאכותית',
        en: 'Automations & AI Agents'
      },
      description: {
        he: 'פיתוח פתרונות מתקדמים לשיפור תהליכים',
        en: 'Developing custom AI agents to enhance processes'
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
        he: 'מהנדסת תוכנה ומובילה טכנולוגית',
        en: 'Software & Data Lead'
      }
    },
    {
      value: '50+',
      label: {
        he: 'פרויקטים הושלמו',
        en: 'Projects Completed'
      }
    }
  ],
  services: SERVICES_DATA,
  about: {
    headline: {
      he: 'היי, אני הדר ',
      en: 'Hi, I\'m Hadar'
    },
    bio: {
      he: ' מהנדסת תוכנה ומובילת תחום דאטה בפיליפס מדיקל, חיה ונושמת תוכנה ועיצובי AI. עם 20 שנות ניסיון מקצועי, האהבה שלי למכונות המורכבות האלה התחילה כבר בתחילת שנות ה-90 עם המחשב האישי הראשון שלי - 286, כשהתנסיתי ב-Pascal ו-Alleycat.\n\nעיצוב דיגיטלי ואמנות חזותית הם האהבה האמיתית שלי - תשוקה שהתעוררה והתפתחה עם הופעת יכולות ה-AI לפני כמה שנים. היכולת לשלב את המומחיות הטכנית שלי עם הראייה האמנותית מאפשרת לי ליצור עיצובים דיגיטליים ייחודיים המשלבים חדשנות טכנולוגית עם אסתטיקה מרהיבה.',
      en: 'Software Engineer and Data Lead at Philips Medical, I live and breathe software and AI design. With 20 years of professional experience, my love for these complex machines started way back in the early 90\'s with my first own \'286\' PC when I experimented with Pascal and Alleycat.\n\nDigital art and visual design are my true love - a passion that emerged and blossomed with the advent of AI capabilities a few years ago. The ability to merge my technical expertise with artistic vision allows me to create unique digital designs that combine technological innovation with stunning aesthetics.'
    }
  },
  process: [
    {
      step: 1,
      title: {
        he: 'צרו קשר בוואטסאפ',
        en: 'Contact on WhatsApp'
      },
      description: {
        he: 'לחצו על הכפתור ושלחו לי הודעה',
        en: 'Click the button and send me a message'
      }
    },
    {
      step: 2,
      title: {
        he: 'שתפו פרטים',
        en: 'Share Details'
      },
      description: {
        he: 'ספרו לי מה אתם צריכים, שלחו קבצים',
        en: 'Tell me what you need, send files'
      }
    },
    {
      step: 3,
      title: {
        he: 'קבלו הצעת מחיר',
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
        he: 'אני יוצרת',
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
        he: 'קבלו את התוצר',
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

// Resources & Workshops Data
export const RESOURCES_DATA = [
  {
    id: 'sample-manual-1',
    title: {
      he: 'מדריך לדוגמה 1',
      en: 'Sample Manual 1'
    },
    description: {
      he: 'תיאור של המדריך - החלף עם התוכן שלך',
      en: 'Manual description - replace with your content'
    },
    type: 'manual' as const,
    fileUrl: '', // Add your file URL here
    tags: ['Example', 'Manual']
  },
  {
    id: 'sample-powerpoint-1',
    title: {
      he: 'מצגת סדנה לדוגמה',
      en: 'Sample Workshop Presentation'
    },
    description: {
      he: 'תיאור של המצגת - החלף עם התוכן שלך',
      en: 'Presentation description - replace with your content'
    },
    type: 'powerpoint' as const,
    fileUrl: '', // Add your file URL here
    tags: ['Workshop', 'Training']
  }
];