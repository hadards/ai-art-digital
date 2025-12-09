import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { CONTENT_DATA } from '../../data/content.data';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="articles" class="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-midnight-950 dark:via-midnight-900 dark:to-violet-950/30">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <article *ngFor="let article of articles; let i = index"
                   class="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img [src]="article.imageUrl"
                   [alt]="languageService.getTranslation(article.title)"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              <!-- Tags -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                <span *ngFor="let tag of languageService.getTranslation(article.tags).slice(0, 2)"
                      class="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-full">
                  {{ tag }}
                </span>
              </div>

              <!-- Read Time -->
              <div class="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full">
                <svg class="w-4 h-4 text-primary-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-xs font-medium text-slate-700 dark:text-slate-200">
                  {{ languageService.getTranslation(article.readTime) }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Date -->
              <time class="text-sm text-slate-500 dark:text-slate-400">
                {{ formatDate(article.date) }}
              </time>

              <!-- Title -->
              <h3 [class]="'text-xl font-bold text-slate-900 dark:text-white mt-3 mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-violet-400 transition-colors duration-300 ' + (languageService.direction() === 'rtl' ? 'text-right' : 'text-left')">
                {{ languageService.getTranslation(article.title) }}
              </h3>

              <!-- Description -->
              <p [class]="'text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 ' + (languageService.direction() === 'rtl' ? 'text-right' : 'text-left')">
                {{ languageService.getTranslation(article.description) }}
              </p>

              <!-- Read More Link -->
              <a [href]="article.link"
                 target="_blank"
                 rel="noopener noreferrer"
                 [class]="'inline-flex items-center gap-2 text-primary-600 dark:text-violet-400 font-semibold hover:gap-3 transition-all duration-300 group/link ' + (languageService.direction() === 'rtl' ? 'flex-row-reverse' : '')">
                <span>{{ readMoreText() }}</span>
                <svg [class]="'w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1 ' + (languageService.direction() === 'rtl' ? 'rotate-180' : '')"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>

            <!-- Decorative Gradient -->
            <div class="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                 [ngClass]="{
                   'from-primary-500 to-purple-500': i === 0,
                   'from-purple-500 to-accent-500': i === 1,
                   'from-accent-500 to-primary-500': i === 2
                 }"></div>
          </article>
        </div>

      </div>
    </section>
  `
})
export class ArticlesComponent {
  languageService = inject(LanguageService);
  articles = CONTENT_DATA.articles;

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'המאמרים שלי',
      en: 'My Articles'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'חקר עמוק של טכנולוגיות מתקדמות, AI יצירתי, ופיתוח Full-Stack - תובנות מהשטח ומדריכים מעשיים שכתבתי',
      en: 'Deep exploration of advanced technologies, creative AI, and Full-Stack development - field insights and practical guides I wrote'
    });
  }

  readMoreText(): string {
    return this.languageService.getTranslation({
      he: 'קרא עוד',
      en: 'Read More'
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const isRtl = this.languageService.direction() === 'rtl';

    return date.toLocaleDateString(isRtl ? 'he-IL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
