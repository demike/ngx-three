import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export class GltfLoaderCache {
    protected readonly gltfMap = new Map<string, GLTF>();
    public set(key: string, gltf: GLTF) {

    }

    public get(key: string) {
        return this.gltfMap.
    }
}