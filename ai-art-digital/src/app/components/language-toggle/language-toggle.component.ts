import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleLanguage()"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 border border-slate-200 hover:border-slate-300"
      [attr.aria-label]="ariaLabel()">
      <span class="font-semibold">
        {{ displayText() }}
      </span>
      <svg [class]="'w-4 h-4 ' + (languageService.direction() === 'rtl' ? 'mr-1' : 'ml-1')" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
      </svg>
    </button>
  `
})
export class LanguageToggleComponent {
  languageService = inject(LanguageService);

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  displayText(): string {
    return this.languageService.language() === 'he' ? 'EN' : 'עב';
  }

  ariaLabel(): string {
    const currentLang = this.languageService.language();
    if (currentLang === 'he') {
      return 'Switch to English';
    } else {
      return 'עבור לעברית';
    }
  }
}