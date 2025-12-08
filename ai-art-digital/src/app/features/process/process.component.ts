import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { CONTENT_DATA } from '../../data/content.data';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="process" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-800 dark:to-midnight-750">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Desktop Timeline -->
        <div class="hidden lg:block mt-20">
          <div class="relative">
            <!-- Timeline Line -->
            <div [class]="timelineLineClass"></div>

            <!-- Process Steps -->
            <div [class]="stepsContainerClass">
              <div *ngFor="let step of processSteps; trackBy: trackByStep; let i = index"
                   class="flex items-center relative"
                   [class.flex-row-reverse]="languageService.direction() === 'rtl'">

                <!-- Step Content -->
                <div [class]="getStepContentClass(i)" class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                  <div class="text-center">
                    <h3 class="font-bold text-xl text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {{ languageService.getTranslation(step.title) }}
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                      {{ languageService.getTranslation(step.description) }}
                    </p>
                  </div>
                </div>

                <!-- Step Number Circle -->
                <div class="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  <span class="text-white font-bold text-xl">{{ step.step }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Vertical Layout -->
        <div class="lg:hidden mt-16 space-y-8">
          <div *ngFor="let step of processSteps; trackBy: trackByStep"
               class="relative pl-16"
               [class.pr-16]="languageService.direction() === 'rtl'"
               [class.pl-0]="languageService.direction() === 'rtl'">

            <!-- Step Number -->
            <div [class]="getMobileStepNumberClass()" class="absolute w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg flex items-center justify-center">
              <span class="text-white font-bold">{{ step.step }}</span>
            </div>

            <!-- Step Content -->
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-all duration-300">
              <h3 class="font-bold text-lg text-slate-900 mb-2">
                {{ languageService.getTranslation(step.title) }}
              </h3>
              <p class="text-slate-600 leading-relaxed">
                {{ languageService.getTranslation(step.description) }}
              </p>
            </div>

            <!-- Connecting Line (not on last item) -->
            <div *ngIf="step.step < processSteps.length"
                 [class]="getMobileConnectingLineClass()"
                 class="absolute w-0.5 h-8 bg-gradient-to-b from-primary-300 to-primary-400">
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-20 text-center">
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">
              {{ readyToStartTitle() }}
            </h3>
            <p class="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              {{ readyToStartDescription() }}
            </p>
            <button
              (click)="scrollToContact()"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {{ startProjectCta() }}
              <svg [class.ml-2]="languageService.direction() === 'ltr'" [class.mr-2]="languageService.direction() === 'rtl'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getArrowPath()"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  languageService = inject(LanguageService);
  processSteps = CONTENT_DATA.process;

  get timelineLineClass(): string {
    return this.languageService.direction() === 'rtl'
      ? 'absolute top-1/2 right-0 left-0 h-1 bg-gradient-to-l from-primary-200 via-primary-300 to-primary-400 transform -translate-y-1/2'
      : 'absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400 transform -translate-y-1/2';
  }

  get stepsContainerClass(): string {
    return 'grid grid-cols-5 gap-8 relative z-10';
  }

  getStepContentClass(index: number): string {
    const isEven = index % 2 === 0;
    const baseClass = 'w-80 relative';

    if (this.languageService.direction() === 'rtl') {
      return isEven ? `${baseClass} mt-20` : `${baseClass} mb-20`;
    } else {
      return isEven ? `${baseClass} mb-20` : `${baseClass} mt-20`;
    }
  }

  getMobileStepNumberClass(): string {
    return this.languageService.direction() === 'rtl'
      ? 'top-0 right-0'
      : 'top-0 left-0';
  }

  getMobileConnectingLineClass(): string {
    return this.languageService.direction() === 'rtl'
      ? 'top-12 right-6'
      : 'top-12 left-6';
  }

  getArrowPath(): string {
    return this.languageService.direction() === 'rtl'
      ? 'm19 12l-7-7 7 7-7 7 7-7zm-6 0H5 5'
      : 'm5 12l7-7-7 7 7 7-7-7zm6 0h8 8';
  }

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'איך זה עובד?',
      en: 'How It Works?'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'תהליך פשוט ושקוף שלוקח אותך מרעיון למוצר מוגמר תוך ימים ספורים',
      en: 'A simple and transparent process that takes you from idea to finished product in just a few days'
    });
  }

  readyToStartTitle(): string {
    return this.languageService.getTranslation({
      he: 'מוכן להתחיל?',
      en: 'Ready to Start?'
    });
  }

  readyToStartDescription(): string {
    return this.languageService.getTranslation({
      he: 'התהליך פשוט ומהיר. רק שלח לי הודעה ונתחיל לעבוד על הפרויקט שלך היום.',
      en: 'The process is simple and fast. Just send me a message and we\'ll start working on your project today.'
    });
  }

  startProjectCta(): string {
    return this.languageService.getTranslation({
      he: 'בוא נתחיל את הפרויקט',
      en: 'Let\'s Start Your Project'
    });
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByStep(index: number, step: any): number {
    return step.step;
  }
}