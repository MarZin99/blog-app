import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../../theme-switch/theme-switch.component';

@Component({
  selector: 'top-nav',
  standalone: true,
  imports: [ThemeSwitchComponent, ThemeSwitchComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.less',
})
export class TopNavComponent {}
