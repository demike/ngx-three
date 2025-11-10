import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationShellComponent } from './navigation-shell/navigation-shell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavigationShellComponent],
})
export class AppComponent {
  title = 'ngx-three-demo';
}
