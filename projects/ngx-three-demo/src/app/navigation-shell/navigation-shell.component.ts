import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EXAMPLE_ROUTES } from '../app-routing';
import { EditorService } from '../code/EditorService';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navigation-shell',
  templateUrl: './navigation-shell.component.html',
  styleUrls: ['./navigation-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatNavList,
    MatSidenavContent,
    MatIcon,
    RouterModule,
    AsyncPipe,
  ],
})
export class NavigationShellComponent {
  private breakpointObserver = inject(BreakpointObserver);
  readonly editorService = inject(EditorService);

  public routes = EXAMPLE_ROUTES;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );
}
