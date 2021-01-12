import { NgModule } from '@angular/core';
import { ThAmbientLight } from './ThAmbientLight';
import { ThAmbientLightProbe } from './ThAmbientLightProbe';
import { ThArrayCamera } from './ThArrayCamera';
import { ThArrowHelper } from './ThArrowHelper';
import { ThAudio } from './ThAudio';
import { ThAudioListener } from './ThAudioListener';
import { ThAxesHelper } from './ThAxesHelper';
import { ThBone } from './ThBone';
import { ThBox3Helper } from './ThBox3Helper';
import { ThBoxBufferGeometry } from './ThBoxBufferGeometry';
import { ThBoxGeometry } from './ThBoxGeometry';
import { ThBoxHelper } from './ThBoxHelper';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCamera } from './ThCamera';
import { ThCameraHelper } from './ThCameraHelper';
import { ThCircleBufferGeometry } from './ThCircleBufferGeometry';
import { ThCircleGeometry } from './ThCircleGeometry';
import { ThConeBufferGeometry } from './ThConeBufferGeometry';
import { ThConeGeometry } from './ThConeGeometry';
import { ThCubeCamera } from './ThCubeCamera';
import { ThCylinderBufferGeometry } from './ThCylinderBufferGeometry';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import { ThDeviceOrientationControls } from './ThDeviceOrientationControls';
import { ThDirectionalLight } from './ThDirectionalLight';
import { ThDirectionalLightHelper } from './ThDirectionalLightHelper';
import { ThDodecahedronBufferGeometry } from './ThDodecahedronBufferGeometry';
import { ThDodecahedronGeometry } from './ThDodecahedronGeometry';
import { ThDragControls } from './ThDragControls';
import { ThEdgesGeometry } from './ThEdgesGeometry';
import { ThExtrudeBufferGeometry } from './ThExtrudeBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';
import { ThFirstPersonControls } from './ThFirstPersonControls';
import { ThFlyControls } from './ThFlyControls';
import { ThGeometry } from './ThGeometry';
import { ThGridHelper } from './ThGridHelper';
import { ThGroup } from './ThGroup';
import { ThHemisphereLight } from './ThHemisphereLight';
import { ThHemisphereLightHelper } from './ThHemisphereLightHelper';
import { ThHemisphereLightProbe } from './ThHemisphereLightProbe';
import { ThIcosahedronBufferGeometry } from './ThIcosahedronBufferGeometry';
import { ThIcosahedronGeometry } from './ThIcosahedronGeometry';
import { ThImmediateRenderObject } from './ThImmediateRenderObject';
import { ThInstancedBufferGeometry } from './ThInstancedBufferGeometry';
import { ThInstancedMesh } from './ThInstancedMesh';
import { ThLatheBufferGeometry } from './ThLatheBufferGeometry';
import { ThLatheGeometry } from './ThLatheGeometry';
import { ThLight } from './ThLight';
import { ThLightProbe } from './ThLightProbe';
import { ThLine } from './ThLine';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import { ThLineDashedMaterial } from './ThLineDashedMaterial';
import { ThLineLoop } from './ThLineLoop';
import { ThLineSegments } from './ThLineSegments';
import { ThLOD } from './ThLOD';
import { ThMapControls } from './ThMapControls';
import { ThMaterial } from './ThMaterial';
import { ThMesh } from './ThMesh';
import { ThMeshBasicMaterial } from './ThMeshBasicMaterial';
import { ThMeshDepthMaterial } from './ThMeshDepthMaterial';
import { ThMeshDistanceMaterial } from './ThMeshDistanceMaterial';
import { ThMeshLambertMaterial } from './ThMeshLambertMaterial';
import { ThMeshMatcapMaterial } from './ThMeshMatcapMaterial';
import { ThMeshNormalMaterial } from './ThMeshNormalMaterial';
import { ThMeshPhongMaterial } from './ThMeshPhongMaterial';
import { ThMeshPhysicalMaterial } from './ThMeshPhysicalMaterial';
import { ThMeshStandardMaterial } from './ThMeshStandardMaterial';
import { ThMeshToonMaterial } from './ThMeshToonMaterial';
import { ThMultiMaterial } from './ThMultiMaterial';
import { ThObject3D } from './ThObject3D';
import { ThOctahedronBufferGeometry } from './ThOctahedronBufferGeometry';
import { ThOctahedronGeometry } from './ThOctahedronGeometry';
import { ThOrbitControls } from './ThOrbitControls';
import { ThOrthographicCamera } from './ThOrthographicCamera';
import { ThParametricBufferGeometry } from './ThParametricBufferGeometry';
import { ThParametricGeometry } from './ThParametricGeometry';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';
import { ThPlaneBufferGeometry } from './ThPlaneBufferGeometry';
import { ThPlaneGeometry } from './ThPlaneGeometry';
import { ThPlaneHelper } from './ThPlaneHelper';
import { ThPointerLockControls } from './ThPointerLockControls';
import { ThPointLight } from './ThPointLight';
import { ThPointLightHelper } from './ThPointLightHelper';
import { ThPoints } from './ThPoints';
import { ThPointsMaterial } from './ThPointsMaterial';
import { ThPolarGridHelper } from './ThPolarGridHelper';
import { ThPolyhedronBufferGeometry } from './ThPolyhedronBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import { ThPositionalAudio } from './ThPositionalAudio';
import { ThRawShaderMaterial } from './ThRawShaderMaterial';
import { ThRectAreaLight } from './ThRectAreaLight';
import { ThRingBufferGeometry } from './ThRingBufferGeometry';
import { ThRingGeometry } from './ThRingGeometry';
import { ThScene } from './ThScene';
import { ThShaderMaterial } from './ThShaderMaterial';
import { ThShadowMaterial } from './ThShadowMaterial';
import { ThShapeBufferGeometry } from './ThShapeBufferGeometry';
import { ThShapeGeometry } from './ThShapeGeometry';
import { ThSkeletonHelper } from './ThSkeletonHelper';
import { ThSkinnedMesh } from './ThSkinnedMesh';
import { ThSphereBufferGeometry } from './ThSphereBufferGeometry';
import { ThSphereGeometry } from './ThSphereGeometry';
import { ThSpotLight } from './ThSpotLight';
import { ThSpotLightHelper } from './ThSpotLightHelper';
import { ThSprite } from './ThSprite';
import { ThSpriteMaterial } from './ThSpriteMaterial';
import { ThStereoCamera } from './ThStereoCamera';
import { ThTetrahedronBufferGeometry } from './ThTetrahedronBufferGeometry';
import { ThTetrahedronGeometry } from './ThTetrahedronGeometry';
import { ThTextBufferGeometry } from './ThTextBufferGeometry';
import { ThTextGeometry } from './ThTextGeometry';
import { ThTorusBufferGeometry } from './ThTorusBufferGeometry';
import { ThTorusGeometry } from './ThTorusGeometry';
import { ThTorusKnotBufferGeometry } from './ThTorusKnotBufferGeometry';
import { ThTorusKnotGeometry } from './ThTorusKnotGeometry';
import { ThTrackballControls } from './ThTrackballControls';
import { ThTransformControls } from './ThTransformControls';
import { ThTubeBufferGeometry } from './ThTubeBufferGeometry';
import { ThTubeGeometry } from './ThTubeGeometry';
import { ThWireframeGeometry } from './ThWireframeGeometry';

@NgModule({
  declarations: [
    ThScene,
    ThSprite,
    ThLOD,
    ThInstancedMesh,
    ThSkinnedMesh,
    ThBone,
    ThMesh,
    ThLineSegments,
    ThLineLoop,
    ThLine,
    ThPoints,
    ThGroup,
    ThSpotLight,
    ThPointLight,
    ThRectAreaLight,
    ThHemisphereLight,
    ThDirectionalLight,
    ThAmbientLight,
    ThLight,
    ThAmbientLightProbe,
    ThHemisphereLightProbe,
    ThLightProbe,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThCamera,
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThObject3D,
    ThImmediateRenderObject,
    ThSpotLightHelper,
    ThSkeletonHelper,
    ThPointLightHelper,
    ThHemisphereLightHelper,
    ThGridHelper,
    ThPolarGridHelper,
    ThDirectionalLightHelper,
    ThCameraHelper,
    ThBoxHelper,
    ThBox3Helper,
    ThPlaneHelper,
    ThArrowHelper,
    ThAxesHelper,
    ThShadowMaterial,
    ThSpriteMaterial,
    ThRawShaderMaterial,
    ThShaderMaterial,
    ThPointsMaterial,
    ThMeshPhysicalMaterial,
    ThMeshStandardMaterial,
    ThMeshPhongMaterial,
    ThMeshToonMaterial,
    ThMeshNormalMaterial,
    ThMeshLambertMaterial,
    ThMeshDepthMaterial,
    ThMeshDistanceMaterial,
    ThMeshBasicMaterial,
    ThMeshMatcapMaterial,
    ThLineDashedMaterial,
    ThLineBasicMaterial,
    ThMaterial,
    ThMultiMaterial,
    ThBoxGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThExtrudeGeometry,
    ThIcosahedronGeometry,
    ThLatheGeometry,
    ThOctahedronGeometry,
    ThParametricGeometry,
    ThPlaneGeometry,
    ThPolyhedronGeometry,
    ThRingGeometry,
    ThShapeGeometry,
    ThSphereGeometry,
    ThTetrahedronGeometry,
    ThTextGeometry,
    ThTorusGeometry,
    ThTorusKnotGeometry,
    ThTubeGeometry,
    ThGeometry,
    ThBoxBufferGeometry,
    ThCircleBufferGeometry,
    ThConeBufferGeometry,
    ThCylinderBufferGeometry,
    ThDodecahedronBufferGeometry,
    ThEdgesGeometry,
    ThExtrudeBufferGeometry,
    ThIcosahedronBufferGeometry,
    ThLatheBufferGeometry,
    ThOctahedronBufferGeometry,
    ThParametricBufferGeometry,
    ThPlaneBufferGeometry,
    ThPolyhedronBufferGeometry,
    ThRingBufferGeometry,
    ThShapeBufferGeometry,
    ThSphereBufferGeometry,
    ThTetrahedronBufferGeometry,
    ThTextBufferGeometry,
    ThTorusBufferGeometry,
    ThTorusKnotBufferGeometry,
    ThTubeBufferGeometry,
    ThWireframeGeometry,
    ThInstancedBufferGeometry,
    ThBufferGeometry,
    ThDeviceOrientationControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThTransformControls,
  ],
  exports: [
    ThScene,
    ThSprite,
    ThLOD,
    ThInstancedMesh,
    ThSkinnedMesh,
    ThBone,
    ThMesh,
    ThLineSegments,
    ThLineLoop,
    ThLine,
    ThPoints,
    ThGroup,
    ThSpotLight,
    ThPointLight,
    ThRectAreaLight,
    ThHemisphereLight,
    ThDirectionalLight,
    ThAmbientLight,
    ThLight,
    ThAmbientLightProbe,
    ThHemisphereLightProbe,
    ThLightProbe,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThCamera,
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThObject3D,
    ThImmediateRenderObject,
    ThSpotLightHelper,
    ThSkeletonHelper,
    ThPointLightHelper,
    ThHemisphereLightHelper,
    ThGridHelper,
    ThPolarGridHelper,
    ThDirectionalLightHelper,
    ThCameraHelper,
    ThBoxHelper,
    ThBox3Helper,
    ThPlaneHelper,
    ThArrowHelper,
    ThAxesHelper,
    ThShadowMaterial,
    ThSpriteMaterial,
    ThRawShaderMaterial,
    ThShaderMaterial,
    ThPointsMaterial,
    ThMeshPhysicalMaterial,
    ThMeshStandardMaterial,
    ThMeshPhongMaterial,
    ThMeshToonMaterial,
    ThMeshNormalMaterial,
    ThMeshLambertMaterial,
    ThMeshDepthMaterial,
    ThMeshDistanceMaterial,
    ThMeshBasicMaterial,
    ThMeshMatcapMaterial,
    ThLineDashedMaterial,
    ThLineBasicMaterial,
    ThMaterial,
    ThMultiMaterial,
    ThBoxGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThExtrudeGeometry,
    ThIcosahedronGeometry,
    ThLatheGeometry,
    ThOctahedronGeometry,
    ThParametricGeometry,
    ThPlaneGeometry,
    ThPolyhedronGeometry,
    ThRingGeometry,
    ThShapeGeometry,
    ThSphereGeometry,
    ThTetrahedronGeometry,
    ThTextGeometry,
    ThTorusGeometry,
    ThTorusKnotGeometry,
    ThTubeGeometry,
    ThGeometry,
    ThBoxBufferGeometry,
    ThCircleBufferGeometry,
    ThConeBufferGeometry,
    ThCylinderBufferGeometry,
    ThDodecahedronBufferGeometry,
    ThEdgesGeometry,
    ThExtrudeBufferGeometry,
    ThIcosahedronBufferGeometry,
    ThLatheBufferGeometry,
    ThOctahedronBufferGeometry,
    ThParametricBufferGeometry,
    ThPlaneBufferGeometry,
    ThPolyhedronBufferGeometry,
    ThRingBufferGeometry,
    ThShapeBufferGeometry,
    ThSphereBufferGeometry,
    ThTetrahedronBufferGeometry,
    ThTextBufferGeometry,
    ThTorusBufferGeometry,
    ThTorusKnotBufferGeometry,
    ThTubeBufferGeometry,
    ThWireframeGeometry,
    ThInstancedBufferGeometry,
    ThBufferGeometry,
    ThDeviceOrientationControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThTransformControls,
  ],
})
export class NgxThreeGeneratedModule {}
