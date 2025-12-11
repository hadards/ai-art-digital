import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';

// Layouts
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

// Features
import { HeroComponent } from './features/hero/hero.component';
import { BenefitsComponent } from './features/benefits/benefits.component';
import { ServicesComponent } from './features/services/services.component';
import { AboutComponent } from './features/about/about.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { ContactComponent } from './features/contact/contact.component';

// Shared Components
import { WhatsAppFabComponent } from './components/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // Layouts
    HeaderComponent,
    FooterComponent,
    // Features
    HeroComponent,
    BenefitsComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    ResourcesComponent,
    ArticlesComponent,
    ContactComponent,
    // Shared
    WhatsAppFabComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Navigation -->
      <app-header *ngIf="isHomePage" />

      <!-- Main Content -->
      <main class="flex-grow">
        <!-- Home Page Sections -->
        <ng-container *ngIf="isHomePage">
          <app-hero />
          <app-about />
          <app-portfolio />
          <app-resources />
          <app-services />
          <app-benefits />
          <app-articles />
          <app-contact />
        </ng-container>

        <!-- Routed Pages -->
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <app-footer />

      <!-- WhatsApp FAB -->
      <app-whatsapp-fab *ngIf="isHomePage" />
    </div>
  `
})
export class App {
  title = 'ai-art-digital';
  isHomePage = true;

  private themeService = inject(ThemeService);
  private router = inject(Router);

  constructor() {
    // Track route changes to determine if we're on home page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.url === '/' || event.url === '';
    });
  }
}
