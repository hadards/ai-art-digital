import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { CONTENT_DATA } from '../../data/content.data';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { WhatsAppUtil } from '../../utils/whatsapp.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ButtonComponent],
  template: `
    <section *ngIf="configService.isFeatureEnabled('showAboutMe')" id="about" class="py-20 bg-white dark:bg-gradient-to-br dark:from-midnight-800 dark:via-midnight-750 dark:to-midnight-700">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Text Content -->
          <div [class]="contentOrder">
            <app-section-header
              [title]="languageService.getTranslation(aboutContent.headline)"
              [subtitle]="languageService.getTranslation(aboutContent.bio)"
              [centered]="false"
              size="md">
            </app-section-header>

            <!-- Credentials -->
            <div *ngIf="aboutContent.credentials" class="mt-8">
              <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
                <p class="text-primary-800 font-medium">
                  {{ languageService.getTranslation(aboutContent.credentials) }}
                </p>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">
                {{ techStackTitle() }}
              </h3>
              <div class="flex flex-wrap gap-3">
                <span *ngFor="let tech of techStack"
                      class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-10">
              <app-button
                variant="whatsapp"
                size="lg"
                (clicked)="onWhatsAppClick()">
                <svg slot="icon"
                     [class.mr-3]="languageService.direction() === 'ltr'"
                     [class.ml-3]="languageService.direction() === 'rtl'"
                     class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.447"/>
                </svg>
                {{ ctaText() }}
              </app-button>

              <div class="mt-4 text-sm text-slate-500">
                {{ responseTimeText() }}
              </div>
            </div>
          </div>

          <!-- Profile Image -->
          <div [class]="imageOrder">
            <div class="relative">
              <!-- Decorative Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl transform rotate-6"></div>

              <!-- Profile Image Placeholder -->
              <div class="relative bg-slate-200 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
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