import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { CONTENT_DATA } from '../../data/content.data';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="faq" class="py-20 bg-white dark:bg-gradient-to-br dark:from-midnight-800 dark:via-midnight-750 dark:to-midnight-700">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <div class="mt-16 max-w-4xl mx-auto">
          <div class="space-y-4">
            <div *ngFor="let item of faqData; trackBy: trackByIndex; let i = index"
                 class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">

              <!-- Question Button -->
              <button
                (click)="toggleItem(i)"
                class="w-full px-6 py-4 text-left focus:outline-none focus:ring-4 focus:ring-primary-100 hover:bg-slate-100 transition-colors"
                [attr.aria-expanded]="openItems.has(i)">

                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <span [class]="getQuestionIconClass()" class="flex-shrink-0 text-primary-600 text-xl mt-1">?</span>
                    <h3 class="font-semibold text-slate-900 text-lg leading-relaxed">
                      {{ languageService.getTranslation(item.question) }}
                    </h3>
                  </div>

                  <!-- Expand/Collapse Icon -->
                  <div class="flex-shrink-0 ml-4">
                    <svg
                      class="w-5 h-5 text-slate-500 transform transition-transform duration-200"
                      [class.rotate-180]="openItems.has(i)"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>
              </button>

              <!-- Answer Content -->
              <div
                *ngIf="openItems.has(i)"
                class="px-6 pb-6 animate-fade-in"
                [@expandCollapse]="openItems.has(i)">
                <div [class]="getAnswerClass()">
                  <p class="text-slate-600 leading-relaxed">
                    {{ languageService.getTranslation(item.answer) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Still Have Questions -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">
              {{ stillHaveQuestionsTitle() }}
            </h3>
            <p class="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              {{ stillHaveQuestionsDescription() }}
            </p>
            <button
              (click)="onContactClick()"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg [class.mr-2]="languageService.direction() === 'ltr'" [class.ml-2]="languageService.direction() === 'rtl'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.447"/>
              </svg>
              {{ contactButtonText() }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  languageService = inject(LanguageService);
  faqData = CONTENT_DATA.faq;
  openItems = new Set<number>();

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'שאלות נפוצות',
      en: 'Frequently Asked Questions'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'מענה לשאלות הנפוצות ביותר לפני שמתחילים לעבוד יחד',
      en: 'Answers to the most common questions before we start working together'
    });
  }

  getQuestionIconClass(): string {
    return this.languageService.direction() === 'rtl'
      ? 'ml-3'
      : 'mr-3';
  }

  getAnswerClass(): string {
    return this.languageService.direction() === 'rtl'
      ? 'mr-8'
      : 'ml-8';
  }

  toggleItem(index: number): void {
    if (this.openItems.has(index)) {
      this.openItems.delete(index);
    } else {
      this.openItems.add(index);
    }
  }

  stillHaveQuestionsTitle(): string {
    return this.languageService.getTranslation({
      he: 'עוד שאלות?',
      en: 'Still Have Questions?'
    });
  }

  stillHaveQuestionsDescription(): string {
    return this.languageService.getTranslation({
      he: 'לא מצאת את התשובה שאתה מחפש? שלח לי הודעה ואענה לך תוך מספר שעות.',
      en: 'Didn\'t find the answer you\'re looking for? Send me a message and I\'ll respond within hours.'
    });
  }

  contactButtonText(): string {
    return this.languageService.getTranslation({
      he: 'שאל אותי כל דבר',
      en: 'Ask Me Anything'
    });
  }

  onContactClick(): void {
    // This will be implemented with WhatsApp integration
    console.log('FAQ contact WhatsApp click');
  }

  trackByIndex(index: number): number {
    return index;
  }
}