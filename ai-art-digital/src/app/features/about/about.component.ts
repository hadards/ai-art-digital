import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { CONTENT_DATA } from '../../data/content.data';

// Icon mapping for benefits
const BENEFIT_ICONS: Record<string, string> = {
  'אסטרטגיות בשרשרת אספקה': '/assets/icons/IMG_8877-removebg-preview.png',
  'פיתוח תוכנה Full-Stack': '/assets/icons/IMG_8880-removebg-preview.png',
  'ניתוח נתונים': '/assets/icons/IMG_8891-removebg-preview.png',
  'אוטומציות ובינה מלאכותית': '/assets/icons/IMG_8889-removebg-preview.png'
};

const DEFAULT_BENEFIT_ICON = '/assets/icons/IMG_8877-removebg-preview.png';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="configService.isFeatureEnabled('showAboutMe')" id="about" class="relative py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50 dark:bg-gradient-to-br dark:from-midnight-950 dark:via-violet-950/30 dark:to-midnight-900 overflow-hidden">

      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-primary-300/10 dark:from-violet-500/10 dark:to-violet-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-accent-200/20 to-accent-300/10 dark:from-emerald-500/10 dark:to-emerald-600/5 rounded-full blur-3xl"></div>

        <!-- Floating Images - Your Creations - Artistic Collage Style -->
        <div [class]="'absolute top-0 w-56 sm:w-72 lg:w-96 aspect-square opacity-25 dark:opacity-20 animate-float -rotate-12 hover:rotate-0 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'left-8' : 'right-8')" style="animation-delay: -2s;">
          <div class="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50 dark:border-violet-400/30">
            <img src="/assets/images/4.jpg" class="w-full h-full object-cover mix-blend-luminosity dark:mix-blend-normal" alt="Creation">
          </div>
          <div [class]="'absolute -top-2 w-6 h-6 bg-primary-400 dark:bg-violet-400 rounded-full animate-pulse ' + (languageService.direction() === 'rtl' ? '-right-2' : '-left-2')"></div>
          <div [class]="'absolute -bottom-2 w-5 h-5 bg-accent-400 dark:bg-emerald-400 rounded-full animate-pulse ' + (languageService.direction() === 'rtl' ? '-left-2' : '-right-2')" style="animation-delay: 0.5s;"></div>
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- About Me Section with Profile -->
        <div class="mb-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

            <!-- Text Content -->
            <div [class]="contentOrder">
              <!-- Title -->
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 dark:text-glow mb-6 leading-tight">
                {{ languageService.getTranslation(aboutContent.headline) }}
              </h2>

              <!-- Bio with proper paragraphs -->
              <div class="space-y-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                <p *ngFor="let paragraph of bioParagraphs()"
                   class="text-slate-800 dark:text-slate-300">
                  {{ paragraph }}
                </p>
              </div>

              <!-- Tech Stack -->
              <div class="mt-6">
                <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {{ techStackTitle() }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of techStack"
                        class="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Profile Image -->
            <div [class]="imageOrder">
              <div class="relative">
                <!-- Decorative Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl transform rotate-6"></div>

                <!-- Profile Image -->
                <div class="relative bg-slate-200 rounded-3xl overflow-hidden aspect-square shadow-2xl max-w-sm mx-auto">
                  <img src="/assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover" />
                </div>

                <!-- Floating Elements -->
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
                <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>

        <!-- Benefits Cards Section -->
        <div class="mb-16">
          <div class="relative overflow-hidden rounded-3xl max-w-6xl mx-auto">
            <!-- Background with mesh gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/50 dark:from-slate-900 dark:via-midnight-900 dark:to-violet-950/30"></div>

            <!-- Animated gradient orbs -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/30 via-purple-400/20 to-transparent dark:from-violet-500/20 dark:via-purple-500/10 dark:to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-400/30 via-pink-400/20 to-transparent dark:from-emerald-500/20 dark:via-pink-500/10 dark:to-transparent rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

            <!-- Content -->
            <div class="relative p-4 md:p-12">
              <!-- Highlights -->
              <div class="grid grid-cols-3 gap-2 md:gap-4">
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
export class AboutComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly configService = inject(ConfigService);

  // Content data
  protected readonly aboutContent = CONTENT_DATA.about;
  protected readonly benefits = CONTENT_DATA.benefits;
  protected readonly stats = CONTENT_DATA.stats;
  protected readonly techStack = ['Python', 'Angular', 'Node.js', 'Databricks', 'Power Platform', 'AI Tools', 'Canva', 'CapCut'] as const;

  // Layout order for RTL/LTR
  get contentOrder(): string {
    return 'order-2 lg:order-1';
  }

  get imageOrder(): string {
    return 'order-1 lg:order-2';
  }

  // Translations
  techStackTitle(): string {
    return this.languageService.getTranslation({
      he: 'כלים וטכנולוגיות',
      en: 'Tools & Technologies'
    });
  }

  bioParagraphs(): string[] {
    const bioText = this.languageService.getTranslation(this.aboutContent.bio);
    return bioText.split('\n\n').filter(p => p.trim().length > 0);
  }

  // Helper methods
  getIconForBenefit(benefit: { title: { he: string } }): string {
    return BENEFIT_ICONS[benefit.title.he] || DEFAULT_BENEFIT_ICON;
  }

  trackByIndex(index: number): number {
    return index;
  }
}