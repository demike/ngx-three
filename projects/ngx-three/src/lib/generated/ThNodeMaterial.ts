/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import ContextNode from 'three/src/nodes/core/ContextNode.js';
import MRTNode from 'three/src/nodes/core/MRTNode.js';
import Node from 'three/src/nodes/core/Node.js';
import LightsNode from 'three/src/nodes/lighting/LightsNode.js';
import { MaterialEventMap, NodeMaterial } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-nodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThNodeMaterial) },
  ],
})
export class ThNodeMaterial<
  T extends NodeMaterial = NodeMaterial,
  TARGS = [],
> extends ThMaterial<MaterialEventMap, T, TARGS> {
  public getType(): Type<NodeMaterial> {
    return NodeMaterial;
  }

  public static readonly type = NodeMaterial.type;

  public get isNodeMaterial(): boolean | undefined {
    return this._objRef?.isNodeMaterial;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set lights(value: boolean) {
    if (this._objRef) {
      this._objRef.lights = value;
    }
  }

  public get lights(): boolean | undefined {
    return this._objRef?.lights;
  }
  @Input()
  public set lightsNode(value: LightsNode | null) {
    if (this._objRef) {
      this._objRef.lightsNode = value;
    }
  }

  public get lightsNode(): (LightsNode | null) | undefined {
    return this._objRef?.lightsNode;
  }
  @Input()
  public set envNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.envNode = value;
    }
  }

  public get envNode(): (Node | null) | undefined {
    return this._objRef?.envNode;
  }
  @Input()
  public set aoNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.aoNode = value;
    }
  }

  public get aoNode(): (Node | null) | undefined {
    return this._objRef?.aoNode;
  }
  @Input()
  public set colorNode(
    value:
      | Node<'float'>
      | Node<'vec2'>
      | Node<'vec3'>
      | Node<'vec4'>
      | Node<'color'>
      | null,
  ) {
    if (this._objRef) {
      this._objRef.colorNode = value;
    }
  }

  public get colorNode():
    | (
        | Node<'float'>
        | Node<'vec2'>
        | Node<'vec3'>
        | Node<'vec4'>
        | Node<'color'>
        | null
      )
    | undefined {
    return this._objRef?.colorNode;
  }
  @Input()
  public set normalNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.normalNode = value;
    }
  }

  public get normalNode(): (Node | null) | undefined {
    return this._objRef?.normalNode;
  }
  @Input()
  public set opacityNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.opacityNode = value;
    }
  }

  public get opacityNode(): (Node | null) | undefined {
    return this._objRef?.opacityNode;
  }
  @Input()
  public set backdropNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.backdropNode = value;
    }
  }

  public get backdropNode(): (Node | null) | undefined {
    return this._objRef?.backdropNode;
  }
  @Input()
  public set backdropAlphaNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.backdropAlphaNode = value;
    }
  }

  public get backdropAlphaNode(): (Node | null) | undefined {
    return this._objRef?.backdropAlphaNode;
  }
  @Input()
  public set alphaTestNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.alphaTestNode = value;
    }
  }

  public get alphaTestNode(): (Node | null) | undefined {
    return this._objRef?.alphaTestNode;
  }
  @Input()
  public set maskNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.maskNode = value;
    }
  }

  public get maskNode(): (Node | null) | undefined {
    return this._objRef?.maskNode;
  }
  @Input()
  public set maskShadowNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.maskShadowNode = value;
    }
  }

  public get maskShadowNode(): (Node | null) | undefined {
    return this._objRef?.maskShadowNode;
  }
  @Input()
  public set positionNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.positionNode = value;
    }
  }

  public get positionNode(): (Node | null) | undefined {
    return this._objRef?.positionNode;
  }
  @Input()
  public set geometryNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.geometryNode = value;
    }
  }

  public get geometryNode(): (Node | null) | undefined {
    return this._objRef?.geometryNode;
  }
  @Input()
  public set depthNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.depthNode = value;
    }
  }

  public get depthNode(): (Node | null) | undefined {
    return this._objRef?.depthNode;
  }
  @Input()
  public set receivedShadowPositionNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.receivedShadowPositionNode = value;
    }
  }

  public get receivedShadowPositionNode(): (Node | null) | undefined {
    return this._objRef?.receivedShadowPositionNode;
  }
  @Input()
  public set castShadowPositionNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.castShadowPositionNode = value;
    }
  }

  public get castShadowPositionNode(): (Node | null) | undefined {
    return this._objRef?.castShadowPositionNode;
  }
  @Input()
  public set receivedShadowNode(value: (() => Node) | null) {
    if (this._objRef) {
      this._objRef.receivedShadowNode = value;
    }
  }

  public get receivedShadowNode(): ((() => Node) | null) | undefined {
    return this._objRef?.receivedShadowNode;
  }
  @Input()
  public set castShadowNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.castShadowNode = value;
    }
  }

  public get castShadowNode(): (Node | null) | undefined {
    return this._objRef?.castShadowNode;
  }
  @Input()
  public set outputNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.outputNode = value;
    }
  }

  public get outputNode(): (Node | null) | undefined {
    return this._objRef?.outputNode;
  }
  @Input()
  public set mrtNode(value: MRTNode | null) {
    if (this._objRef) {
      this._objRef.mrtNode = value;
    }
  }

  public get mrtNode(): (MRTNode | null) | undefined {
    return this._objRef?.mrtNode;
  }
  @Input()
  public set fragmentNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.fragmentNode = value;
    }
  }

  public get fragmentNode(): (Node | null) | undefined {
    return this._objRef?.fragmentNode;
  }
  @Input()
  public set vertexNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.vertexNode = value;
    }
  }

  public get vertexNode(): (Node | null) | undefined {
    return this._objRef?.vertexNode;
  }
  @Input()
  public set contextNode(value: ContextNode<unknown> | null) {
    if (this._objRef) {
      this._objRef.contextNode = value;
    }
  }

  public get contextNode(): (ContextNode<unknown> | null) | undefined {
    return this._objRef?.contextNode;
  }
}
