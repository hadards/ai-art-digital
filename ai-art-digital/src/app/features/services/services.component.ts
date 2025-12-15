import { Component, inject } from '@angular/core';
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
                <div class="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">

                  <!-- Video -->
                  <div *ngIf="service.media?.type === 'video'" class="aspect-video bg-slate-900">
                    <video
                      [src]="service.media!.url"
                      class="w-full h-full object-cover"
                      autoplay
                      loop
                      muted
                      playsinline>
                    </video>
                  </div>

                  <!-- Image -->
                  <div *ngIf="service.media?.type === 'image'" class="aspect-video bg-slate-200 dark:bg-slate-800">
                    <img
                      [src]="service.media!.url"
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
export class ServicesComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly services: readonly ServiceItem[] = SERVICES_DATA;

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