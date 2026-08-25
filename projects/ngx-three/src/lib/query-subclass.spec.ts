import { Component, ContentChild, Directive, forwardRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

/**
 * Regression guard for camera (and any base-class) content queries.
 *
 * Since Angular 16+/22 a `@ContentChild(BaseType)` query does NOT match a
 * projected component that merely *extends* `BaseType`. It only matches when
 * that component explicitly provides the base type via `useExisting`.
 *
 * ngx-three relies on `@ContentChild(ThCamera)` (in ThView) resolving a
 * projected `<th-perspectiveCamera>` (ThPerspectiveCamera extends ThCamera).
 * Therefore every camera component MUST provide the `ThCamera` token, exactly
 * like the pattern reproduced below. If this test fails, camera resolution -
 * and hence rendering - is broken for every example.
 */

@Directive({ selector: 'th-unrelated-token' })
class UnrelatedToken {}

@Component({ selector: 'th-base-cmp', template: '<ng-content/>' })
class BaseCmp {}

@Component({
  selector: 'th-derived-without-provider',
  template: '<ng-content/>',
  providers: [{ provide: UnrelatedToken, useExisting: forwardRef(() => DerivedWithoutProvider) }],
})
class DerivedWithoutProvider extends BaseCmp {}

@Component({
  selector: 'th-derived-with-provider',
  template: '<ng-content/>',
  providers: [{ provide: BaseCmp, useExisting: forwardRef(() => DerivedWithProvider) }],
})
class DerivedWithProvider extends BaseCmp {}

@Component({
  selector: 'th-query-host',
  template: '<ng-content/>',
})
class QueryHost {
  public resolved?: BaseCmp;

  @ContentChild(BaseCmp)
  public set queried(v: BaseCmp | undefined) {
    this.resolved = v;
  }
}

@Component({
  selector: 'th-outer-without',
  template: '<th-query-host><th-derived-without-provider/></th-query-host>',
  imports: [QueryHost, DerivedWithoutProvider],
})
class OuterWithout {}

@Component({
  selector: 'th-outer-with',
  template: '<th-query-host><th-derived-with-provider/></th-query-host>',
  imports: [QueryHost, DerivedWithProvider],
})
class OuterWith {}

describe('Base-class ContentChild resolution (camera provider requirement)', () => {
  it('does NOT match a subclass that lacks a base-type provider', () => {
    TestBed.configureTestingModule({ imports: [OuterWithout] });
    const fixture = TestBed.createComponent(OuterWithout);
    fixture.detectChanges();
    const host = fixture.debugElement.children[0].componentInstance as QueryHost;
    expect(host.resolved).toBeFalsy();
  });

  it('matches a subclass that provides the base type via useExisting', () => {
    TestBed.configureTestingModule({ imports: [OuterWith] });
    const fixture = TestBed.createComponent(OuterWith);
    fixture.detectChanges();
    const host = fixture.debugElement.children[0].componentInstance as QueryHost;
    expect(host.resolved).toBeInstanceOf(DerivedWithProvider);
  });
});
