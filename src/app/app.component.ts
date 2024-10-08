import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './components/navigation/top-nav/top-nav.component';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'blog-app';
  themeService: ThemeService = inject(ThemeService);
}
