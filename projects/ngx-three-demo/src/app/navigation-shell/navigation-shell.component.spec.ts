import { LayoutModule } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavigationShellComponent } from './navigation-shell.component';
import { EditorService } from '../code/EditorService';
import { RouterModule } from '@angular/router';

describe('NavigationShellComponent', () => {
  let component: NavigationShellComponent;
  let fixture: ComponentFixture<NavigationShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        NavigationShellComponent,
      ],
      providers: [EditorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
