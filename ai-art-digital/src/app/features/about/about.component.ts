import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { CONTENT_DATA } from '../../data/content.data';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { WhatsAppUtil } from '../../utils/whatsapp.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section *ngIf="configService.isFeatureEnabled('showAboutMe')" id="about" class="relative py-12 bg-white dark:bg-gradient-to-br dark:from-midnight-800 dark:via-midnight-750 dark:to-midnight-700 overflow-hidden">

      <!-- Background Elements with Floating Images -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <!-- Floating Images - Your Creations - Artistic Collage Style -->

        <!-- Scrapbook-style image with decorative corner - LARGER -->
        <div [class]="'absolute top-16 w-52 sm:w-68 lg:w-84 opacity-25 dark:opacity-20 animate-float -rotate-6 hover:-rotate-3 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'right-8' : 'left-8')" style="animation-delay: -4s;">
          <div class="relative bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-5 shadow-2xl border-l-4 border-t-4 border-primary-400 dark:border-violet-400">
            <div class="aspect-[4/3] overflow-hidden">
              <img src="/assets/images/2.png" class="w-full h-full object-cover" alt="Creation">
            </div>
            <!-- Decorative corner pin -->
            <div [class]="'absolute top-3 w-4 h-4 rounded-full bg-accent-500 dark:bg-emerald-500 shadow-lg ' + (languageService.direction() === 'rtl' ? 'left-3' : 'right-3')"></div>
            <div [class]="'absolute bottom-3 w-4 h-4 rounded-full bg-primary-500 dark:bg-violet-500 shadow-lg ' + (languageService.direction() === 'rtl' ? 'right-3' : 'left-3')"></div>
          </div>
        </div>

        <!-- Octagon-clipped portrait with artistic frame - LARGER -->
        <div [class]="'hidden lg:block absolute bottom-20 w-48 lg:w-64 aspect-square opacity-22 dark:opacity-18 animate-float rotate-12 hover:rotate-6 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'left-8 lg:left-16' : 'right-8 lg:right-16')" style="animation-delay: -7s; clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);">
          <div class="w-full h-full relative">
            <img src="/assets/images/4.jpg" class="w-full h-full object-cover hue-rotate-15 dark:hue-rotate-0" alt="Creation">
            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-500/20 dark:to-violet-500/20"></div>
            <div class="absolute inset-0 border-2 border-white/60 dark:border-violet-300/40" style="clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);"></div>
          </div>
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

          <!-- Text Content -->
          <div [class]="contentOrder">
            <app-section-header
              [title]="languageService.getTranslation(aboutContent.headline)"
              [subtitle]="languageService.getTranslation(aboutContent.bio)"
              [centered]="false"
              size="md">
            </app-section-header>

            <!-- Credentials -->
            <div *ngIf="aboutContent.credentials" class="mt-4">
              <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 border border-primary-100">
                <p class="text-primary-800 font-medium text-sm">
                  {{ languageService.getTranslation(aboutContent.credentials) }}
                </p>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="mt-6">
              <h3 class="text-base font-semibold text-slate-900 mb-3">
                {{ techStackTitle() }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of techStack"
                      class="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors">
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

              <!-- Profile Image Placeholder -->
              <div class="relative bg-slate-200 rounded-3xl overflow-hidden aspect-square shadow-2xl max-w-sm mx-auto">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-slate-500">
                    <svg class="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <p class="font-medium">{{ profilePlaceholderText() }}</p>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  languageService = inject(LanguageService);
  configService = inject(ConfigService);
  aboutContent = CONTENT_DATA.about;

  techStack = ['Python', 'Angular', 'Node.js', 'Databricks', 'AI Tools', 'Figma', 'Photoshop'];

  get contentOrder(): string {
    return this.languageService.direction() === 'rtl' ? 'order-2 lg:order-1' : 'order-2 lg:order-1';
  }

  get imageOrder(): string {
    return this.languageService.direction() === 'rtl' ? 'order-1 lg:order-2' : 'order-1 lg:order-2';
  }

  techStackTitle(): string {
    return this.languageService.getTranslation({
      he: 'כלים וטכנולוגיות',
      en: 'Tools & Technologies'
    });
  }

  ctaText(): string {
    return this.languageService.getTranslation({
      he: 'בוא נעבוד ביחד',
      en: 'Let\'s Work Together'
    });
  }

  responseTimeText(): string {
    return this.languageService.getTranslation({
      he: 'זמן מענה: עד 24 שעות',
      en: 'Response time: Up to 24 hours'
    });
  }

  profilePlaceholderText(): string {
    return this.languageService.getTranslation({
      he: 'הוסף תמונה אישית',
      en: 'Add Profile Photo'
    });
  }

  onWhatsAppClick(): void {
    const config = this.configService.getConfig();

    const url = WhatsAppUtil.generateWhatsAppUrl(config.whatsappNumber, {
      language: this.languageService.language(),
      customMessage: this.languageService.getTranslation({
        he: 'שלום! קראתי עליך באתר ואשמח לעבוד איתך על פרויקט. בוא נדבר!',
        en: 'Hello! I read about you on the website and would love to work with you on a project. Let\'s talk!'
      })
    });

    window.open(url, '_blank');
  }
}