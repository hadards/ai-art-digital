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
    </section>
  `
})
export class AboutComponent {
  languageService = inject(LanguageService);
  configService = inject(ConfigService);
  aboutContent = CONTENT_DATA.about;

  techStack = ['Python', 'Angular', 'Node.js', 'Databricks', 'AI Tools', 'Canva', 'CapCut'];

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