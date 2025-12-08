import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="relative p-2 rounded-lg border border-slate-200 dark:border-violet-500/30 bg-white/80 dark:bg-midnight-800/80 hover:bg-slate-50 dark:hover:bg-violet-500/20 transition-all duration-300 glass pulse-glow group"
      [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">

      <!-- Sun icon (visible in dark mode) -->
      <svg
        class="w-5 h-5 text-yellow-500 transition-all duration-300"
        [class.opacity-100]="themeService.isDarkMode()"
        [class.opacity-0]="!themeService.isDarkMode()"
        [class.rotate-0]="themeService.isDarkMode()"
        [class.rotate-180]="!themeService.isDarkMode()"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
      </svg>

      <!-- Moon icon (visible in light mode) -->
      <svg
        class="w-5 h-5 text-slate-700 dark:text-violet-400 absolute top-2 left-2 transition-all duration-300"
        [class.opacity-0]="themeService.isDarkMode()"
        [class.opacity-100]="!themeService.isDarkMode()"
        [class.rotate-180]="themeService.isDarkMode()"
        [class.rotate-0]="!themeService.isDarkMode()"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
      </svg>
    </button>
  `
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}