import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajusts: AjustsInterface = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };
  constructor(@Inject(DOCUMENT) private document) {
    this.setAjusts();
  }

  /**
   * Saves ajusts
   */
  saveAjusts() {
    localStorage.setItem('ajusts', JSON.stringify(this.ajusts));
  }

  /**
   * Sets ajusts
   */
  setAjusts() {
    if (localStorage.getItem('ajusts')) {
      this.ajusts = JSON.parse(localStorage.getItem('ajusts'));
      this.applyTheme(this.ajusts.theme);
    } else {
      this.applyTheme(this.ajusts.theme);
    }
  }

  /**
   * Applys theme
   * @param theme
   */
  applyTheme(theme: string) {
    let url = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', url);
    this.ajusts.theme = theme;
    this.ajusts.themeUrl = url;
    this.saveAjusts();
  }
}

/**
 * Ajusts interface
 */
interface AjustsInterface {
  themeUrl: string;
  theme: string;
}
