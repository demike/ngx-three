import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ThCamera, ThCanvas, ThScene } from 'ngx-three';
import { Camera, CanvasTexture, Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

@Component({
  selector: 'app-views-example',
  templateUrl: './views-example.component.html',
  styleUrls: ['./views-example.component.scss']
})
export class ViewsExampleComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public Math = Math;
  public canvasWidth = 128;
  public canvasHeight = 128;
  public mouseX = 0;
  public mouseY = 0;

  public shadowTexture?: CanvasTexture;

  public views = [
    {
      left: 0,
      bottom: 0,
      width: 0.5,
      height: 1.0,
      background: new Color(0.5, 0.5, 0.7),
      eye: [0, 300, 1800],
      up: [0, 1, 0],
      fov: 30,
      updateCamera: (camera: PerspectiveCamera, scene: Scene) => {
        this.updateSize();
        camera.position.x += this.mouseX * 0.05;
        camera.position.x = Math.max(Math.min(camera.position.x, 2000), -2000);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
      }
    },
    {
      left: 0.5,
      bottom: 0,
      width: 0.5,
      height: 0.5,
      background: new Color(0.7, 0.5, 0.5),
      eye: [0, 1800, 0],
      up: [0, 0, 1],
      fov: 45,
      updateCamera: (camera: PerspectiveCamera, _scene: Scene) => {
        this.updateSize();
        camera.position.x -= this.mouseX * 0.05;
        camera.position.x = Math.max(Math.min(camera.position.x, 2000), -2000);
        camera.lookAt(camera.position.clone().setY(0));
        camera.updateProjectionMatrix();
      }
    },
    {
      left: 0.5,
      bottom: 0.5,
      width: 0.5,
      height: 0.5,
      background: new Color(0.5, 0.7, 0.7),
      eye: [1400, 800, 1400],
      up: [0, 1, 0],
      fov: 60,
      updateCamera: (camera: PerspectiveCamera, scene: Scene) => {
        this.updateSize();
        camera.position.y -= this.mouseX * 0.05;
        camera.position.y = Math.max(Math.min(camera.position.y, 1600), -1600);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
      }
    }
  ];

  @ViewChild('thecanvas', { static: true })
  public canvas?: ThCanvas;

  constructor() {}

  ngOnInit(): void {
    if (!this.canvas || !this.canvas.rendererCanvas) {
      return;
    }
    this.shadowTexture = new CanvasTexture(this.canvas.rendererCanvas.nativeElement);
  }

  public animate(event: { renderer: WebGLRenderer; scene: ThScene; camera: ThCamera }) {
    /*
     this.updateSize();
    for (let view of this.views) {
      const view = views[ii];

      view.updateCamera(camera, scene, mouseX, mouseY);

      const left = Math.floor(this.canvasWidth * view.left);
      const bottom = Math.floor(this.canvasHeight * view.bottom);
      const width = Math.floor(this.canvasWidth * view.width);
      const height = Math.floor(this.canvasHeight * view.height);

      renderer.setViewport(left, bottom, width, height);
      renderer.setScissor(left, bottom, width, height);
      renderer.setScissorTest(true);
      renderer.setClearColor(view.background);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    }
*/
  }

  public updateSize() {
    if (!this.canvas || !this.canvas.rendererCanvas) {
      return;
    }

    this.canvasWidth = this.canvas.rendererCanvas.nativeElement.width;
    this.canvasHeight = this.canvas.rendererCanvas.nativeElement.height;
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(e: MouseEvent) {
    if (!this.canvas || !this.canvas.rendererCanvas) {
      return;
    }
    const rect = this.canvas.rendererCanvas.nativeElement.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left - rect.width / 2;
    this.mouseY = e.clientY - rect.right - rect.height / 2;
  }
}
