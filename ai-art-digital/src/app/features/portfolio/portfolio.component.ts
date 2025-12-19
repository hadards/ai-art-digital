import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';

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
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section *ngIf="configService.isFeatureEnabled('showPortfolio')" id="portfolio" class="py-20 bg-white dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-850 dark:to-midnight-800 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Auto-Scrolling Carousel -->
        <div class="relative">
          <!-- Gradient Overlays for fade effect -->
          <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-midnight-900 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-midnight-900 to-transparent z-10 pointer-events-none"></div>

          <!-- Navigation Button -->
          <button
            (click)="scrollNext()"
            [class]="'absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-violet-500/30 ' + (languageService.direction() === 'rtl' ? 'left-4' : 'right-4')">
            <svg class="w-6 h-6 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Scrolling Container -->
          <div #scrollContainer class="overflow-hidden">
            <div [class]="'flex items-center gap-6 ' + (languageService.direction() === 'rtl' ? 'animate-scroll-rtl' : 'animate-scroll-ltr')" style="width: max-content;">
              <!-- First set of images -->
              <div *ngFor="let item of portfolioItems; let i = index" [class]="'flex-shrink-0 group ' + (i % 4 === 3 ? 'w-[500px]' : 'w-80')">
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-violet-500/20">
                  <!-- Image Container -->
                  <div [class]="'relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden ' + (i % 4 === 3 ? 'aspect-video' : 'aspect-[3/4]')">
                    <img [ngSrc]="item.image" [alt]="languageService.getTranslation(item.title)"
                         fill
                         class="object-cover group-hover:scale-110 transition-transform duration-700" />


                  </div>

                </div>
              </div>

              <!-- Duplicate set 1 for infinite scroll effect -->
              <div *ngFor="let item of portfolioItems; let i = index" [class]="'flex-shrink-0 group ' + (i % 4 === 3 ? 'w-[500px]' : 'w-80')">
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-violet-500/20">
                  <!-- Image Container -->
                  <div [class]="'relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden ' + (i % 4 === 3 ? 'aspect-video' : 'aspect-[3/4]')">
                    <img [ngSrc]="item.image" [alt]="languageService.getTranslation(item.title)"
                         fill
                         class="object-cover group-hover:scale-110 transition-transform duration-700" />


                  </div>

                </div>
              </div>

              <!-- Duplicate set 2 for extra smooth infinite scroll -->
              <div *ngFor="let item of portfolioItems; let i = index" [class]="'flex-shrink-0 group ' + (i % 4 === 3 ? 'w-[500px]' : 'w-80')">
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-violet-500/20">
                  <!-- Image Container -->
                  <div [class]="'relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden ' + (i % 4 === 3 ? 'aspect-video' : 'aspect-[3/4]')">
                    <img [ngSrc]="item.image" [alt]="languageService.getTranslation(item.title)"
                         fill
                         class="object-cover group-hover:scale-110 transition-transform duration-700" />


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  languageService = inject(LanguageService);
  configService = inject(ConfigService);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

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
      image: '/assets/images/1.jpg',
      tags: ['AI Art', 'Fantasy', 'Character Design']
    },
    {
      id: '2',
      title: { he: 'נוף עתידני', en: 'Futuristic Landscape' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'עיר עתידנית עם אדריכלות מתקדמת ותאורה דרמטית', en: 'Futuristic city with advanced architecture and dramatic lighting' },
      image: '/assets/images/family-info.png',
      tags: ['Sci-Fi', 'Architecture', 'Concept Art']
    },
    {
      id: '3',
      title: { he: 'פורטרט אומנותי', en: 'Artistic Portrait' },
      category: { he: 'פורטרטים', en: 'Portraits' },
      description: { he: 'פורטרט ייחודי בסגנון אמנותי עם משחק צבעים מרהיב', en: 'Unique portrait in artistic style with stunning color play' },
      image: '/assets/images/4.jpg',
      tags: ['Portrait', 'Artistic', 'Digital Art']
    },
    {
      id: '4',
      title: { he: 'יצירה דיגיטלית', en: 'Digital Creation' },
      category: { he: 'אמנות מופשטת', en: 'Abstract Art' },
      description: { he: 'יצירה דיגיטלית ייחודית', en: 'Unique digital creation' },
      image: '/assets/images/16.PNG',
      tags: ['Digital Art', 'Creative', 'Modern']
    },
    {
      id: '5',
      title: { he: 'דמות פנטזיה מיסטית', en: 'Mystical Fantasy Character' },
      category: { he: 'דמויות', en: 'Characters' },
      description: { he: 'דמות פנטזיה מרהיבה עם פרטים מורכבים ואווירה קסומה', en: 'Stunning fantasy character with intricate details and magical atmosphere' },
      image: '/assets/images/1.jpg',
      tags: ['AI Art', 'Fantasy', 'Character Design']
    },
    {
      id: '6',
      title: { he: 'נוף עתידני', en: 'Futuristic Landscape' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'עיר עתידנית עם אדריכלות מתקדמת ותאורה דרמטית', en: 'Futuristic city with advanced architecture and dramatic lighting' },
      image: '/assets/images/8.jpg',
      tags: ['Sci-Fi', 'Architecture', 'Concept Art']
    },
    {
      id: '7',
      title: { he: 'פורטרט אומנותי', en: 'Artistic Portrait' },
      category: { he: 'פורטרטים', en: 'Portraits' },
      description: { he: 'פורטרט ייחודי בסגנון אמנותי עם משחק צבעים מרהיב', en: 'Unique portrait in artistic style with stunning color play' },
      image: '/assets/images/3.jpg',
      tags: ['Portrait', 'Artistic', 'Digital Art']
    },
    {
      id: '8',
      title: { he: 'אמנות מופשטת צבעונית', en: 'Colorful Abstract Art' },
      category: { he: 'אמנות מופשטת', en: 'Abstract Art' },
      description: { he: 'יצירה מופשטת עם צבעים חיים וצורות דינמיות', en: 'Abstract creation with vibrant colors and dynamic shapes' },
      image: '/assets/images/7.jpg',
      tags: ['Abstract', 'Colorful', 'Modern']
    },
    {
      id: '9',
      title: { he: 'יער קסום', en: 'Magical Forest' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'יער קסום עם אור מסתורי ויצורים פנטסטיים', en: 'Magical forest with mysterious light and fantastic creatures' },
      image: '/assets/images/15.jpg',
      tags: ['Nature', 'Fantasy', 'Environment']
    },
    {
      id: '10',
      title: { he: 'לוחם עתידני', en: 'Future Warrior' },
      category: { he: 'דמויות', en: 'Characters' },
      description: { he: 'לוחם עתידני עם שריון מתקדם ונשק היי-טק', en: 'Futuristic warrior with advanced armor and hi-tech weapons' },
      image: '/assets/images/9.jpg',
      tags: ['Character', 'Sci-Fi', 'Warrior']
    },
    {
      id: '11',
      title: { he: 'עיצוב אומנותי', en: 'Artistic Design' },
      category: { he: 'אמנות מופשטת', en: 'Abstract Art' },
      description: { he: 'עיצוב אומנותי מרהיב', en: 'Stunning artistic design' },
      image: '/assets/images/17.PNG',
      tags: ['Art', 'Design', 'Creative']
    },
    {
      id: '12',
      title: { he: 'יצירה ויזואלית', en: 'Visual Creation' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'יצירה ויזואלית ייחודית', en: 'Unique visual creation' },
      image: '/assets/images/18.PNG',
      tags: ['Visual', 'Creative', 'Art']
    },
    {
      id: '13',
      title: { he: 'אמנות דיגיטלית', en: 'Digital Art' },
      category: { he: 'פורטרטים', en: 'Portraits' },
      description: { he: 'אמנות דיגיטלית מתקדמת', en: 'Advanced digital art' },
      image: '/assets/images/19.PNG',
      tags: ['Digital', 'Modern', 'Art']
    },
    {
      id: '14',
      title: { he: 'יצירה ייחודית', en: 'Unique Creation' },
      category: { he: 'אמנות מופשטת', en: 'Abstract Art' },
      description: { he: 'יצירה אומנותית ייחודית', en: 'Unique artistic creation' },
      image: '/assets/images/20.PNG',
      tags: ['Creative', 'Art', 'Unique']
    },
    {
      id: '15',
      title: { he: 'עיצוב מודרני', en: 'Modern Design' },
      category: { he: 'נופים', en: 'Landscapes' },
      description: { he: 'עיצוב מודרני ומרשים', en: 'Modern and impressive design' },
      image: '/assets/images/21.PNG',
      tags: ['Modern', 'Design', 'Creative']
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

  scrollNext(): void {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 350;
    const direction = this.languageService.direction() === 'rtl' ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: direction, behavior: 'smooth' });
  }
}