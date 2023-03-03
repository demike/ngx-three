import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-basic-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <th-canvas>
        <th-scene>
            <th-mesh>
                <th-boxGeometry/>
                <th-meshBasicMaterial [args]="{color: 'purple'}"/>
            </th-mesh>
            <th-ambientLight/>
            <th-perspectiveCamera [args]="[75, 2, 0.1, 1000]" [position]="[1,1,5]"/>
        </th-scene>
      </th-canvas>
    `,
  })
  export class BasicExampleComponent {}
