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
    console.log('Guardado en el localStorage');

    localStorage.setItem('ajusts', JSON.stringify(this.ajusts));
  }

  /**
   * Sets ajusts
   */
  setAjusts() {
    if (localStorage.getItem('ajusts')) {
      this.ajusts = JSON.parse(localStorage.getItem('ajusts'));
      console.log('localStorage cargado');
      this.applyTheme(this.ajusts.theme);
    } else {
      console.log('Usando valores por defecto');
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
interface AjustsInterface {
  themeUrl: string;
  theme: string;
}
