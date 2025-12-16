import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-terms-of-service',
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
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ introText() }}
            </p>
          </section>

          <!-- Services -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ servicesTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{{ servicesIntro() }}</p>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ service1() }}</li>
              <li>{{ service2() }}</li>
              <li>{{ service3() }}</li>
              <li>{{ service4() }}</li>
              <li>{{ service5() }}</li>
              <li>{{ service6() }}</li>
            </ul>
          </section>

          <!-- Order Process -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ orderTitle() }}</h2>
            <ol class="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-3">
              <li><strong>{{ orderStep1Title() }}:</strong> {{ orderStep1() }}</li>
              <li><strong>{{ orderStep2Title() }}:</strong> {{ orderStep2() }}</li>
              <li><strong>{{ orderStep3Title() }}:</strong> {{ orderStep3() }}</li>
              <li><strong>{{ orderStep4Title() }}:</strong> {{ orderStep4() }}</li>
              <li><strong>{{ orderStep5Title() }}:</strong> {{ orderStep5() }}</li>
            </ol>
          </section>

          <!-- Payment -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ paymentTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ payment1() }}</li>
              <li>{{ payment2() }}</li>
              <li>{{ payment3() }}</li>
              <li>{{ payment4() }}</li>
              <li>{{ payment5() }}</li>
            </ul>
          </section>

          <!-- Delivery -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ deliveryTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ delivery1() }}</li>
              <li>{{ delivery2() }}</li>
              <li>{{ delivery3() }}</li>
              <li>{{ delivery4() }}</li>
            </ul>
          </section>

          <!-- Revisions -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ revisionsTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ revision1() }}</li>
              <li>{{ revision2() }}</li>
              <li>{{ revision3() }}</li>
            </ul>
          </section>

          <!-- Intellectual Property -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ ipTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ ip1() }}</li>
              <li>{{ ip2() }}</li>
              <li>{{ ip3() }}</li>
              <li>{{ ip4() }}</li>
            </ul>
          </section>

          <!-- Client Responsibilities -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ clientTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ client1() }}</li>
              <li>{{ client2() }}</li>
              <li>{{ client3() }}</li>
              <li>{{ client4() }}</li>
            </ul>
          </section>

          <!-- Cancellation -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ cancellationTitle() }}</h2>
            <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>{{ cancel1() }}</li>
              <li>{{ cancel2() }}</li>
              <li>{{ cancel3() }}</li>
            </ul>
          </section>

          <!-- Limitation of Liability -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ liabilityTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ liabilityText() }}
            </p>
          </section>

          <!-- Warranty -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ warrantyTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ warrantyText() }}
            </p>
          </section>

          <!-- Changes to Terms -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{{ changesTitle() }}</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ changesText() }}
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
export class TermsOfServiceComponent {
  languageService = inject(LanguageService);

  title() {
    return this.languageService.getTranslation({
      he: 'תנאי שימוש',
      en: 'Terms of Service'
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

  introText() {
    return this.languageService.getTranslation({
      he: 'ברוכים הבאים ל-ARTech. תנאי שימוש אלה מסדירים את השימוש באתר ובשירותים שלי. על ידי הזמנת שירות או שימוש באתר, אתה מסכים לתנאים אלה במלואם. אם אינך מסכים לתנאים אלה, אנא אל תשתמש בשירותים.',
      en: 'Welcome to ARTech. These terms of service govern the use of my website and services. By ordering a service or using the website, you fully agree to these terms. If you do not agree to these terms, please do not use the services.'
    });
  }

  servicesTitle() {
    return this.languageService.getTranslation({
      he: 'השירותים המוצעים',
      en: 'Services Offered'
    });
  }

  servicesIntro() {
    return this.languageService.getTranslation({
      he: 'אני מציעה שירותי עיצוב דיגיטלי מבוססי AI, כולל:',
      en: 'I offer AI-powered digital design services, including:'
    });
  }

  service1() {
    return this.languageService.getTranslation({
      he: 'עיצוב דפי נחיתה (Landing Pages) מקצועיים',
      en: 'Professional landing page design'
    });
  }

  service2() {
    return this.languageService.getTranslation({
      he: 'עיצוב הזמנות לאירועים (חתונות, בר/בת מצווה, אירועים מיוחדים)',
      en: 'Event invitation design (weddings, bar/bat mitzvahs, special events)'
    });
  }

  service3() {
    return this.languageService.getTranslation({
      he: 'עיצוב לוגו מקצועי',
      en: 'Professional logo design'
    });
  }

  service4() {
    return this.languageService.getTranslation({
      he: 'יצירת ספרים וקומיקס מותאמים אישית',
      en: 'Custom books and comics creation'
    });
  }

  service5() {
    return this.languageService.getTranslation({
      he: 'אלבומי סיפורי גדילה של תינוקות',
      en: 'Baby growth story albums'
    });
  }

  service6() {
    return this.languageService.getTranslation({
      he: 'עיצוב מצגות PowerPoint מקצועיות',
      en: 'Professional PowerPoint presentation design'
    });
  }

  orderTitle() {
    return this.languageService.getTranslation({
      he: 'תהליך ההזמנה',
      en: 'Order Process'
    });
  }

  orderStep1Title() {
    return this.languageService.getTranslation({
      he: 'יצירת קשר',
      en: 'Initial Contact'
    });
  }

  orderStep1() {
    return this.languageService.getTranslation({
      he: 'פנייה אליי דרך WhatsApp (+972-52-277-0881) או אימייל (hadards@gmail.com)',
      en: 'Contact me via WhatsApp (+972-52-277-0881) or email (hadards@gmail.com)'
    });
  }

  orderStep2Title() {
    return this.languageService.getTranslation({
      he: 'שיתוף פרטים',
      en: 'Sharing Details'
    });
  }

  orderStep2() {
    return this.languageService.getTranslation({
      he: 'תספק פרטים על הפרויקט, קבצים רלוונטיים, ודרישות עיצוביות',
      en: 'You provide project details, relevant files, and design requirements'
    });
  }

  orderStep3Title() {
    return this.languageService.getTranslation({
      he: 'הצעת מחיר',
      en: 'Quote'
    });
  }

  orderStep3() {
    return this.languageService.getTranslation({
      he: 'אשלח הצעת מחיר מפורטת וזמן אספקה משוער',
      en: 'I will send a detailed quote and estimated delivery time'
    });
  }

  orderStep4Title() {
    return this.languageService.getTranslation({
      he: 'ביצוע העבודה',
      en: 'Work Execution'
    });
  }

  orderStep4() {
    return this.languageService.getTranslation({
      he: 'לאחר אישור וקבלת מקדמה, אתחיל בעבודה על הפרויקט',
      en: 'After approval and receipt of deposit, I will begin working on the project'
    });
  }

  orderStep5Title() {
    return this.languageService.getTranslation({
      he: 'משלוח',
      en: 'Delivery'
    });
  }

  orderStep5() {
    return this.languageService.getTranslation({
      he: 'הקבצים הסופיים יישלחו דרך WhatsApp או Google Drive',
      en: 'Final files will be sent via WhatsApp or Google Drive'
    });
  }

  paymentTitle() {
    return this.languageService.getTranslation({
      he: 'תשלום',
      en: 'Payment'
    });
  }

  payment1() {
    return this.languageService.getTranslation({
      he: 'תשלום מתבצע ב-50% מקדמה ו-50% עם סיום הפרויקט',
      en: 'Payment is 50% deposit and 50% upon project completion'
    });
  }

  payment2() {
    return this.languageService.getTranslation({
      he: 'אמצעי תשלום מקובלים: העברה בנקאית, Bit, PayPal',
      en: 'Accepted payment methods: bank transfer, Bit, PayPal'
    });
  }

  payment3() {
    return this.languageService.getTranslation({
      he: 'המחירים כוללים מע"מ אלא אם צוין אחרת',
      en: 'Prices include VAT unless stated otherwise'
    });
  }

  payment4() {
    return this.languageService.getTranslation({
      he: 'הקבצים הסופיים יישלחו רק לאחר קבלת התשלום המלא',
      en: 'Final files will be sent only after full payment is received'
    });
  }

  payment5() {
    return this.languageService.getTranslation({
      he: 'אספקה מהירה (Rush) אפשרית בתוספת 50% למחיר',
      en: 'Rush delivery available for an additional 50% charge'
    });
  }

  deliveryTitle() {
    return this.languageService.getTranslation({
      he: 'זמני אספקה',
      en: 'Delivery Times'
    });
  }

  delivery1() {
    return this.languageService.getTranslation({
      he: 'זמני האספקה משתנים בהתאם לסוג הפרויקט והעומס הנוכחי (בדרך כלל 3-10 ימי עבודה)',
      en: 'Delivery times vary according to project type and current workload (typically 3-10 business days)'
    });
  }

  delivery2() {
    return this.languageService.getTranslation({
      he: 'זמני אספקה הם אומדנים ועשויים להשתנות בהתאם למורכבות הפרויקט',
      en: 'Delivery times are estimates and may vary depending on project complexity'
    });
  }

  delivery3() {
    return this.languageService.getTranslation({
      he: 'עיכובים עקב נסיבות בלתי צפויות יטופלו בתקשורת פתוחה ושקופה',
      en: 'Delays due to unforeseen circumstances will be handled with open and transparent communication'
    });
  }

  delivery4() {
    return this.languageService.getTranslation({
      he: 'הלקוח אחראי לספק את כל החומרים והמשובים בזמן כדי לעמוד בלוחות הזמנים',
      en: 'Client is responsible for providing all materials and feedback on time to meet deadlines'
    });
  }

  revisionsTitle() {
    return this.languageService.getTranslation({
      he: 'תיקונים ושינויים',
      en: 'Revisions and Changes'
    });
  }

  revision1() {
    return this.languageService.getTranslation({
      he: 'כל שירות כולל מספר תיקונים סבירים ללא עלות נוספת (בדרך כלל 2-3 סבבי תיקונים)',
      en: 'Each service includes several reasonable revisions at no extra cost (typically 2-3 revision rounds)'
    });
  }

  revision2() {
    return this.languageService.getTranslation({
      he: 'שינויים משמעותיים בהיקף הפרויקט לאחר תחילת העבודה עשויים להיות כרוכים בעלות נוספת',
      en: 'Significant changes to project scope after work begins may incur additional costs'
    });
  }

  revision3() {
    return this.languageService.getTranslation({
      he: 'תיקונים נוספים מעבר למוסכם יתומחרו בנפרד',
      en: 'Additional revisions beyond agreed upon will be priced separately'
    });
  }

  ipTitle() {
    return this.languageService.getTranslation({
      he: 'קניין רוחני וזכויות יוצרים',
      en: 'Intellectual Property and Copyrights'
    });
  }

  ip1() {
    return this.languageService.getTranslation({
      he: 'לאחר קבלת התשלום המלא, זכויות השימוש המלאות בעבודה הסופית עוברות ללקוח',
      en: 'Upon full payment, full usage rights of the final work transfer to the client'
    });
  }

  ip2() {
    return this.languageService.getTranslation({
      he: 'אני שומרת את הזכות להציג את העבודה בתיק העבודות שלי (Portfolio) לצרכי שיווק',
      en: 'I retain the right to display the work in my portfolio for marketing purposes'
    });
  }

  ip3() {
    return this.languageService.getTranslation({
      he: 'החומרים שהלקוח מספק (תמונות, טקסטים וכו\') נשארים בבעלותו',
      en: 'Materials provided by the client (images, texts, etc.) remain their property'
    });
  }

  ip4() {
    return this.languageService.getTranslation({
      he: 'הלקוח מתחייב שכל החומרים שהוא מספק אינם מפרים זכויות יוצרים או קניין רוחני של אחרים',
      en: 'Client commits that all materials provided do not infringe on copyrights or intellectual property of others'
    });
  }

  clientTitle() {
    return this.languageService.getTranslation({
      he: 'אחריות הלקוח',
      en: 'Client Responsibilities'
    });
  }

  client1() {
    return this.languageService.getTranslation({
      he: 'לספק מידע מדויק ומלא על הפרויקט',
      en: 'To provide accurate and complete information about the project'
    });
  }

  client2() {
    return this.languageService.getTranslation({
      he: 'לספק קבצים וחומרים באיכות גבוהה ובפורמטים מתאימים',
      en: 'To provide files and materials in high quality and appropriate formats'
    });
  }

  client3() {
    return this.languageService.getTranslation({
      he: 'להגיב למשובים ובקשות לבירורים בזמן סביר',
      en: 'To respond to feedback and clarification requests in reasonable time'
    });
  }

  client4() {
    return this.languageService.getTranslation({
      he: 'לוודא שיש לו את כל הזכויות והאישורים הנדרשים לתכנים שהוא מספק',
      en: 'To ensure having all required rights and approvals for content provided'
    });
  }

  cancellationTitle() {
    return this.languageService.getTranslation({
      he: 'ביטול והחזרים',
      en: 'Cancellation and Refunds'
    });
  }

  cancel1() {
    return this.languageService.getTranslation({
      he: 'ביטול לפני תחילת העבודה - החזר מלא של המקדמה',
      en: 'Cancellation before work begins - full refund of deposit'
    });
  }

  cancel2() {
    return this.languageService.getTranslation({
      he: 'ביטול במהלך העבודה - החזר יחושב על פי אחוז ההשלמה של הפרויקט',
      en: 'Cancellation during work - refund calculated based on project completion percentage'
    });
  }

  cancel3() {
    return this.languageService.getTranslation({
      he: 'לאחר משלוח הקבצים הסופיים - אין החזרים, אך תיקונים אפשריים בהתאם למדיניות התיקונים',
      en: 'After final file delivery - no refunds, but revisions possible according to revision policy'
    });
  }

  liabilityTitle() {
    return this.languageService.getTranslation({
      he: 'הגבלת אחריות',
      en: 'Limitation of Liability'
    });
  }

  liabilityText() {
    return this.languageService.getTranslation({
      he: 'ARTech לא תהיה אחראית לכל נזק עקיף, מקרי או תוצאתי הנובע משימוש או אי-יכולת להשתמש בשירותים. האחריות המקסימלית שלי מוגבלת לסכום ששולם עבור השירות הספציפי. אינני אחראית לבעיות טכניות, איבוד נתונים או כשלים בפלטפורמות צד שלישי (כגון Google Drive, WhatsApp).',
      en: 'ARTech shall not be liable for any indirect, incidental, or consequential damages arising from use or inability to use the services. My maximum liability is limited to the amount paid for the specific service. I am not responsible for technical issues, data loss, or failures in third-party platforms (such as Google Drive, WhatsApp).'
    });
  }

  warrantyTitle() {
    return this.languageService.getTranslation({
      he: 'אחריות ותמיכה',
      en: 'Warranty and Support'
    });
  }

  warrantyText() {
    return this.languageService.getTranslation({
      he: 'אני מתחייבת לספק עבודה איכותית ומקצועית. במקרה של בעיות טכניות בקבצים הסופיים שנובעות משגיאה שלי, אני מתחייבת לתקן אותן ללא עלות נוספת. עם זאת, אין אחריות על התאמה לכל מטרה ספציפית שלא דווחה מראש, או על תוצאות עסקיות או שיווקיות.',
      en: 'I commit to providing quality and professional work. In case of technical issues in final files resulting from my error, I commit to fix them at no additional cost. However, there is no warranty for suitability for any specific purpose not reported in advance, or for business or marketing results.'
    });
  }

  changesTitle() {
    return this.languageService.getTranslation({
      he: 'שינויים בתנאי השימוש',
      en: 'Changes to Terms of Service'
    });
  }

  changesText() {
    return this.languageService.getTranslation({
      he: 'אני שומרת את הזכות לעדכן תנאי שימוש אלה מעת לעת. שינויים יכנסו לתוקף מיד עם פרסומם באתר. המשך שימוש בשירותים לאחר שינויים מהווה הסכמה לתנאים המעודכנים.',
      en: 'I reserve the right to update these terms of service from time to time. Changes will take effect immediately upon posting on the website. Continued use of services after changes constitutes agreement to the updated terms.'
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
      he: 'לשאלות או בירורים לגבי תנאי השימוש, ניתן ליצור קשר:',
      en: 'For questions or clarifications regarding the terms of service, please contact:'
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
