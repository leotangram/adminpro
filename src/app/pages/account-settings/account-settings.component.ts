import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';
import { link } from 'fs';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document,
    public settingsSetvice: SettingsService
  ) {}

  ngOnInit() {
    this.addCheck();
  }

  /**
   * Changes color
   * @param theme
   */
  changeColor(theme: string, link: any) {
    this.applyCheck(link);
    this.settingsSetvice.applyTheme(theme);
  }

  /**
   * Applys check
   * @param link
   */
  applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  addCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this.settingsSetvice.ajusts.theme;
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
