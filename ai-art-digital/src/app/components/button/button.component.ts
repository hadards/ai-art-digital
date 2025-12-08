import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

export type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="handleClick($event)"
      [type]="type"
    >
      <span *ngIf="loading" [class]="'animate-spin ' + (languageService.direction() === 'rtl' ? 'ml-2' : 'mr-2')">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
      <span [class]="iconClasses">
        <ng-content select="[slot=icon]"></ng-content>
      </span>
      <span>
        <ng-content></ng-content>
      </span>
    </button>
  `
})
export class ButtonComponent {
  languageService = inject(LanguageService);

  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() clicked = new EventEmitter<Event>();

  private getVariantClasses(): string {
    const variants = {
      primary: 'bg-primary-600 hover:bg-primary-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg hover:shadow-xl dark:shadow-violet-500/25 transform hover:scale-105 btn-artistic',
      secondary: 'bg-slate-100 hover:bg-slate-200 dark:bg-midnight-700 dark:hover:bg-midnight-600 text-slate-900 dark:text-slate-100 shadow-md hover:shadow-lg dark:shadow-violet-500/10 btn-artistic',
      whatsapp: 'bg-accent-500 hover:bg-accent-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl dark:shadow-emerald-500/25 transform hover:scale-105 btn-artistic',
      outline: 'border-2 border-primary-600 dark:border-violet-500 text-primary-600 dark:text-violet-400 hover:bg-primary-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white glass btn-artistic'
    };
    return variants[this.variant];
  }

  private getSizeClasses(): string {
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    };
    return sizes[this.size];
  }

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-100 dark:focus:ring-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
    const widthClass = this.fullWidth ? 'w-full' : '';

    return [
      baseClasses,
      this.getVariantClasses(),
      this.getSizeClasses(),
      widthClass
    ].filter(Boolean).join(' ');
  }

  get iconClasses(): string {
    return this.size === 'sm' ? '[&>*]:w-4 [&>*]:h-4' : '[&>*]:w-5 [&>*]:h-5';
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}