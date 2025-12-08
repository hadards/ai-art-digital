import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ShowcaseComponent } from './features/showcase/showcase.component';
import { ContactComponent } from './features/contact/contact.component';

// Shared Components
import { WhatsAppFabComponent } from './components/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // Layouts
    HeaderComponent,
    FooterComponent,
    // Features
    HeroComponent,
    BenefitsComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    ShowcaseComponent,
    ContactComponent,
    // Shared
    WhatsAppFabComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Navigation -->
      <app-header />

      <!-- Main Content -->
      <main class="flex-grow">
        <!-- Hero Section -->
        <app-hero />

        <!-- Showcase Section -->
        <app-showcase />

        <!-- Benefits Section -->
        <app-benefits />

        <!-- Services Section -->
        <app-services />

        <!-- About Section -->
        <app-about />

        <!-- Portfolio Section -->
        <app-portfolio />

        <!-- Contact Section -->
        <app-contact />
      </main>

      <!-- Footer -->
      <app-footer />

      <!-- WhatsApp FAB -->
      <app-whatsapp-fab />
    </div>
  `
})
export class App {
  title = 'ai-art-digital';

  private themeService = inject(ThemeService);
}
