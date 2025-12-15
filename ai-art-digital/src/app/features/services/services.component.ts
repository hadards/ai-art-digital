import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { WhatsAppUtil } from '../../utils/whatsapp.util';
import { SERVICES_DATA } from '../../data/content.data';
import { ServiceItem } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="services" class="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-800 dark:to-midnight-700 overflow-hidden">

      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-primary-300/10 dark:from-violet-500/10 dark:to-violet-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-accent-200/20 to-accent-300/10 dark:from-emerald-500/10 dark:to-emerald-600/5 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Services with Media -->
        <div class="mt-16 space-y-16">
          <div *ngFor="let service of services; let i = index; trackBy: trackByServiceId"
               class="group">

            <!-- Service Container -->
            <div [class]="'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto ' + (i % 2 === 1 && languageService.direction() === 'ltr' ? 'lg:grid-flow-dense' : '')">

              <!-- Content Section -->
              <div [class]="'bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-violet-500/20 rounded-2xl p-8 shadow-lg ' + (i % 2 === 1 && languageService.direction() === 'ltr' ? 'lg:col-start-2' : '') + (i % 2 === 1 && languageService.direction() === 'rtl' ? 'lg:col-start-1' : '')">

                <!-- Title -->
                <h3 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {{ languageService.getTranslation(service.title) }}
                </h3>

                <!-- Description -->
                <p class="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {{ languageService.getTranslation(service.description) }}
                </p>

                <!-- Price & Delivery -->
                <div class="flex items-center gap-6 mb-6">
                  <div>
                    <div class="text-3xl font-bold text-primary-600 dark:text-violet-400">
                      {{ formatPrice(service) }}
                    </div>
                    <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {{ languageService.getTranslation({ he: 'מחיר', en: 'Price' }) }}
                    </div>
                  </div>
                  <div class="h-12 w-px bg-slate-300 dark:bg-slate-600"></div>
                  <div>
                    <div class="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {{ languageService.getTranslation(service.deliveryTime) }}
                    </div>
                    <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {{ languageService.getTranslation({ he: 'זמן אספקה', en: 'Delivery' }) }}
                    </div>
                  </div>
                </div>

                <!-- Includes -->
                <div class="mb-6">
                  <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wide">
                    {{ languageService.getTranslation({ he: 'כולל:', en: 'Includes:' }) }}
                  </h4>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li *ngFor="let item of languageService.getTranslation(service.includes)"
                        class="flex items-start text-sm text-slate-700 dark:text-slate-300">
                      <svg class="w-5 h-5 text-accent-600 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <button
                  (click)="onServiceClick(service)"
                  class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-violet-500 dark:to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.447"/>
                  </svg>
                  {{ languageService.getTranslation({ he: 'הזמן עכשיו', en: 'Order Now' }) }}
                </button>
              </div>

              <!-- Media Section -->
              <div [class]="'relative ' + (i % 2 === 1 && languageService.direction() === 'ltr' ? 'lg:col-start-1 lg:row-start-1' : '') + (i % 2 === 1 && languageService.direction() === 'rtl' ? 'lg:col-start-2' : '')">

                <!-- Gallery Carousel - Multiple Images with Stack Effect -->
                <div *ngIf="service.gallery && service.gallery.length > 0"
                     [class]="'relative ' + (service.id === 'baby-story' ? 'max-w-sm mx-auto' : '')"
                     (mouseenter)="pauseCarousel(service.id)"
                     (mouseleave)="resumeCarousel(service.id)">

                  <!-- Stacked Cards Background Effect - Old Paper Style -->
                  <div class="absolute inset-0 z-0">
                    <!-- Third card (furthest back) - Aged beige paper -->
                    <div [class]="'absolute inset-0 rounded-2xl transform -rotate-3 translate-y-3 opacity-60 shadow-lg ' + (languageService.direction() === 'rtl' ? '-translate-x-4' : 'translate-x-4')"
                         style="background: linear-gradient(135deg, #e8dcc4 0%, #d4c4a8 100%); border: 1px solid rgba(139, 115, 85, 0.3);"></div>
                    <!-- Second card - Vintage cream paper -->
                    <div [class]="'absolute inset-0 rounded-2xl transform rotate-2 translate-y-1.5 opacity-75 shadow-xl ' + (languageService.direction() === 'rtl' ? '-translate-x-2' : 'translate-x-2')"
                         style="background: linear-gradient(135deg, #f5ebe0 0%, #e8dcc4 100%); border: 1px solid rgba(139, 115, 85, 0.2);"></div>
                  </div>

                  <!-- Main Carousel Container -->
                  <div class="relative rounded-2xl overflow-hidden shadow-2xl group z-10">
                    <!-- Carousel Container -->
                    <div [class]="'relative bg-slate-200 dark:bg-slate-800 ' + (service.id === 'baby-story' ? 'aspect-[3/4]' : 'aspect-[4/3]')">
                      <!-- Images -->
                      <div *ngFor="let imageUrl of service.gallery; let imgIndex = index"
                           [class]="'absolute inset-0 transition-opacity duration-700 ease-in-out ' +
                                    (getActiveSlide(service.id) === imgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0')">
                        <img
                          [src]="imageUrl"
                          [alt]="languageService.getTranslation(service.title) + ' ' + (imgIndex + 1)"
                          class="w-full h-full object-contain">
                      </div>

                      <!-- Gradient Overlay -->
                      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none z-20"></div>
                    </div>

                    <!-- Navigation Dots -->
                  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                    <button *ngFor="let imageUrl of service.gallery; let dotIndex = index"
                            (click)="setActiveSlide(service.id, dotIndex)"
                            [class]="'w-2.5 h-2.5 rounded-full transition-all duration-300 ' +
                                     (getActiveSlide(service.id) === dotIndex
                                       ? 'bg-white w-8'
                                       : 'bg-white/50 hover:bg-white/75')"
                            [attr.aria-label]="'Go to slide ' + (dotIndex + 1)">
                    </button>
                  </div>

                  <!-- Navigation Arrows -->
                  <button (click)="previousSlide(service.id)"
                          class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 dark:from-violet-500 dark:to-purple-600 backdrop-blur-sm hover:from-primary-600 hover:to-purple-700 dark:hover:from-violet-600 dark:hover:to-purple-700 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg hover:shadow-xl hover:scale-110"
                          aria-label="Previous slide">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button (click)="nextSlide(service.id)"
                          class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-accent-500 dark:from-purple-600 dark:to-emerald-500 backdrop-blur-sm hover:from-purple-700 hover:to-accent-600 dark:hover:from-purple-700 dark:hover:to-emerald-600 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg hover:shadow-xl hover:scale-110"
                          aria-label="Next slide">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                  </div>
                </div>

                <!-- Single Media (Video or Image) -->
                <div *ngIf="!service.gallery && service.media" class="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">

                  <!-- Video -->
                  <div *ngIf="service.media.type === 'video'" class="aspect-video bg-slate-900">
                    <video
                      [src]="service.media.url"
                      class="w-full h-full object-cover"
                      autoplay
                      loop
                      muted
                      playsinline
                      preload="auto"
                      [muted]="true"
                      defaultMuted>
                    </video>
                  </div>

                  <!-- Image -->
                  <div *ngIf="service.media.type === 'image'" class="aspect-video bg-slate-200 dark:bg-slate-800">
                    <img
                      [src]="service.media.url"
                      [alt]="languageService.getTranslation(service.title)"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                  </div>

                  <!-- Featured Badge -->
                  <div *ngIf="service.featured" class="absolute top-4 right-4">
                    <span class="bg-gradient-to-r from-primary-500 to-accent-500 dark:from-violet-500 dark:to-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      {{ languageService.getTranslation({ he: 'מומלץ', en: 'Featured' }) }}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-20 text-center">
          <div class="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-violet-500/20 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              {{ customProjectTitle() }}
            </h3>
            <p class="text-slate-800 dark:text-slate-300 mb-6 leading-relaxed">
              {{ customProjectDescription() }}
            </p>
            <button
              (click)="onCustomProjectClick()"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-violet-500 dark:to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg [class.mr-2]="languageService.direction() === 'ltr'" [class.ml-2]="languageService.direction() === 'rtl'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.447"/>
              </svg>
              {{ customProjectCta() }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnDestroy {
  protected readonly languageService = inject(LanguageService);
  protected readonly services: readonly ServiceItem[] = SERVICES_DATA;

  // Carousel state
  private carouselStates = new Map<string, number>();
  private carouselIntervals = new Map<string, any>();

  constructor() {
    // Initialize carousel for services with galleries
    this.services.forEach(service => {
      if (service.gallery && service.gallery.length > 0) {
        this.carouselStates.set(service.id, 0);
        this.startAutoPlay(service.id, service.gallery.length);
      }
    });
  }

  ngOnDestroy() {
    // Clean up intervals
    this.carouselIntervals.forEach(interval => clearInterval(interval));
  }

  // Carousel methods
  getActiveSlide(serviceId: string): number {
    return this.carouselStates.get(serviceId) || 0;
  }

  setActiveSlide(serviceId: string, index: number): void {
    this.carouselStates.set(serviceId, index);
  }

  nextSlide(serviceId: string): void {
    const service = this.services.find(s => s.id === serviceId);
    if (service?.gallery) {
      const current = this.getActiveSlide(serviceId);
      const next = (current + 1) % service.gallery.length;
      this.setActiveSlide(serviceId, next);
    }
  }

  previousSlide(serviceId: string): void {
    const service = this.services.find(s => s.id === serviceId);
    if (service?.gallery) {
      const current = this.getActiveSlide(serviceId);
      const prev = current === 0 ? service.gallery.length - 1 : current - 1;
      this.setActiveSlide(serviceId, prev);
    }
  }

  pauseCarousel(serviceId: string): void {
    const interval = this.carouselIntervals.get(serviceId);
    if (interval) {
      clearInterval(interval);
      this.carouselIntervals.delete(serviceId);
    }
  }

  resumeCarousel(serviceId: string): void {
    const service = this.services.find(s => s.id === serviceId);
    if (service?.gallery) {
      this.startAutoPlay(serviceId, service.gallery.length);
    }
  }

  private startAutoPlay(serviceId: string, galleryLength: number): void {
    // Clear existing interval if any
    this.pauseCarousel(serviceId);

    // Start new interval (change slide every 4 seconds)
    const interval = setInterval(() => {
      this.nextSlide(serviceId);
    }, 4000);

    this.carouselIntervals.set(serviceId, interval);
  }

  // Section translations
  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'השירותים שלי',
      en: 'My Services'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'פתרונות דיגיטליים מותאמים אישית לכל צורך - מדפי נחיתה ועד עיצובים יצירתיים',
      en: 'Custom digital solutions for every need - from websites to creative designs'
    });
  }

  // Custom project section translations
  customProjectTitle(): string {
    return this.languageService.getTranslation({
      he: 'יש לך רעיון מיוחד?',
      en: 'Have a Special Idea?'
    });
  }

  customProjectDescription(): string {
    return this.languageService.getTranslation({
      he: 'לא מצאת את מה שאתה מחפש? בוא נדבר על הפרויקט שלך ונמצא פתרון מותאם אישית.',
      en: 'Didn\'t find what you\'re looking for? Let\'s talk about your project and find a custom solution.'
    });
  }

  customProjectCta(): string {
    return this.languageService.getTranslation({
      he: 'בוא נדבר על הפרויקט שלך',
      en: 'Let\'s Discuss Your Project'
    });
  }

  // Helper methods
  formatPrice(service: ServiceItem): string {
    return WhatsAppUtil.formatPrice(service.priceRange, this.languageService.language());
  }

  trackByServiceId(_index: number, service: ServiceItem): string {
    return service.id;
  }

  // Event handlers
  onServiceClick(service: ServiceItem): void {
    // TODO: Implement WhatsApp integration for service orders
    console.log('Service click:', service.id);
  }

  onCustomProjectClick(): void {
    // TODO: Implement WhatsApp integration for custom projects
    console.log('Custom project WhatsApp click');
  }
}