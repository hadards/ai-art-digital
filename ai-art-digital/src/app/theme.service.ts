import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'theme-preference';

  isDarkMode = signal<boolean>(true); // Default to dark mode for artistic design

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();

      effect(() => {
        this.updateDocumentClass();
        this.savePreference();
      });
    }
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey);

    if (savedTheme !== null) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      // Default to dark mode for artistic design
      this.isDarkMode.set(true);
    }

    this.updateDocumentClass();
  }

  private updateDocumentClass(): void {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.documentElement;

      if (this.isDarkMode()) {
        htmlElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    }
  }

  private savePreference(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, this.isDarkMode() ? 'dark' : 'light');
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }
}