import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { CONTENT_DATA } from '../../data/content.data';
import { WhatsAppUtil } from '../../utils/whatsapp.util';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50 dark:bg-gradient-to-br dark:from-midnight-950 dark:via-violet-950/50 dark:to-midnight-900 overflow-hidden">

      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Light mode floating elements -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-200/30 to-primary-300/20 dark:from-violet-500/20 dark:to-violet-600/10 rounded-full blur-3xl animate-float float-gentle"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent-200/30 to-accent-300/20 dark:from-emerald-500/15 dark:to-emerald-600/8 rounded-full blur-3xl animate-float float-gentle" style="animation-delay: -3s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-rose-500/12 dark:to-rose-600/6 rounded-full blur-3xl animate-float float-gentle" style="animation-delay: -6s;"></div>

        <!-- Additional dark mode artistic elements -->
        <div class="dark:block hidden absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full blur-2xl pulse-glow" style="animation-delay: -2s;"></div>
        <div class="dark:block hidden absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-emerald-400/8 to-transparent rounded-full blur-2xl pulse-glow" style="animation-delay: -4s;"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <!-- AI Badge -->
        <div class="inline-flex items-center px-4 py-2 glass border border-primary-200 dark:border-violet-500/30 text-primary-700 dark:text-violet-200 rounded-full text-sm font-semibold mb-8 shadow-lg animate-fade-in pulse-glow">
          <span [class]="'w-2 h-2 bg-primary-500 dark:bg-violet-400 rounded-full animate-pulse ' + (languageService.direction() === 'rtl' ? 'ml-2' : 'mr-2')"></span>
          {{ languageService.getTranslation(heroContent.badge) }}
        </div>

        <!-- Main Headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 dark:text-glow mb-6 leading-tight animate-slide-up">
          {{ languageService.getTranslation(heroContent.headline) }}
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
          {{ languageService.getTranslation(heroContent.subheadline) }}
        </p>

        <!-- CTA Button -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.4s;">
          <app-button
            variant="whatsapp"
            size="xl"
            (clicked)="onWhatsAppClick()"
            class="shadow-2xl btn-artistic">
            <svg slot="icon"
                 [class.mr-3]="languageService.direction() === 'ltr'"
                 [class.ml-3]="languageService.direction() === 'rtl'"
                 class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.447"/>
            </svg>
            {{ languageService.getTranslation(heroContent.cta) }}
          </app-button>

          <app-button
            variant="outline"
            size="xl"
            (clicked)="scrollToServices()"
            class="btn-artistic">
            {{ learnMoreText() }}
          </app-button>
        </div>

        <!-- Technology Stack Indicators -->
        <div class="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500 dark:text-slate-400 animate-fade-in" style="animation-delay: 0.6s;">
          <div class="flex items-center glass px-3 py-2 rounded-full pulse-glow">
            <span [class]="'text-2xl ' + (languageService.direction() === 'rtl' ? 'ml-2' : 'mr-2')">💻</span>
            <span class="text-sm">{{ fullStackText() }}</span>
          </div>
          <div class="flex items-center glass px-3 py-2 rounded-full pulse-glow">
            <span [class]="'text-2xl ' + (languageService.direction() === 'rtl' ? 'ml-2' : 'mr-2')">☁️</span>
            <span class="text-sm">{{ cloudArchitectureText() }}</span>
          </div>
          <div class="flex items-center glass px-3 py-2 rounded-full pulse-glow">
            <span [class]="'text-2xl ' + (languageService.direction() === 'rtl' ? 'ml-2' : 'mr-2')">📊</span>
            <span class="text-sm">{{ dataAnalyticsText() }}</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  languageService = inject(LanguageService);
  configService = inject(ConfigService);
  heroContent = CONTENT_DATA.hero;

  onWhatsAppClick(): void {
    const config = this.configService.getConfig();

    const url = WhatsAppUtil.generateWhatsAppUrl(config.whatsappNumber, {
      language: this.languageService.language(),
      customMessage: this.languageService.getTranslation({
        he: 'שלום! ראיתי את האתר שלך ואני מעוניין בשירותים הדיגיטליים. אשמח לשמוע פרטים נוספים.',
        en: 'Hello! I saw your website and I\'m interested in your digital services. I\'d love to hear more details.'
      })
    });

    window.open(url, '_blank');
  }

  scrollToServices(): void {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  learnMoreText(): string {
    return this.languageService.getTranslation({
      he: 'למד עוד',
      en: 'Learn More'
    });
  }

  fullStackText(): string {
    return this.languageService.getTranslation({
      he: 'Full-Stack Development',
      en: 'Full-Stack Development'
    });
  }

  cloudArchitectureText(): string {
    return this.languageService.getTranslation({
      he: 'Cloud Architecture',
      en: 'Cloud Architecture'
    });
  }

  dataAnalyticsText(): string {
    return this.languageService.getTranslation({
      he: 'Data Analytics',
      en: 'Data Analytics'
    });
  }
}