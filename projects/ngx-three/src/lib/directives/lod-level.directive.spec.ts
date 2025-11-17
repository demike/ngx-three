import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LODLevelDirective } from './lod-level.directive';
import { ThLOD, ThObject3D } from '../generated';
import { LOD, Scene } from 'three';

@Component({
  template: `
    <th-lOD>
      <th-object3D [lodLevel] />
      <th-object3D [lodLevel]="{ distance: 5 }" />
      <th-object3D [lodLevel]="{ distance: bar }" *ngIf="foo" />
    </th-lOD>
  `,
  imports: [ThLOD, ThObject3D, LODLevelDirective, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @Input() foo = true;
  @Input() bar = 10;
}

describe('lodLevel directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let lod: LOD;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: ThObject3D, useValue: { objRef: new Scene() } }],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const thLOD: ThLOD = fixture.debugElement.query(By.directive(ThLOD)).componentInstance;
    lod = thLOD.objRef!;
  });

  it('should create an instance', () => {
    expect(lod).toBeTruthy();
  });

  it('should have 3 levels', () => {
    expect(lod.levels).toHaveSize(3);
  });

  it('should remove level', () => {
    fixture.componentRef.setInput('foo', false);
    fixture.detectChanges();
    expect(lod.levels).toHaveSize(2);
  });

  it('should change level', () => {
    fixture.componentRef.setInput('bar', 15);
    fixture.detectChanges();
    expect(lod.levels).toHaveSize(3);
    const level = lod.levels.find((l) => l.distance === 15);
    expect(level).toBeTruthy();
  });
});
