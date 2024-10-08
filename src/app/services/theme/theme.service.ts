import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<boolean>(true);

  updateThemeMode() {
    this.themeSignal.update((value) => (value === true ? false : true));
  }
}
