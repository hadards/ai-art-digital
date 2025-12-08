import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { SERVICES_DATA } from '../../data/content.data';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, SectionHeaderComponent],
  template: `
    <section id="services" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-800 dark:to-midnight-700">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Featured Services -->
        <div *ngIf="featuredServices.length > 0" class="mt-16">
          <h3 class="text-2xl font-bold text-center text-slate-900 dark:text-slate-100 dark:text-glow mb-8">
            {{ featuredTitle() }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <app-service-card
              *ngFor="let service of featuredServices; trackBy: trackByServiceId"
              [service]="service"
              class="transform transition-all duration-300">
            </app-service-card>
          </div>
        </div>

        <!-- All Services -->
        <div>
          <h3 *ngIf="featuredServices.length > 0" class="text-2xl font-bold text-center text-slate-900 dark:text-slate-100 dark:text-glow mb-8">
            {{ allServicesTitle() }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-service-card
              *ngFor="let service of regularServices; trackBy: trackByServiceId"
              [service]="service"
              class="transform transition-all duration-300">
            </app-service-card>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-20 text-center">
          <div class="glass border border-slate-200 dark:border-violet-500/20 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto pulse-glow gradient-card-dark">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 dark:text-glow mb-4">
              {{ customProjectTitle() }}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {{ customProjectDescription() }}
            </p>
            <button
              (click)="onCustomProjectClick()"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-violet-500 dark:to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-artistic pulse-glow">
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
  languageService = inject(LanguageService);
  services = SERVICES_DATA;

  get featuredServices() {
    return this.services.filter(service => service.featured);
  }

  get regularServices() {
    return this.services.filter(service => !service.featured);
  }

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'השירותים שלי',
      en: 'My Services'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'פתרונות דיגיטליים מותאמים אישית לכל צורך - מאתרים ועד עיצובים יצירתיים',
      en: 'Custom digital solutions for every need - from websites to creative designs'
    });
  }

  featuredTitle(): string {
    return this.languageService.getTranslation({
      he: 'השירותים הפופולריים ביותר',
      en: 'Most Popular Services'
    });
  }

  allServicesTitle(): string {
    return this.languageService.getTranslation({
      he: 'שירותים נוספים',
      en: 'Additional Services'
    });
  }

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

  onCustomProjectClick(): void {
    // This will be implemented with WhatsApp integration
    console.log('Custom project WhatsApp click');
  }

  trackByServiceId(index: number, service: any): string {
    return service.id;
  }
}