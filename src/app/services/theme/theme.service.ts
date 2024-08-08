import { Injectable, signal } from '@angular/core';
import { ThemeMode } from './theme.model';

export const storageKey = 'theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeModelSignal = signal<ThemeMode>('dark');

  updateThemeMode() {
    this.themeModelSignal.update((value) =>
      value === 'dark' ? 'light' : 'dark'
    );
  }
}
