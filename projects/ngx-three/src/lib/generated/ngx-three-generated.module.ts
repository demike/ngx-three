import { NgModule } from '@angular/core';
import { ThEffectComposer } from './overrides/ThEffectComposer';
import { ThRenderPass } from './overrides/ThRenderPass';
import { ThAdaptiveToneMappingPass } from './ThAdaptiveToneMappingPass';
import { ThAfterimagePass } from './ThAfterimagePass';
import { ThAmbientLight } from './ThAmbientLight';
import { ThAmbientLightProbe } from './ThAmbientLightProbe';
import { ThArrayCamera } from './ThArrayCamera';
import { ThArrowHelper } from './ThArrowHelper';
import { ThAudio } from './ThAudio';
import { ThAudioListener } from './ThAudioListener';
import { ThAxesHelper } from './ThAxesHelper';
import { ThBloomPass } from './ThBloomPass';
import { ThBokehPass } from './ThBokehPass';
import { ThBone } from './ThBone';
import { ThBox3Helper } from './ThBox3Helper';
import { ThBoxGeometry } from './ThBoxGeometry';
import { ThBoxHelper } from './ThBoxHelper';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCamera } from './ThCamera';
import { ThCameraHelper } from './ThCameraHelper';
import { ThCircleGeometry } from './ThCircleGeometry';
import { ThClearMaskPass } from './ThClearMaskPass';
import { ThClearPass } from './ThClearPass';
import { ThConeGeometry } from './ThConeGeometry';
import { ThCubeCamera } from './ThCubeCamera';
import { ThCubeTexturePass } from './ThCubeTexturePass';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import { ThDeviceOrientationControls } from './ThDeviceOrientationControls';
import { ThDirectionalLight } from './ThDirectionalLight';
import { ThDirectionalLightHelper } from './ThDirectionalLightHelper';
import { ThDodecahedronGeometry } from './ThDodecahedronGeometry';
import { ThDotScreenPass } from './ThDotScreenPass';
import { ThDragControls } from './ThDragControls';
import { ThEdgesGeometry } from './ThEdgesGeometry';
import { ThEffectComposerGen } from './ThEffectComposerGen';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';
import { ThFilmPass } from './ThFilmPass';
import { ThFirstPersonControls } from './ThFirstPersonControls';
import { ThFlyControls } from './ThFlyControls';
import { ThGlitchPass } from './ThGlitchPass';
import { ThGridHelper } from './ThGridHelper';
import { ThGroup } from './ThGroup';
import { ThHalftonePass } from './ThHalftonePass';
import { ThHemisphereLight } from './ThHemisphereLight';
import { ThHemisphereLightHelper } from './ThHemisphereLightHelper';
import { ThHemisphereLightProbe } from './ThHemisphereLightProbe';
import { ThIcosahedronGeometry } from './ThIcosahedronGeometry';
import { ThImmediateRenderObject } from './ThImmediateRenderObject';
import { ThInstancedBufferGeometry } from './ThInstancedBufferGeometry';
import { ThInstancedMesh } from './ThInstancedMesh';
import { ThLatheGeometry } from './ThLatheGeometry';
import { ThLight } from './ThLight';
import { ThLightProbe } from './ThLightProbe';
import { ThLine } from './ThLine';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import { ThLineDashedMaterial } from './ThLineDashedMaterial';
import { ThLineLoop } from './ThLineLoop';
import { ThLineSegments } from './ThLineSegments';
import { ThLOD } from './ThLOD';
import { ThLUTPass } from './ThLUTPass';
import { ThMapControls } from './ThMapControls';
import { ThMaskPass } from './ThMaskPass';
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
import { ThObject3D } from './ThObject3D';
import { ThOctahedronGeometry } from './ThOctahedronGeometry';
import { ThOrbitControls } from './ThOrbitControls';
import { ThOrthographicCamera } from './ThOrthographicCamera';
import { ThOutlinePass } from './ThOutlinePass';
import { ThParametricGeometry } from './ThParametricGeometry';
import { ThPass } from './ThPass';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';
import { ThPlaneGeometry } from './ThPlaneGeometry';
import { ThPlaneHelper } from './ThPlaneHelper';
import { ThPointerLockControls } from './ThPointerLockControls';
import { ThPointLight } from './ThPointLight';
import { ThPointLightHelper } from './ThPointLightHelper';
import { ThPoints } from './ThPoints';
import { ThPointsMaterial } from './ThPointsMaterial';
import { ThPolarGridHelper } from './ThPolarGridHelper';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import { ThPositionalAudio } from './ThPositionalAudio';
import { ThRawShaderMaterial } from './ThRawShaderMaterial';
import { ThRectAreaLight } from './ThRectAreaLight';
import { ThRenderPassGen } from './ThRenderPassGen';
import { ThRingGeometry } from './ThRingGeometry';
import { ThSAOPass } from './ThSAOPass';
import { ThSavePass } from './ThSavePass';
import { ThScene } from './ThScene';
import { ThShaderMaterial } from './ThShaderMaterial';
import { ThShaderPass } from './ThShaderPass';
import { ThShadowMaterial } from './ThShadowMaterial';
import { ThShapeGeometry } from './ThShapeGeometry';
import { ThSkeletonHelper } from './ThSkeletonHelper';
import { ThSkinnedMesh } from './ThSkinnedMesh';
import { ThSMAAPass } from './ThSMAAPass';
import { ThSphereGeometry } from './ThSphereGeometry';
import { ThSpotLight } from './ThSpotLight';
import { ThSpotLightHelper } from './ThSpotLightHelper';
import { ThSprite } from './ThSprite';
import { ThSpriteMaterial } from './ThSpriteMaterial';
import { ThSSAARenderPass } from './ThSSAARenderPass';
import { ThSSAOPass } from './ThSSAOPass';
import { ThSSRPass } from './ThSSRPass';
import { ThSSRrPass } from './ThSSRrPass';
import { ThStereoCamera } from './ThStereoCamera';
import { ThTAARenderPass } from './ThTAARenderPass';
import { ThTetrahedronGeometry } from './ThTetrahedronGeometry';
import { ThTextGeometry } from './ThTextGeometry';
import { ThTexturePass } from './ThTexturePass';
import { ThTorusGeometry } from './ThTorusGeometry';
import { ThTorusKnotGeometry } from './ThTorusKnotGeometry';
import { ThTrackballControls } from './ThTrackballControls';
import { ThTransformControls } from './ThTransformControls';
import { ThTubeGeometry } from './ThTubeGeometry';
import { ThUnrealBloomPass } from './ThUnrealBloomPass';
import { ThWireframeGeometry } from './ThWireframeGeometry';

@NgModule({
  declarations: [
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThCamera,
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
    ThScene,
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
    ThInstancedBufferGeometry,
    ThBufferGeometry,
    ThBoxGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThEdgesGeometry,
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
    ThWireframeGeometry,
    ThDeviceOrientationControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThTransformControls,
    ThAdaptiveToneMappingPass,
    ThAfterimagePass,
    ThBloomPass,
    ThBokehPass,
    ThClearPass,
    ThCubeTexturePass,
    ThDotScreenPass,
    ThEffectComposerGen,
    ThEffectComposer,
    ThFilmPass,
    ThGlitchPass,
    ThHalftonePass,
    ThLUTPass,
    ThMaskPass,
    ThClearMaskPass,
    ThOutlinePass,
    ThPass,
    ThRenderPassGen,
    ThRenderPass,
    ThSAOPass,
    ThSMAAPass,
    ThSSAARenderPass,
    ThSSAOPass,
    ThSSRPass,
    ThSSRrPass,
    ThSavePass,
    ThShaderPass,
    ThTAARenderPass,
    ThTexturePass,
    ThUnrealBloomPass,
  ],
  exports: [
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThCamera,
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
    ThScene,
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
    ThInstancedBufferGeometry,
    ThBufferGeometry,
    ThBoxGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThEdgesGeometry,
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
    ThWireframeGeometry,
    ThDeviceOrientationControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThTransformControls,
    ThAdaptiveToneMappingPass,
    ThAfterimagePass,
    ThBloomPass,
    ThBokehPass,
    ThClearPass,
    ThCubeTexturePass,
    ThDotScreenPass,
    ThEffectComposerGen,
    ThEffectComposer,
    ThFilmPass,
    ThGlitchPass,
    ThHalftonePass,
    ThLUTPass,
    ThMaskPass,
    ThClearMaskPass,
    ThOutlinePass,
    ThPass,
    ThRenderPassGen,
    ThRenderPass,
    ThSAOPass,
    ThSMAAPass,
    ThSSAARenderPass,
    ThSSAOPass,
    ThSSRPass,
    ThSSRrPass,
    ThSavePass,
    ThShaderPass,
    ThTAARenderPass,
    ThTexturePass,
    ThUnrealBloomPass,
  ],
})
export class NgxThreeGeneratedModule {}
