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
      <div class="absolute inset-0 overflow-hidden z-0">
        <!-- Light mode floating elements -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-200/30 to-primary-300/20 dark:from-violet-500/20 dark:to-violet-600/10 rounded-full blur-3xl animate-float float-gentle"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent-200/30 to-accent-300/20 dark:from-emerald-500/15 dark:to-emerald-600/8 rounded-full blur-3xl animate-float float-gentle" style="animation-delay: -3s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-rose-500/12 dark:to-rose-600/6 rounded-full blur-3xl animate-float float-gentle" style="animation-delay: -6s;"></div>

        <!-- Additional dark mode artistic elements -->
        <div class="dark:block hidden absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full blur-2xl pulse-glow" style="animation-delay: -2s;"></div>
        <div class="dark:block hidden absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-emerald-400/8 to-transparent rounded-full blur-2xl pulse-glow" style="animation-delay: -4s;"></div>

        <!-- Floating Images - Your Creations - Artistic Collage Style -->

        <!-- Film strip style image - LARGER -->
        <div [class]="'absolute top-16 w-56 sm:w-72 lg:w-96 opacity-25 dark:opacity-20 animate-float rotate-3 hover:-rotate-3 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'left-8' : 'right-8')" style="animation-delay: -1s;">
          <div class="bg-slate-900 dark:bg-slate-700 p-2 shadow-2xl">
            <div class="border-y-4 border-slate-900 dark:border-slate-600">
              <div class="aspect-[16/9] overflow-hidden">
                <img src="/assets/images/1.jpg" class="w-full h-full object-cover" alt="Creation">
              </div>
            </div>
          </div>
        </div>

        <!-- Torn paper effect portrait - LARGER -->
        <div [class]="'absolute bottom-20 w-48 sm:w-60 lg:w-72 opacity-25 dark:opacity-20 animate-float -rotate-12 hover:-rotate-6 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'right-8' : 'left-8')" style="animation-delay: -4s;">
          <div class="relative bg-white dark:bg-slate-200 p-4 shadow-2xl" style="clip-path: polygon(0% 2%, 3% 0%, 7% 1%, 10% 0%, 15% 2%, 18% 0%, 22% 1%, 27% 0%, 30% 2%, 35% 1%, 38% 0%, 42% 2%, 47% 0%, 50% 1%, 55% 0%, 58% 2%, 62% 1%, 67% 0%, 70% 2%, 75% 1%, 78% 0%, 82% 2%, 87% 0%, 90% 1%, 95% 0%, 98% 2%, 100% 0%, 100% 98%, 98% 100%, 95% 99%, 90% 100%, 87% 98%, 82% 100%, 78% 99%, 75% 100%, 70% 98%, 67% 100%, 62% 99%, 58% 100%, 55% 98%, 50% 100%, 47% 99%, 42% 100%, 38% 98%, 35% 100%, 30% 99%, 27% 100%, 22% 98%, 18% 100%, 15% 99%, 10% 100%, 7% 98%, 3% 100%, 0% 98%);">
            <div class="aspect-[3/4] overflow-hidden">
              <img src="/assets/images/2.png" class="w-full h-full object-cover sepia dark:sepia-0" alt="Creation">
            </div>
          </div>
        </div>

      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <!-- AI Badge -->
        <div *ngIf="languageService.getTranslation(heroContent.badge)" class="inline-flex items-center px-4 py-2 glass border border-primary-200 dark:border-violet-500/30 text-primary-700 dark:text-violet-200 rounded-full text-sm font-semibold mb-8 shadow-lg animate-fade-in pulse-glow">
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
        <div class="flex justify-center items-center animate-slide-up" style="animation-delay: 0.4s;">
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