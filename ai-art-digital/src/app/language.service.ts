import { Injectable, signal } from '@angular/core';

export type Language = 'he' | 'en';
export type Direction = 'rtl' | 'ltr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('he');
  private currentDirection = signal<Direction>('rtl');

  readonly language = this.currentLanguage.asReadonly();
  readonly direction = this.currentDirection.asReadonly();

  constructor() {
    this.loadSavedLanguage();
    // Ensure direction is set immediately
    this.updateDocumentDirection();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.currentDirection.set(lang === 'he' ? 'rtl' : 'ltr');
    this.saveLanguagePreference(lang);
    this.updateDocumentDirection();
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage() === 'he' ? 'en' : 'he';
    this.setLanguage(newLang);
  }

  getTranslation<T>(translations: { he: T; en: T }): T {
    return translations[this.currentLanguage()];
  }

  private loadSavedLanguage(): void {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && (savedLang === 'he' || savedLang === 'en')) {
      this.setLanguage(savedLang);
    }
  }

  private saveLanguagePreference(lang: Language): void {
    localStorage.setItem('preferred-language', lang);
  }

  private updateDocumentDirection(): void {
    document.documentElement.setAttribute('dir', this.currentDirection());
    document.documentElement.setAttribute('lang', this.currentLanguage());
  }
}