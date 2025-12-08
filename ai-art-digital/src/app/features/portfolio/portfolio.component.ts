import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

interface PortfolioItem {
  id: string;
  title: { he: string; en: string };
  category: { he: string; en: string };
  description: { he: string; en: string };
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section *ngIf="configService.isFeatureEnabled('showPortfolio')" id="portfolio" class="py-20 bg-white dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-850 dark:to-midnight-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Category Filter -->
        <div class="mt-16 flex justify-center">
          <div class="flex flex-wrap gap-3 bg-slate-100 rounded-2xl p-2">
            <button
              *ngFor="let category of categories"
              (click)="setActiveCategory(category.id)"
              [class]="getCategoryButtonClass(category.id)"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300">
              {{ languageService.getTranslation(category.name) }}
            </button>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="mt-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              *ngFor="let item of filteredItems(); trackBy: trackByItemId"
              class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-primary-200">

              <!-- Image Container -->
              <div class="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <!-- Placeholder Image -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-slate-500">
                    <div class="w-16 h-16 mx-auto mb-4 bg-slate-300 rounded-2xl flex items-center justify-center">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    </div>
                    <p class="text-xs font-medium">{{ item.image }}</p>
                  </div>
                </div>

                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex flex-wrap gap-1">
                      <span *ngFor="let tag of item.tags"
                            class="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Category Badge -->
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                    {{ languageService.getTranslation(item.category) }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {{ languageService.getTranslation(item.title) }}
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  {{ languageService.getTranslation(item.description) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- More Gallery CTA -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">
              {{ moreGalleryTitle() }}
            </h3>
            <p class="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              {{ moreGalleryDescription() }}
            </p>
            <button
              (click)="onViewMoreClick()"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {{ viewMoreButtonText() }}
              <svg [class.ml-2]="languageService.direction() === 'ltr'" [class.mr-2]="languageService.direction() === 'rtl'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  languageService = inject(LanguageService);
  configService = inject(ConfigService);

  activeCategory = 'all';

  categories = [
    { id: 'all', name: { he: 'הכל', en: 'All' } },
    { id: 'characters', name: { he: 'דמויות', en: 'Characters' } },
    { id: 'landscapes', name: { he: 'נופים', en: 'Landscapes' } },
    { id: 'abstract', name: { he: 'אמנות מופשטת', en: 'Abstract Art' } },
    { id: 'portraits', name: { he: 'פורטרטים', en: 'Portraits' } },
    { id: 'fantasy', name: { he: 'פנטזיה', en: 'Fantasy' } }
  ];

  portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: { he: 'דמות פנטזיה מיסטית', en: 'Mystical Fantasy Character' },
      category: { he: 'דמויות', en: 'Characters' },
      description: { he: 'דמות פנטזיה מרהיבה עם פרטים מורכבים ואווירה קסומה', en: 'Stunning fantasy character with intricate details and magical atmosphere' },
      image: 'fantasy-character-1.jpg',
      tags: ['AI Art', 'Fantasy', 'Character Design']
    },
    {
      id: '2',
      title: { he: 'נוף עתידני', en: 'Futuristic Landscape' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'עיר עתידנית עם אדריכלות מתקדמת ותאורה דרמטית', en: 'Futuristic city with advanced architecture and dramatic lighting' },
      image: 'futuristic-landscape-1.jpg',
      tags: ['Sci-Fi', 'Architecture', 'Concept Art']
    },
    {
      id: '3',
      title: { he: 'פורטרט אומנותי', en: 'Artistic Portrait' },
      category: { he: 'פורטרטים', en: 'Portraits' },
      description: { he: 'פורטרט ייחודי בסגנון אמנותי עם משחק צבעים מרהיב', en: 'Unique portrait in artistic style with stunning color play' },
      image: 'artistic-portrait-1.jpg',
      tags: ['Portrait', 'Artistic', 'Digital Art']
    },
    {
      id: '4',
      title: { he: 'אמנות מופשטת צבעונית', en: 'Colorful Abstract Art' },
      category: { he: 'אמנות מופשטת', en: 'Abstract Art' },
      description: { he: 'יצירה מופשטת עם צבעים חיים וצורות דינמיות', en: 'Abstract creation with vibrant colors and dynamic shapes' },
      image: 'abstract-art-1.jpg',
      tags: ['Abstract', 'Colorful', 'Modern']
    },
    {
      id: '5',
      title: { he: 'יער קסום', en: 'Magical Forest' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'יער קסום עם אור מסתורי ויצורים פנטסטיים', en: 'Magical forest with mysterious light and fantastic creatures' },
      image: 'magical-forest-1.jpg',
      tags: ['Nature', 'Fantasy', 'Environment']
    },
    {
      id: '6',
      title: { he: 'לוחם עתידני', en: 'Future Warrior' },
      category: { he: 'דמויות', en: 'Characters' },
      description: { he: 'לוחם עתידני עם שריון מתקדם ונשק היי-טק', en: 'Futuristic warrior with advanced armor and hi-tech weapons' },
      image: 'future-warrior-1.jpg',
      tags: ['Character', 'Sci-Fi', 'Warrior']
    }
  ];

  filteredItems() {
    if (this.activeCategory === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item =>
      this.languageService.getTranslation(item.category) ===
      this.languageService.getTranslation(this.categories.find(c => c.id === this.activeCategory)?.name || { he: '', en: '' })
    );
  }

  setActiveCategory(categoryId: string) {
    this.activeCategory = categoryId;
  }

  getCategoryButtonClass(categoryId: string): string {
    const baseClasses = 'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300';
    const activeClasses = 'bg-primary-500 text-white shadow-lg';
    const inactiveClasses = 'text-slate-600 hover:text-slate-900 hover:bg-white';

    return this.activeCategory === categoryId
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  }

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'גלריית האמנות שלי',
      en: 'My Art Gallery'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'עבודות AI מקוריות שיצרתי - מדמויות פנטזיה ועד נופים עוצרי נשימה',
      en: 'Original AI artworks I created - from fantasy characters to breathtaking landscapes'
    });
  }

  moreGalleryTitle(): string {
    return this.languageService.getTranslation({
      he: 'רוצה לראות עוד?',
      en: 'Want to See More?'
    });
  }

  moreGalleryDescription(): string {
    return this.languageService.getTranslation({
      he: 'יש לי עוד מאות יצירות! גלה את הגלריה המלאה שלי ומצא השראה לפרויקט הבא שלך.',
      en: 'I have hundreds more artworks! Explore my full gallery and find inspiration for your next project.'
    });
  }

  viewMoreButtonText(): string {
    return this.languageService.getTranslation({
      he: 'צפה בגלריה המלאה',
      en: 'View Full Gallery'
    });
  }

  onViewMoreClick(): void {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByItemId(index: number, item: PortfolioItem): string {
    return item.id;
  }
}