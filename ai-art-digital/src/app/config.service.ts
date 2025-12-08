import { Injectable } from '@angular/core';
import { SITE_CONFIG, SiteConfig } from './config/site.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: SiteConfig = SITE_CONFIG;

  getConfig(): SiteConfig {
    return { ...this.config };
  }

  getSetting<K extends keyof SiteConfig>(key: K): SiteConfig[K] {
    return this.config[key];
  }

  updateSetting<K extends keyof SiteConfig>(key: K, value: SiteConfig[K]): void {
    this.config = { ...this.config, [key]: value };
  }

  isFeatureEnabled(feature: keyof Pick<SiteConfig, 'showPricing' | 'showAboutMe' | 'showPortfolio' | 'showTestimonials' | 'enableDarkMode' | 'enableAnalytics'>): boolean {
    return this.config[feature] as boolean;
  }
}