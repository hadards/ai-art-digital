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
    <section class="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50 dark:bg-gradient-to-br dark:from-midnight-950 dark:via-violet-950/50 dark:to-midnight-900 overflow-hidden">

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

        <!-- Hadar bike image -->
        <div [class]="'absolute top-32 w-32 lg:w-40 aspect-square opacity-22 dark:opacity-18 animate-float -rotate-12 hover:-rotate-6 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'right-24 lg:right-32' : 'left-24 lg:left-32')" style="animation-delay: -9s;">
          <img src="/assets/images/hadar-bike.png" class="w-full h-full object-cover" alt="Hadar on bike">
        </div>

        <!-- Film strip style image - TALLER -->
        <div [class]="'absolute top-16 w-56 sm:w-72 lg:w-96 opacity-25 dark:opacity-20 animate-float rotate-3 hover:-rotate-3 transition-all duration-700 ' + (languageService.direction() === 'rtl' ? 'left-8' : 'right-8')" style="animation-delay: -1s;">
          <div class="bg-slate-900 dark:bg-slate-700 p-2 shadow-2xl">
            <div class="border-y-4 border-slate-900 dark:border-slate-600">
              <div class="aspect-[16/18] overflow-hidden">
                <img src="/assets/images/1.jpg" class="w-full h-full object-cover" alt="Creation">
              </div>
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
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 mb-6 leading-tight animate-slide-up tracking-tight" style="filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 15px rgba(139, 92, 246, 0.3));">
          <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 dark:from-violet-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {{ languageService.getTranslation(heroContent.headline) }}
          </span>
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

}