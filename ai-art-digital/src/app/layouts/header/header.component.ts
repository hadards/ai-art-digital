import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LanguageService } from '../../language.service';
import { LanguageToggleComponent } from '../../components/language-toggle/language-toggle.component';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent, ThemeToggleComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-violet-500/20 shadow-sm overflow-visible">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 overflow-visible">

          <!-- Logo/Brand -->
          <div class="flex-shrink-0 overflow-visible relative z-50">
            <a href="#" class="flex items-center gap-2 group">
              <img src="/assets/images/logo.png"
                   alt="ARTech Logo"
                   class="h-24 w-24 object-contain transition-transform group-hover:scale-110 -mb-4 mt-4" />
              <span class="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-violet-400 transition-colors text-glow">
                {{ brandName() }}
              </span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div [class]="navClasses">
              <a *ngFor="let item of navigationItems()"
                 [href]="'#' + item.anchor"
                 class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-violet-500/10">
                {{ item.label }}
              </a>
            </div>
          </div>

          <!-- Theme & Language Toggles -->
          <div class="flex items-center space-x-4">
            <app-theme-toggle />
            <app-language-toggle />

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button
                (click)="toggleMobileMenu()"
                class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-violet-500/10 transition-colors"
                [attr.aria-label]="mobileMenuAriaLabel()">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path *ngIf="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  <path *ngIf="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div *ngIf="mobileMenuOpen"
             class="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-violet-500/20 py-4"
             [@slideDown]="mobileMenuOpen">
          <div [class]="mobileNavClasses">
            <a *ngFor="let item of navigationItems()"
               [href]="'#' + item.anchor"
               (click)="closeMobileMenu()"
               class="block text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 px-3 py-3 text-base font-medium hover:bg-slate-100 dark:hover:bg-violet-500/10 rounded-md transition-colors">
              {{ item.label }}
            </a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Spacer for fixed header -->
    <div class="h-16"></div>
  `,
  animations: [
    trigger('slideDown', [
      state('true', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition('false => true', [
        animate('300ms ease-out')
      ]),
      transition('true => false', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class HeaderComponent {
  languageService = inject(LanguageService);
  mobileMenuOpen = false;

  brandName(): string {
    return this.languageService.getTranslation({
      he: 'ARTech',
      en: 'ARTech'
    });
  }

  navigationItems() {
    return this.languageService.getTranslation({
      he: [
        { label: 'שירותים', anchor: 'services' },
        { label: 'אודותיי', anchor: 'about' },
        { label: 'תיק עבודות', anchor: 'portfolio' },
        { label: 'מאמרים', anchor: 'articles' },
        { label: 'צור קשר', anchor: 'contact' }
      ],
      en: [
        { label: 'Services', anchor: 'services' },
        { label: 'About', anchor: 'about' },
        { label: 'Portfolio', anchor: 'portfolio' },
        { label: 'Articles', anchor: 'articles' },
        { label: 'Contact', anchor: 'contact' }
      ]
    });
  }

  get navClasses(): string {
    const baseClasses = 'flex items-center space-x-4';
    return this.languageService.direction() === 'rtl'
      ? 'flex items-center space-x-reverse space-x-4'
      : baseClasses;
  }

  get mobileNavClasses(): string {
    return this.languageService.direction() === 'rtl'
      ? 'space-y-1 text-right'
      : 'space-y-1 text-left';
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  mobileMenuAriaLabel(): string {
    return this.languageService.getTranslation({
      he: 'פתח תפריט ניווט',
      en: 'Open navigation menu'
    });
  }
}