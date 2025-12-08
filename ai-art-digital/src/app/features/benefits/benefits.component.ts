import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { CONTENT_DATA } from '../../data/content.data';
import { BenefitCardComponent } from '../../components/benefit-card/benefit-card.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, BenefitCardComponent, SectionHeaderComponent],
  template: `
    <section class="py-20 bg-white dark:bg-gradient-to-br dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <app-section-header
          [title]="sectionTitle()"
          [subtitle]="sectionSubtitle()"
          [centered]="true"
          size="md">
        </app-section-header>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <app-benefit-card
            *ngFor="let benefit of benefits; trackBy: trackByIndex"
            [title]="languageService.getTranslation(benefit.title)"
            [description]="languageService.getTranslation(benefit.description)"
            [icon]="getIconForBenefit(benefit)"
            class="transform transition-all duration-300 hover:scale-105">
          </app-benefit-card>
        </div>

        <!-- Stats Row -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div class="p-6 glass rounded-2xl border border-slate-100 dark:border-violet-500/20 pulse-glow">
            <div class="text-4xl font-bold text-primary-600 dark:text-violet-400 mb-2 text-glow">20+</div>
            <div class="text-slate-600 dark:text-slate-300">{{ yearsExperienceText() }}</div>
          </div>
          <div class="p-6 glass rounded-2xl border border-slate-100 dark:border-emerald-500/20 pulse-glow">
            <div class="text-4xl font-bold text-accent-600 dark:text-emerald-400 mb-2 text-glow">Tech</div>
            <div class="text-slate-600 dark:text-slate-300">{{ leadershipRoleText() }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BenefitsComponent {
  languageService = inject(LanguageService);
  benefits = CONTENT_DATA.benefits;

  sectionTitle(): string {
    return this.languageService.getTranslation({
      he: 'למה לבחור בי?',
      en: 'Why Choose Me?'
    });
  }

  sectionSubtitle(): string {
    return this.languageService.getTranslation({
      he: 'רקע טכנולוגי ייחודי שמבטיח פתרונות דיגיטליים איכותיים ואמינים',
      en: 'Unique technological background ensuring quality and reliable digital solutions'
    });
  }

  getIconForBenefit(benefit: any): string {
    const icons = {
      'Full-Stack Development': '💻',
      'Cloud Architecture': '☁️',
      'Enterprise Experience': '🏢',
      'Data Analytics': '📊'
    };

    const currentLang = this.languageService.language();
    const title = benefit.title[currentLang];
    return icons[title as keyof typeof icons] || '💻';
  }

  yearsExperienceText(): string {
    return this.languageService.getTranslation({
      he: 'שנות ניסיון בטכנולוגיה',
      en: 'Years in Technology'
    });
  }

  enterpriseCompaniesText(): string {
    return this.languageService.getTranslation({
      he: 'חברות Enterprise',
      en: 'Enterprise Companies'
    });
  }

  leadershipRoleText(): string {
    return this.languageService.getTranslation({
      he: 'Leadership Role',
      en: 'Leadership Role'
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}