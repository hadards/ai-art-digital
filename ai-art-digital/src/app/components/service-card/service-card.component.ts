import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../models/service.model';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { WhatsAppUtil } from '../../utils/whatsapp.util';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group bg-white dark:bg-gradient-to-br dark:from-midnight-800/80 dark:to-midnight-700/60 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-violet-500/10 transition-all duration-300 hover:transform hover:-translate-y-1 overflow-hidden border border-slate-100 dark:border-violet-500/20 gradient-card-dark pulse-glow">
      <!-- Featured Badge -->
      <div *ngIf="service.featured" class="absolute top-4 right-4 z-10">
        <span class="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-violet-500 dark:to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse pulse-glow">
          {{ languageService.getTranslation({ he: 'מומלץ', en: 'Featured' }) }}
        </span>
      </div>

      <div class="p-6 h-full flex flex-col">
        <!-- Title -->
        <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-violet-400 transition-colors">
          {{ languageService.getTranslation(service.title) }}
        </h3>

        <!-- Price -->
        <div *ngIf="configService.isFeatureEnabled('showPricing')" class="mb-4">
          <div class="text-2xl font-bold text-primary-600 dark:text-violet-400 text-glow">
            {{ formatPrice() }}
          </div>
          <div class="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-1">
            <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span>{{ languageService.getTranslation(service.deliveryTime) }}</span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-slate-600 dark:text-slate-300 mb-4 flex-grow leading-relaxed">
          {{ languageService.getTranslation(service.description) }}
        </p>

        <!-- Includes List -->
        <div class="mb-6">
          <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wide">
            {{ languageService.getTranslation({ he: 'כולל:', en: 'Includes:' }) }}
          </h4>
          <ul class="space-y-2">
            <li *ngFor="let item of languageService.getTranslation(service.includes)"
                class="flex items-start text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-4 h-4 text-accent-500 dark:text-emerald-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Simple CTA Text -->
        <div class="mt-auto">
          <div class="text-center py-3 glass rounded-xl border border-slate-200 dark:border-violet-500/30 hover:bg-slate-100 dark:hover:bg-violet-500/10 transition-colors pulse-glow">
            <span class="text-slate-600 dark:text-slate-300 text-sm font-medium">
              {{ availableText() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;

  languageService = inject(LanguageService);
  configService = inject(ConfigService);

  formatPrice(): string {
    return WhatsAppUtil.formatPrice(this.service.priceRange, this.languageService.language());
  }

  availableText(): string {
    return this.languageService.getTranslation({
      he: 'זמין להזמנה',
      en: 'Available to Order'
    });
  }
}