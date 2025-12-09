import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-12 text-center">
      <div *ngIf="badge" class="inline-flex items-center px-4 py-2 glass border border-primary-200 dark:border-violet-500/30 text-primary-700 dark:text-violet-200 rounded-full text-sm font-semibold mb-4 pulse-glow">
        <span [innerHTML]="badge"></span>
      </div>

      <h2 [class]="titleClasses">
        {{ title }}
      </h2>

      <p *ngIf="subtitle" [class]="subtitleClasses">
        {{ subtitle }}
      </p>
    </div>
  `
})
export class SectionHeaderComponent {
  languageService = inject(LanguageService);

  @Input() title = '';
  @Input() subtitle = '';
  @Input() badge = '';
  @Input() centered = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get titleClasses(): string {
    const sizes = {
      sm: 'text-2xl md:text-3xl',
      md: 'text-3xl md:text-4xl lg:text-5xl',
      lg: 'text-4xl md:text-5xl lg:text-6xl'
    };

    return `font-bold text-slate-900 dark:text-slate-100 dark:text-glow mb-6 leading-tight whitespace-nowrap overflow-hidden text-ellipsis ${sizes[this.size]}`;
  }

  get subtitleClasses(): string {
    const sizes = {
      sm: 'text-base md:text-lg',
      md: 'text-lg md:text-xl',
      lg: 'text-xl md:text-2xl'
    };

    const alignment = this.languageService.direction() === 'rtl' ? 'text-right' : 'text-left';

    return `text-slate-600 dark:text-slate-300 leading-relaxed ${sizes[this.size]} ${alignment}`;
  }
}