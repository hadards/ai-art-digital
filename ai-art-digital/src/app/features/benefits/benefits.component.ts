import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../language.service';
import { CONTENT_DATA } from '../../data/content.data';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50 dark:bg-gradient-to-br dark:from-midnight-950 dark:via-violet-950/30 dark:to-midnight-900 overflow-hidden">

      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-primary-300/10 dark:from-violet-500/10 dark:to-violet-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-accent-200/20 to-accent-300/10 dark:from-emerald-500/10 dark:to-emerald-600/5 rounded-full blur-3xl"></div>

        <!-- Floating Images - Your Creations - Artistic Collage Style -->

        <!-- Circular image with artistic border - LARGER -->
        <div [class]="'absolute top-0 w-56 sm:w-72 lg:w-96 aspect-square opacity-25 dark:opacity-20 animate-float -rotate-12 hover:rotate-0 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'left-8' : 'right-8')" style="animation-delay: -2s;">
          <div class="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50 dark:border-violet-400/30">
            <img ngSrc="/assets/images/4.jpg" fill priority class="object-cover mix-blend-luminosity dark:mix-blend-normal" alt="Creation">
          </div>
          <!-- Decorative dots -->
          <div [class]="'absolute -top-2 w-6 h-6 bg-primary-400 dark:bg-violet-400 rounded-full animate-pulse ' + (languageService.direction() === 'rtl' ? '-right-2' : '-left-2')"></div>
          <div [class]="'absolute -bottom-2 w-5 h-5 bg-accent-400 dark:bg-emerald-400 rounded-full animate-pulse ' + (languageService.direction() === 'rtl' ? '-left-2' : '-right-2')" style="animation-delay: 0.5s;"></div>
        </div>


      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section Header -->
        <div class="mb-16 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
            {{ sectionTitle() }}
          </h2>
          <p [class]="'text-xl text-slate-800 dark:text-slate-300 leading-relaxed ' + (languageService.direction() === 'rtl' ? 'text-right' : 'text-left')">
            {{ sectionSubtitle() }}
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="mb-16">

          <!-- Professional Profile -->
          <div class="relative overflow-hidden rounded-3xl max-w-6xl mx-auto">

            <!-- Background with mesh gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/50 dark:from-slate-900 dark:via-midnight-900 dark:to-violet-950/30"></div>

            <!-- Animated gradient orbs -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/30 via-purple-400/20 to-transparent dark:from-violet-500/20 dark:via-purple-500/10 dark:to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-400/30 via-pink-400/20 to-transparent dark:from-emerald-500/20 dark:via-pink-500/10 dark:to-transparent rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

            <!-- Content -->
            <div class="relative p-12">

              <!-- Badge -->
              <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 dark:from-violet-600 dark:via-purple-600 dark:to-emerald-600 text-white rounded-full text-sm font-bold mb-8 shadow-2xl shadow-primary-500/50 dark:shadow-violet-500/50 hover:shadow-primary-500/70 dark:hover:shadow-violet-500/70 transition-shadow duration-300">
                <span [class]="'w-2.5 h-2.5 bg-white rounded-full animate-pulse ' + (languageService.direction() === 'rtl' ? 'ml-3' : 'mr-3')"></span>
                {{ professionalBadge() }}
              </div>

              <!-- Title -->
              <h3 class="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 dark:from-violet-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  {{ professionalTitle() }}
                </span>
              </h3>

              <!-- Description -->
              <p class="text-lg text-slate-800 dark:text-slate-200 leading-relaxed mb-8 max-w-4xl">
                {{ professionalDescription() }}
              </p>

              <!-- Quote -->
              <div class="relative mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary-50/50 via-purple-50/50 to-accent-50/50 dark:from-violet-950/30 dark:via-purple-950/30 dark:to-emerald-950/30 border-l-4 border-gradient-to-b from-primary-500 via-purple-500 to-accent-500 dark:from-violet-400 dark:via-purple-400 dark:to-emerald-400">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-accent-500 dark:from-violet-400 dark:via-purple-400 dark:to-emerald-400 rounded-full"></div>
                <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed italic font-medium">
                  {{ professionalExtended() }}
                </p>
              </div>

              <!-- Highlights -->
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                <div *ngFor="let benefit of benefits; let i = index"
                     class="group relative p-2 md:p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-violet-500/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div class="flex flex-col items-center text-center">
                    <img [src]="getIconForBenefit(benefit)" [alt]="languageService.getTranslation(benefit.title)" class="w-12 h-12 md:w-20 md:h-20 object-contain mb-2 md:mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                    <h4 class="text-[10px] md:text-sm font-bold text-slate-900 dark:text-white mb-1 md:mb-2 leading-tight">
                      {{ languageService.getTranslation(benefit.title) }}
                    </h4>
                    <p class="text-[8px] md:text-xs text-slate-700 dark:text-slate-400 leading-tight md:leading-relaxed">
                      {{ languageService.getTranslation(benefit.description) }}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
            <div *ngFor="let stat of stats; trackBy: trackByIndex"
                 class="flex flex-col items-center justify-center text-center p-3 md:p-6 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-violet-500/20 rounded-2xl
                        hover:shadow-lg transition-all duration-300 group">
              <div class="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-accent-700 dark:from-violet-400 dark:to-emerald-400
                          bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform text-center">
                {{ stat.value }}
              </div>
              <div class="text-xs md:text-sm text-slate-800 dark:text-slate-400 font-medium text-center">
                {{ languageService.getTranslation(stat.label) }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class BenefitsComponent {
  languageService = inject(LanguageService);
  benefits = CONTENT_DATA.benefits;
  stats = CONTENT_DATA.stats;

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'למה לבחור בי?',
      en: 'Why Choose Me?'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'משלבת ידע הנדסי ב-R&D עם מיומנויות טכנולוגיות מתקדמות לפתרונות דיגיטליים מעוצבים',
      en: 'Combining R&D engineering knowledge with advanced tech skills for exceptional digital solutions'
    });
  }

  professionalBadge(): string {
    return this.languageService.getTranslation({
      he: 'Software & Data Leader',
      en: 'Software & Data Leader'
    });
  }

  professionalTitle(): string {
    return this.languageService.getTranslation({
      he: 'טכנולוגיה פוגשת יצירתיות ואמנות',
      en: 'Technology Meets Creativity & Art'
    });
  }

  professionalDescription(): string {
    return this.languageService.getTranslation({
      he: 'משלבת ניסיון עשיר בהובלה טכנולוגית עם תשוקה ליצירה דיגיטלית - מתמחה בפיתוח Full-Stack, ניהול נתונים וארכיטקטורות ענן, לצד מיומנויות מתקדמות בכלי AI יצירתיים כמו ChatGPT, Claude, Gemini, Canva ו-CapCut. גישה ייחודית המשלבת חשיבה הנדסית מדויקת עם יכולות עיצוב ויצירה דיגיטלית.',
      en: 'Combining rich experience in technical leadership with passion for digital creation - specializing in Full-Stack development, data management and cloud architectures, alongside advanced skills in creative AI tools like ChatGPT, Claude, Gemini, Canva and CapCut. A unique approach that merges precise engineering thinking with digital design and creative capabilities.'
    });
  }

  professionalExtended(): string {
    return this.languageService.getTranslation({
      he: 'בעידן של AI יצירתי, אני מאמין שהשילוב בין מומחיות טכנולוגית עמוקה לבין יכולות יצירה דיגיטלית הוא המפתח לפתרונות חדשניים ויוצאי דופן - כאלה שלא רק עובדים, אלא גם מעוררים השראה.',
      en: 'In the era of creative AI, I believe that combining deep technological expertise with digital creative capabilities is the key to innovative and exceptional solutions - ones that not only work, but also inspire.'
    });
  }

  highlight1Title(): string {
    return this.languageService.getTranslation({
      he: 'הובלה טכנולוגית בחברות מובילות',
      en: 'Technical Leadership at Leading Companies'
    });
  }

  highlight1(): string {
    return this.languageService.getTranslation({
      he: 'הובלת יוזמות אסטרטגיות ב-Philips Medical כ-Data Tech & Quality Lead וכ-Software Tech Lead, פיתוח פתרונות מונעי AI עם Python, Node.js, Angular, Databricks ו-PowerBI, תוך ניהול צוותים והנחיית עמיתים להשגת יעדים ארגוניים',
      en: 'Leading strategic initiatives at Philips Medical as Data Tech & Quality Lead and Software Tech Lead, developing AI-driven solutions with Python, Node.js, Angular, Databricks and PowerBI, while managing teams and mentoring peers to achieve organizational goals'
    });
  }

  highlight2Title(): string {
    return this.languageService.getTranslation({
      he: 'ארכיטקטורות מורכבות ומדרגיות',
      en: 'Complex & Scalable Architectures'
    });
  }

  highlight2(): string {
    return this.languageService.getTranslation({
      he: 'תכנון ופיתוח ארכיטקטורות מבוססות micro-services, dockers ו-cloud (AWS, Cloud Foundry), בניית צינורות נתונים מתקדמים, ופיתוח אפליקציות מורכבות מרובות-תהליכים עם .NET Core, C#, TypeScript ו-Node.js',
      en: 'Designing and developing architectures based on micro-services, dockers and cloud (AWS, Cloud Foundry), building advanced data pipelines, and developing complex multi-process applications with .NET Core, C#, TypeScript and Node.js'
    });
  }

  highlight3Title(): string {
    return this.languageService.getTranslation({
      he: 'מומחיות Full-Stack ונתונים',
      en: 'Full-Stack & Data Expertise'
    });
  }

  highlight3(): string {
    return this.languageService.getTranslation({
      he: 'ניסיון רחב ידיים ב-.NET, Python, Angular, Node.js, TSQL ו-Azure Data Lake, עם התמחות בפיתוח Full-Stack, אינטגרציה בין מערכות, ניתוח נתונים ופתרונות BI, תוך ביצוע code reviews, system design ושיפור חוב טכני',
      en: 'Extensive hands-on experience in .NET, Python, Angular, Node.js, TSQL and Azure Data Lake, specializing in Full-Stack development, system integration, data analysis and BI solutions, while conducting code reviews, system design and improving technical debt'
    });
  }

  getIconForBenefit(benefit: any): string {
    const currentLang = this.languageService.language();
    const titleHe = benefit.title.he;

    const icons: Record<string, string> = {
      'אסטרטגיות בשרשרת אספקה': '/assets/icons/IMG_8877-removebg-preview.png',
      'פיתוח תוכנה Full-Stack': '/assets/icons/IMG_8880-removebg-preview.png',
      'ניתוח נתונים': '/assets/icons/IMG_8891-removebg-preview.png',
      'אוטומציות ובינה מלאכותית': '/assets/icons/IMG_8889-removebg-preview.png'
    };

    return icons[titleHe] || '/assets/icons/IMG_8877-removebg-preview.png';
  }

  trackByIndex(index: number): number {
    return index;
  }
}