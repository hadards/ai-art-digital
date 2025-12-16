import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-850 dark:to-midnight-800 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {{ title() }}
          </h1>
          <p class="text-slate-600 dark:text-slate-400">
            {{ lastUpdated() }}
          </p>
        </div>

        <!-- Content -->
        <div class="prose prose-slate dark:prose-invert max-w-none">

          <!-- Introduction -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ introTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {{ introText1() }}
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ introText2() }}
            </p>
          </section>

          <!-- Information Collection -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ collectionTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{{ collectionIntro() }}</p>

            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{{ personalInfoTitle() }}</h3>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
              <li>{{ personalInfo1() }}</li>
              <li>{{ personalInfo2() }}</li>
              <li>{{ personalInfo3() }}</li>
              <li>{{ personalInfo4() }}</li>
            </ul>

            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{{ projectInfoTitle() }}</h3>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
              <li>{{ projectInfo1() }}</li>
              <li>{{ projectInfo2() }}</li>
              <li>{{ projectInfo3() }}</li>
            </ul>
          </section>

          <!-- Use of Information -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ useTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ use1() }}</li>
              <li>{{ use2() }}</li>
              <li>{{ use3() }}</li>
              <li>{{ use4() }}</li>
              <li>{{ use5() }}</li>
            </ul>
          </section>

          <!-- Information Sharing -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ sharingTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{{ sharingIntro() }}</p>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ sharing1() }}</li>
              <li>{{ sharing2() }}</li>
              <li>{{ sharing3() }}</li>
            </ul>
          </section>

          <!-- Data Security -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ securityTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ securityText() }}
            </p>
          </section>

          <!-- Your Rights -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ rightsTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ right1() }}</li>
              <li>{{ right2() }}</li>
              <li>{{ right3() }}</li>
              <li>{{ right4() }}</li>
            </ul>
          </section>

          <!-- Cookies -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ cookiesTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ cookiesText() }}
            </p>
          </section>

          <!-- Contact -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ contactTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {{ contactText() }}
            </p>
            <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-slate-700 dark:text-slate-300">
                <strong>{{ emailLabel() }}:</strong> hadards@gmail.com<br>
                <strong>{{ whatsappLabel() }}:</strong> +972-52-277-0881
              </p>
            </div>
          </section>

        </div>

        <!-- Back Button -->
        <div class="mt-12">
          <a href="/#" class="inline-flex items-center text-primary-600 dark:text-violet-400 hover:text-primary-700 dark:hover:text-violet-300 font-semibold">
            {{ backToSite() }}
          </a>
        </div>

      </div>
    </div>
  `
})
export class PrivacyPolicyComponent {
  languageService = inject(LanguageService);

  title() {
    return this.languageService.getTranslation({
      he: 'מדיניות פרטיות',
      en: 'Privacy Policy'
    });
  }

  lastUpdated() {
    return this.languageService.getTranslation({
      he: 'עדכון אחרון: דצמבר 2025',
      en: 'Last Updated: December 2025'
    });
  }

  introTitle() {
    return this.languageService.getTranslation({
      he: 'מבוא',
      en: 'Introduction'
    });
  }

  introText1() {
    return this.languageService.getTranslation({
      he: 'ב-ARTech, פרטיותך חשובה לי מאוד. מדיניות פרטיות זו מסבירה כיצד אני אוספת, משתמשת ומגינה על המידע האישי שלך כאשר אתה משתמש בשירותים שלי או מתקשר איתי.',
      en: 'At ARTech, your privacy is very important to me. This privacy policy explains how I collect, use, and protect your personal information when you use my services or contact me.'
    });
  }

  introText2() {
    return this.languageService.getTranslation({
      he: 'על ידי שימוש באתר זה או בשירותים שלי, אתה מסכים לתנאי מדיניות הפרטיות המפורטים להלן.',
      en: 'By using this website or my services, you agree to the terms of this privacy policy outlined below.'
    });
  }

  collectionTitle() {
    return this.languageService.getTranslation({
      he: 'איסוף מידע',
      en: 'Information Collection'
    });
  }

  collectionIntro() {
    return this.languageService.getTranslation({
      he: 'אני אוספת מידע בשתי דרכים עיקריות:',
      en: 'I collect information in two main ways:'
    });
  }

  personalInfoTitle() {
    return this.languageService.getTranslation({
      he: 'מידע אישי שאתה מספק:',
      en: 'Personal Information You Provide:'
    });
  }

  personalInfo1() {
    return this.languageService.getTranslation({
      he: 'שם מלא ופרטי קשר (טלפון, אימייל, WhatsApp)',
      en: 'Full name and contact details (phone, email, WhatsApp)'
    });
  }

  personalInfo2() {
    return this.languageService.getTranslation({
      he: 'פרטי תשלום (מספר חשבון בנק, פרטי Bit או PayPal)',
      en: 'Payment details (bank account number, Bit or PayPal details)'
    });
  }

  personalInfo3() {
    return this.languageService.getTranslation({
      he: 'תוכן התכתובות שלנו בוואטסאפ, אימייל או כל אמצעי תקשורת אחר',
      en: 'Content of our communications via WhatsApp, email, or other means'
    });
  }

  personalInfo4() {
    return this.languageService.getTranslation({
      he: 'כל מידע נוסף שתבחר לשתף איתי במהלך תהליך העבודה',
      en: 'Any additional information you choose to share with me during the work process'
    });
  }

  projectInfoTitle() {
    return this.languageService.getTranslation({
      he: 'מידע הקשור לפרויקט:',
      en: 'Project-Related Information:'
    });
  }

  projectInfo1() {
    return this.languageService.getTranslation({
      he: 'תמונות, טקסטים וקבצים שאתה שולח לצורך הפרויקט',
      en: 'Photos, texts, and files you send for the project'
    });
  }

  projectInfo2() {
    return this.languageService.getTranslation({
      he: 'העדפות עיצוב ודרישות ספציפיות',
      en: 'Design preferences and specific requirements'
    });
  }

  projectInfo3() {
    return this.languageService.getTranslation({
      he: 'משוב ותיקונים במהלך תהליך העבודה',
      en: 'Feedback and revisions during the work process'
    });
  }

  useTitle() {
    return this.languageService.getTranslation({
      he: 'שימוש במידע',
      en: 'Use of Information'
    });
  }

  use1() {
    return this.languageService.getTranslation({
      he: 'לספק את השירותים שהוזמנו ולהשלים את הפרויקטים',
      en: 'To provide ordered services and complete projects'
    });
  }

  use2() {
    return this.languageService.getTranslation({
      he: 'לתקשר איתך לגבי הפרויקט, כולל עדכונים ובקשות לבירורים',
      en: 'To communicate with you about the project, including updates and clarification requests'
    });
  }

  use3() {
    return this.languageService.getTranslation({
      he: 'לעבד תשלומים ולשלוח חשבוניות',
      en: 'To process payments and send invoices'
    });
  }

  use4() {
    return this.languageService.getTranslation({
      he: 'לשפר את השירותים והתהליכים שלי',
      en: 'To improve my services and processes'
    });
  }

  use5() {
    return this.languageService.getTranslation({
      he: 'לשלוח מידע רלוונטי על שירותים חדשים (רק אם נתת הסכמה מפורשת)',
      en: 'To send relevant information about new services (only with explicit consent)'
    });
  }

  sharingTitle() {
    return this.languageService.getTranslation({
      he: 'שיתוף מידע',
      en: 'Information Sharing'
    });
  }

  sharingIntro() {
    return this.languageService.getTranslation({
      he: 'אני לא מוכרת, משכירה או משתפת את המידע האישי שלך עם צדדים שלישיים, למעט במקרים הבאים:',
      en: 'I do not sell, rent, or share your personal information with third parties, except in the following cases:'
    });
  }

  sharing1() {
    return this.languageService.getTranslation({
      he: 'שירותי עיבוד תשלומים (בנק, Bit, PayPal) - רק המידע הנדרש לביצוע העסקה',
      en: 'Payment processing services (bank, Bit, PayPal) - only information required for the transaction'
    });
  }

  sharing2() {
    return this.languageService.getTranslation({
      he: 'כלי AI יצירתיים (ChatGPT, Claude, Gemini, Canva, CapCut) - רק לצורך יצירת התוכן המבוקש',
      en: 'Creative AI tools (ChatGPT, Claude, Gemini, Canva, CapCut) - only for creating requested content'
    });
  }

  sharing3() {
    return this.languageService.getTranslation({
      he: 'כאשר נדרש על פי חוק או צו שיפוטי',
      en: 'When required by law or court order'
    });
  }

  securityTitle() {
    return this.languageService.getTranslation({
      he: 'אבטחת מידע',
      en: 'Data Security'
    });
  }

  securityText() {
    return this.languageService.getTranslation({
      he: 'אני נוקטת באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך. קבצי פרויקטים מאוחסנים בצורה מאובטחת ב-Google Drive ונמחקים לאחר השלמת הפרויקט והעברת הקבצים הסופיים ללקוח. עם זאת, שום שיטת העברה באינטרנט או שיטת אחסון אלקטרונית אינה בטוחה ב-100%, ולכן אינני יכולה להבטיח אבטחה מוחלטת.',
      en: 'I take reasonable security measures to protect your personal information. Project files are stored securely on Google Drive and deleted after project completion and delivery of final files to the client. However, no internet transmission method or electronic storage method is 100% secure, and therefore I cannot guarantee absolute security.'
    });
  }

  rightsTitle() {
    return this.languageService.getTranslation({
      he: 'הזכויות שלך',
      en: 'Your Rights'
    });
  }

  right1() {
    return this.languageService.getTranslation({
      he: 'לבקש גישה למידע האישי שנאסף עליך',
      en: 'To request access to personal information collected about you'
    });
  }

  right2() {
    return this.languageService.getTranslation({
      he: 'לבקש תיקון או מחיקה של מידע אישי',
      en: 'To request correction or deletion of personal information'
    });
  }

  right3() {
    return this.languageService.getTranslation({
      he: 'לבטל הסכמה לשימוש במידע בכל עת',
      en: 'To withdraw consent for information use at any time'
    });
  }

  right4() {
    return this.languageService.getTranslation({
      he: 'להתנגד לשימוש במידע למטרות שיווקיות',
      en: 'To object to use of information for marketing purposes'
    });
  }

  cookiesTitle() {
    return this.languageService.getTranslation({
      he: 'עוגיות (Cookies)',
      en: 'Cookies'
    });
  }

  cookiesText() {
    return this.languageService.getTranslation({
      he: 'אתר זה משתמש בעוגיות טכניות בסיסיות לשיפור חווית המשתמש (כמו העדפת שפה ומצב תצוגה). אתה יכול לנהל את העדפות העוגיות שלך דרך הגדרות הדפדפן שלך.',
      en: 'This site uses basic technical cookies to improve user experience (such as language preference and display mode). You can manage your cookie preferences through your browser settings.'
    });
  }

  contactTitle() {
    return this.languageService.getTranslation({
      he: 'יצירת קשר',
      en: 'Contact'
    });
  }

  contactText() {
    return this.languageService.getTranslation({
      he: 'אם יש לך שאלות או בקשות הנוגעות למדיניות הפרטיות הזו, אתה מוזמן ליצור איתי קשר:',
      en: 'If you have questions or requests regarding this privacy policy, feel free to contact me:'
    });
  }

  emailLabel() {
    return this.languageService.getTranslation({
      he: 'אימייל',
      en: 'Email'
    });
  }

  whatsappLabel() {
    return this.languageService.getTranslation({
      he: 'WhatsApp',
      en: 'WhatsApp'
    });
  }

  backToSite() {
    return this.languageService.getTranslation({
      he: '← חזרה לאתר',
      en: '← Back to Site'
    });
  }
}
