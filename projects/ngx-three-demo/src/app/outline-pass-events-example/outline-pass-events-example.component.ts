import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { RaycasterEmitEvent, ThMesh, ThObject3D, ThOutlinePass } from 'ngx-three';
import { Color, MeshPhongMaterial, Vector2 } from 'three';
import GUI from 'lil-gui';

@Component({
  selector: 'app-outline-pass-events-example',
  templateUrl: './outline-pass-events-example.component.html',
  styleUrls: ['./outline-pass-events-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OutlinePassEventsExampleComponent implements OnInit {
  private elem = inject(ElementRef);

  protected outlinePassResolution = new Vector2(window.innerWidth, window.innerHeight);
  protected readonly meshData: { x: number; y: number; z: number; scale: number; color: Color }[] = [];

  public visibleEdgeColor = '#ffffff';
  public hiddenEdgeColor = '#190a05';
  public edgeStrength = 3;
  public edgeGlow = 0.5;
  public edgeThickness = 1.0;
  public pulsePeriod = 1;

  selected?: ThObject3D;

  @ViewChild('outlinePass', { static: true })
  outlinePass!: ThOutlinePass;

  constructor() {
    this.initGUI();
    this.initMeshData();
  }

  initGUI() {
    const gui = new GUI({ title: 'Settings', injectStyles: true, container: this.elem.nativeElement, autoPlace: true });
    gui.add(this, 'edgeStrength', 0.01, 10);
    gui.add(this, 'edgeGlow', 0.0, 2.0);
    gui.add(this, 'edgeThickness', 1, 4);
    gui.add(this, 'pulsePeriod', 0, 5);
    gui.addColor(this, 'visibleEdgeColor');
    gui.addColor(this, 'hiddenEdgeColor');
  }

  ngOnInit() {
    this.outlinePassResolution = new Vector2(window.innerWidth, window.innerHeight);
    if (this.outlinePass) {
      this.outlinePass.resolution = this.outlinePassResolution;
    }
  }

  private initMeshData() {
    for (let i = 0; i < 20; i++) {
      this.meshData.push({
        color: new Color().setHSL(Math.random(), 1.0, 0.3),
        x: Math.random() * 4 - 2,
        y: Math.random() * 4 - 2,
        z: Math.random() * 4 - 2,
        scale: Math.random() * 0.3 + 0.1,
      });
    }
  }

  onHover(event: RaycasterEmitEvent) {
    if (!event.component.objRef) {
      return;
    }

    this.outlinePass.selectedObjects = [event.component.objRef];
  }

  onBlur() {
    this.outlinePass.selectedObjects = [];
  }

  onPointerDown(event: RaycasterEmitEvent) {
    ((event.component as unknown as ThMesh).material as MeshPhongMaterial)?.color.set('#ff0000');
  }
}
