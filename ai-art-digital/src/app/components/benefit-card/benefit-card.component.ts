import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BenefitItem {
  title: { he: string; en: string };
  description: { he: string; en: string };
  icon?: string;
}

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group text-center p-6 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-midnight-800/80 dark:to-midnight-700/60 border border-slate-100 dark:border-violet-500/20 shadow-md hover:shadow-lg dark:shadow-violet-500/10 transition-all duration-300 hover:transform hover:-translate-y-1 gradient-card-dark pulse-glow">
      <!-- Icon -->
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-violet-500/20 dark:to-violet-600/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 pulse-glow">
        <div [innerHTML]="iconHtml" class="text-primary-600 dark:text-violet-400 text-2xl"></div>
      </div>

      <!-- Title -->
      <h3 class="font-bold text-slate-900 dark:text-slate-100 text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-violet-400 transition-colors">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  `
})
export class BenefitCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input() icon = '✨';

  get iconHtml(): string {
    // If it's an emoji, return as is
    if (/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(this.icon)) {
      return this.icon;
    }

    // Default to a sparkle if no valid icon
    return '✨';
  }
}