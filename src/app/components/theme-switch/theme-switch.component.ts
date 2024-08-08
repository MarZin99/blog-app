import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.less',
})
export class ThemeSwitchComponent {
  themeService: ThemeService = inject(ThemeService);

  toogleTheme() {
    this.themeService.updateThemeMode();
  }
}
