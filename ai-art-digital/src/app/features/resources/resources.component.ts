import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ConfigService } from '../../config.service';
import { RESOURCES_DATA } from '../../data/content.data';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

interface Resource {
  id: string;
  title: { he: string; en: string };
  description: { he: string; en: string };
  type: 'manual' | 'powerpoint' | 'document';
  fileUrl?: string;
  externalUrl?: string;
  thumbnail?: string;
  tags: string[];
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section *ngIf="configService.isFeatureEnabled('showResources')" id="resources" class="py-12 bg-white dark:bg-gradient-to-br dark:from-midnight-900 dark:via-midnight-850 dark:to-midnight-800 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="lg">
        </app-section-header>

        <!-- Resources Grid -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let resource of resources; trackBy: trackByResourceId"
               class="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 dark:border-violet-500/20">

            <!-- Thumbnail/Icon -->
            <div class="relative h-36 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
              <div class="text-5xl">
                {{ getIcon(resource.type) }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-violet-400 transition-colors">
                {{ languageService.getTranslation(resource.title) }}
              </h3>

              <p class="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                {{ languageService.getTranslation(resource.description) }}
              </p>

              <!-- Action Button -->
              <button
                (click)="onResourceClick(resource)"
                class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                {{ getActionLabel(resource) }}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ResourcesComponent {
  languageService = inject(LanguageService);
  configService = inject(ConfigService);
  resources: Resource[] = RESOURCES_DATA;

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'משאבים וסדנאות',
      en: 'Resources & Workshops'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'מדריכים, מצגות וחומרי הדרכה שיצרתי',
      en: 'Manuals, presentations, and training materials I created'
    });
  }

  getIcon(type: Resource['type']): string {
    const icons: Record<Resource['type'], string> = {
      manual: '📖',
      powerpoint: '📊',
      document: '📄'
    };
    return icons[type] || '📄';
  }

  getTypeLabel(type: Resource['type']): string {
    const labels: Record<Resource['type'], { he: string; en: string }> = {
      manual: { he: 'מדריך', en: 'Manual' },
      powerpoint: { he: 'מצגת', en: 'PowerPoint' },
      document: { he: 'מסמך', en: 'Document' }
    };
    return this.languageService.getTranslation(labels[type] || labels.document);
  }

  getActionLabel(resource: Resource): string {
    const hasLink = resource.fileUrl || resource.externalUrl;
    return this.languageService.getTranslation({
      he: hasLink ? 'הורד / צפה' : 'הורדה',
      en: hasLink ? 'Download / View' : 'Download'
    });
  }

  onResourceClick(resource: Resource): void {
    if (resource.fileUrl) {
      // Download file
      window.open(resource.fileUrl, '_blank');
    } else if (resource.externalUrl) {
      // Open external link
      window.open(resource.externalUrl, '_blank');
    } else {
      // Scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  trackByResourceId(index: number, resource: Resource): string {
    return resource.id;
  }
}
