import { BufferGeometry, InstancedMesh, Material, Matrix4, Mesh, Object3D } from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export interface BakedMesh {
  geometry: BufferGeometry;
  material: Material;
}

// Traverse scene and bake world transforms into cloned geometries
export function bakeSceneMeshes(source: Object3D): BakedMesh[] {
  const baked: BakedMesh[] = [];
  source.updateMatrixWorld(true);
  source.traverse((obj: any) => {
    if (obj?.isMesh) {
      const mesh = obj as Mesh;
      // Skip skinned meshes for basic instancing use-case
      if ((mesh as any).isSkinnedMesh) {
        return;
      }
      const geom = mesh.geometry.clone();
      geom.applyMatrix4(mesh.matrixWorld);
      if (!geom.attributes.normal) {
        geom.computeVertexNormals();
      }
      baked.push({ geometry: geom, material: mesh.material as Material });
    }
  });
  return baked;
}

// Group baked geometries by material identity
function groupByMaterial(baked: BakedMesh[]) {
  const groups = new Map<string, { material: Material; geometries: BufferGeometry[] }>();
  baked.forEach(({ geometry, material }) => {
    const key: string = (material as any)?.uuid ?? material.type;
    const g = groups.get(key);
    if (g) {
      g.geometries.push(geometry);
    } else {
      groups.set(key, { material, geometries: [geometry] });
    }
  });
  return groups;
}

// Merge geometries per material using BufferGeometryUtils
function mergePerMaterial(groups: Map<string, { material: Material; geometries: BufferGeometry[] }>) {
  const result: { material: Material; geometry: BufferGeometry }[] = [];
  for (const { material, geometries } of groups.values()) {
    const merged = BufferGeometryUtils.mergeGeometries(geometries, false);
    if (!merged) {
      // Fallback: if merge fails, use first geometry
      result.push({ material, geometry: geometries[0] });
    } else {
      result.push({ material, geometry: merged });
    }
  }
  return result;
}

// Build instanced meshes representing N copies of the baked scene
export function buildInstancedScene(source: Object3D, instanceCount: number): Object3D {
  const baked = bakeSceneMeshes(source);
  const groups = groupByMaterial(baked);
  const merged = mergePerMaterial(groups);

  const root = new Object3D();
  merged.forEach(({ material, geometry }) => {
    const inst = new InstancedMesh(geometry, material, instanceCount);
    // Initialize identity matrices; caller will update later.
    const identity = new Matrix4();
    for (let i = 0; i < instanceCount; i++) {
      inst.setMatrixAt(i, identity);
    }
    inst.instanceMatrix.needsUpdate = true;
    root.add(inst);
  });
  return root;
}

// Apply an array of matrices to every InstancedMesh in the instanced scene.
// Length of matrices must be >= instanceCount of each mesh; extra entries are ignored.
export function applyInstanceMatrices(instancedScene: Object3D, matrices: Matrix4[]): void {
  instancedScene.traverse((child: any) => {
    if (child instanceof InstancedMesh) {
      const count = child.count;
      for (let i = 0; i < count && i < matrices.length; i++) {
        child.setMatrixAt(i, matrices[i]);
      }
      child.instanceMatrix.needsUpdate = true;
    }
  });
}

// Update a single instance matrix across all InstancedMeshes (useful if all share same instance indexing).
export function updateInstanceMatrix(instancedScene: Object3D, instanceIndex: number, matrix: Matrix4): void {
  instancedScene.traverse((child: any) => {
    if (child instanceof InstancedMesh) {
      if (instanceIndex >= 0 && instanceIndex < child.count) {
        child.setMatrixAt(instanceIndex, matrix);
        child.instanceMatrix.needsUpdate = true;
      }
    }
  });
}

// Helper to extract matrices (e.g., for interpolation or debugging)
export function readInstanceMatrices(instancedScene: Object3D): Matrix4[][] {
  const all: Matrix4[][] = [];
  instancedScene.traverse((child: any) => {
    if (child instanceof InstancedMesh) {
      const arr: Matrix4[] = [];
      const m = new Matrix4();
      for (let i = 0; i < child.count; i++) {
        child.getMatrixAt(i, m);
        arr.push(m.clone());
      }
      all.push(arr);
    }
  });
  return all;
}
