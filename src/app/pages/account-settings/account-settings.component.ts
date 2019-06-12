import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit() {}

  /**
   * Changes color
   * @param theme
   */
  changeColor(theme: string, link: any) {
    console.log(theme);
    let url = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', url);
  }

  applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
