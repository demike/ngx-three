import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EXAMPLE_ROUTES } from '../app-routing.module';
import { EditorService } from '../code/EditorService';

@Component({
    selector: 'app-navigation-shell',
    templateUrl: './navigation-shell.component.html',
    styleUrls: ['./navigation-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
