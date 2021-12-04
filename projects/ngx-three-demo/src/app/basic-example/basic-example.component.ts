import { Component } from '@angular/core';

@Component({
    selector: 'app-basic-example',
    template: `
      <th-canvas>
        <th-scene>
            <th-mesh>
                <th-boxGeometry></th-boxGeometry>
                <th-meshBasicMaterial
                    [args]="[{color: 'purple'}]"
                ></th-meshBasicMaterial>
            </th-mesh>
            <th-ambientLight> </th-ambientLight>
            <th-perspectiveCamera [args]="[75, 2, 0.1, 1000]" [position]="[1,1,5]"></th-perspectiveCamera>
        </th-scene>
      </th-canvas>
    `,
  })
  export class BasicExampleComponent {}
