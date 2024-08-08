import { Component, inject } from '@angular/core';
import { ThemeSwitchComponent } from '../../theme-switch/theme-switch.component';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'top-nav',
  standalone: true,
  imports: [ThemeSwitchComponent, ThemeSwitchComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.less',
})
export class TopNavComponent {
  themeService: ThemeService = inject(ThemeService);
}
