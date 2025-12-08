import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section class="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50 dark:bg-gradient-to-br dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-850">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Featured Showcase Grid -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Large Featured Item -->
          <div class="lg:col-span-2 lg:row-span-2 group">
            <div class="relative h-96 lg:h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl overflow-hidden shadow-2xl">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{{ featuredTitle() }}</h3>
                  <p class="text-white/80 text-sm">featured-masterpiece-1.jpg</p>
                </div>
              </div>
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                  {{ featuredBadge() }}
                </span>
              </div>
            </div>
          </div>

          <!-- Small Items Grid -->
          <div class="space-y-6 lg:col-span-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <!-- Item 1 -->
              <div class="group">
                <div class="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center text-white">
                      <div class="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 11H7v4h2v-4zm4 0h-2v4h2v-4zm4 0h-2v4h2v-4zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <p class="text-xs">character-design-1.jpg</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="group">
                <div class="relative h-48 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center text-white">
                      <div class="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p class="text-xs">landscape-art-1.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Row -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Item 3 -->
              <div class="group">
                <div class="relative h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center text-white">
                      <div class="w-8 h-8 mx-auto mb-1 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <p class="text-xs">abstract-1.jpg</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="group">
                <div class="relative h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center text-white">
                      <div class="w-8 h-8 mx-auto mb-1 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p class="text-xs">portrait-1.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics Row -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div class="text-slate-600">{{ artworksCreatedText() }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-accent-600 mb-2">50+</div>
            <div class="text-slate-600">{{ happyClientsText() }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">10+</div>
            <div class="text-slate-600">{{ artStylesText() }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-orange-600 mb-2">24h</div>
            <div class="text-slate-600">{{ averageDeliveryText() }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ShowcaseComponent {
  languageService = inject(LanguageService);

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'מבחר עבודותיי',
      en: 'My Latest Works'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'יצירות AI מקוריות בסגנונות ונושאים מגוונים - מפנטזיה ועד ריאליזם',
      en: 'Original AI creations in various styles and themes - from fantasy to realism'
    });
  }

  featuredTitle(): string {
    return this.languageService.getTranslation({
      he: 'יצירת המופת שלי',
      en: 'My Masterpiece'
    });
  }

  featuredBadge(): string {
    return this.languageService.getTranslation({
      he: 'מומלץ',
      en: 'Featured'
    });
  }

  artworksCreatedText(): string {
    return this.languageService.getTranslation({
      he: 'יצירות נוצרו',
      en: 'Artworks Created'
    });
  }

  happyClientsText(): string {
    return this.languageService.getTranslation({
      he: 'לקוחות מרוצים',
      en: 'Happy Clients'
    });
  }

  artStylesText(): string {
    return this.languageService.getTranslation({
      he: 'סגנונות אמנות',
      en: 'Art Styles'
    });
  }

  averageDeliveryText(): string {
    return this.languageService.getTranslation({
      he: 'זמן משלוח ממוצע',
      en: 'Average Delivery'
    });
  }
}