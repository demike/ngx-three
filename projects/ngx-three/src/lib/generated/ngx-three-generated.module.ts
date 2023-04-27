import { NgModule } from '@angular/core';
import { ThEffectComposer } from './overrides/ThEffectComposer';
import { ThRenderPass } from './overrides/ThRenderPass';
import { ThTransformControls } from './overrides/ThTransformControls';
import { ThAdaptiveToneMappingPass } from './ThAdaptiveToneMappingPass';
import { ThAfterimagePass } from './ThAfterimagePass';
import { ThAmbientLight } from './ThAmbientLight';
import { ThAmbientLightProbe } from './ThAmbientLightProbe';
import { ThArcballControls } from './ThArcballControls';
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
import { ThBoxLineGeometry } from './ThBoxLineGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCameraHelper } from './ThCameraHelper';
import { ThCanvasTexture } from './ThCanvasTexture';
import { ThCapsuleGeometry } from './ThCapsuleGeometry';
import { ThCircleGeometry } from './ThCircleGeometry';
import { ThClearMaskPass } from './ThClearMaskPass';
import { ThClearPass } from './ThClearPass';
import { ThCompressedArrayTexture } from './ThCompressedArrayTexture';
import { ThCompressedTexture } from './ThCompressedTexture';
import { ThConeGeometry } from './ThConeGeometry';
import { ThConvexGeometry } from './ThConvexGeometry';
import { ThCubeCamera } from './ThCubeCamera';
import { ThCubeTexture } from './ThCubeTexture';
import { ThCubeTexturePass } from './ThCubeTexturePass';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import { ThData3DTexture } from './ThData3DTexture';
import { ThDataArrayTexture } from './ThDataArrayTexture';
import { ThDataTexture } from './ThDataTexture';
import { ThDecalGeometry } from './ThDecalGeometry';
import { ThDepthTexture } from './ThDepthTexture';
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
import { ThFramebufferTexture } from './ThFramebufferTexture';
import { ThGlitchPass } from './ThGlitchPass';
import { ThGridHelper } from './ThGridHelper';
import { ThGroup } from './ThGroup';
import { ThHalftonePass } from './ThHalftonePass';
import { ThHemisphereLight } from './ThHemisphereLight';
import { ThHemisphereLightHelper } from './ThHemisphereLightHelper';
import { ThHemisphereLightProbe } from './ThHemisphereLightProbe';
import { ThIcosahedronGeometry } from './ThIcosahedronGeometry';
import { ThInstancedBufferGeometry } from './ThInstancedBufferGeometry';
import { ThInstancedMesh } from './ThInstancedMesh';
import { ThLatheGeometry } from './ThLatheGeometry';
import { ThLight } from './ThLight';
import { ThLightningStrike } from './ThLightningStrike';
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
import { ThRoundedBoxGeometry } from './ThRoundedBoxGeometry';
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
import { ThStereoCamera } from './ThStereoCamera';
import { ThTAARenderPass } from './ThTAARenderPass';
import { ThTeapotGeometry } from './ThTeapotGeometry';
import { ThTetrahedronGeometry } from './ThTetrahedronGeometry';
import { ThTextGeometry } from './ThTextGeometry';
import { ThTexture } from './ThTexture';
import { ThTexturePass } from './ThTexturePass';
import { ThTorusGeometry } from './ThTorusGeometry';
import { ThTorusKnotGeometry } from './ThTorusKnotGeometry';
import { ThTrackballControls } from './ThTrackballControls';
import { ThTransformControlsGen } from './ThTransformControlsGen';
import { ThTubeGeometry } from './ThTubeGeometry';
import { ThUnrealBloomPass } from './ThUnrealBloomPass';
import { ThVideoTexture } from './ThVideoTexture';
import { ThWireframeGeometry } from './ThWireframeGeometry';

@NgModule({
  declarations: [
    ThTransformControlsGen,
    ThTransformControls,
    ThArcballControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThObject3D,
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
    ThCapsuleGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThEdgesGeometry,
    ThExtrudeGeometry,
    ThIcosahedronGeometry,
    ThLatheGeometry,
    ThOctahedronGeometry,
    ThPlaneGeometry,
    ThPolyhedronGeometry,
    ThRingGeometry,
    ThShapeGeometry,
    ThSphereGeometry,
    ThTetrahedronGeometry,
    ThTorusGeometry,
    ThTorusKnotGeometry,
    ThTubeGeometry,
    ThWireframeGeometry,
    ThBoxLineGeometry,
    ThConvexGeometry,
    ThDecalGeometry,
    ThLightningStrike,
    ThParametricGeometry,
    ThRoundedBoxGeometry,
    ThTeapotGeometry,
    ThTextGeometry,
    ThPass,
    ThEffectComposerGen,
    ThEffectComposer,
    ThAdaptiveToneMappingPass,
    ThAfterimagePass,
    ThBloomPass,
    ThBokehPass,
    ThClearPass,
    ThCubeTexturePass,
    ThDotScreenPass,
    ThFilmPass,
    ThGlitchPass,
    ThHalftonePass,
    ThLUTPass,
    ThMaskPass,
    ThClearMaskPass,
    ThOutlinePass,
    ThRenderPassGen,
    ThRenderPass,
    ThSAOPass,
    ThSMAAPass,
    ThSSAARenderPass,
    ThSSAOPass,
    ThSSRPass,
    ThSavePass,
    ThShaderPass,
    ThTAARenderPass,
    ThTexturePass,
    ThUnrealBloomPass,
    ThVideoTexture,
    ThCompressedArrayTexture,
    ThDataTexture,
    ThCompressedTexture,
    ThCubeTexture,
    ThData3DTexture,
    ThDataArrayTexture,
    ThCanvasTexture,
    ThDepthTexture,
    ThFramebufferTexture,
    ThTexture,
  ],
  exports: [
    ThTransformControlsGen,
    ThTransformControls,
    ThArcballControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThObject3D,
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
    ThCapsuleGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThEdgesGeometry,
    ThExtrudeGeometry,
    ThIcosahedronGeometry,
    ThLatheGeometry,
    ThOctahedronGeometry,
    ThPlaneGeometry,
    ThPolyhedronGeometry,
    ThRingGeometry,
    ThShapeGeometry,
    ThSphereGeometry,
    ThTetrahedronGeometry,
    ThTorusGeometry,
    ThTorusKnotGeometry,
    ThTubeGeometry,
    ThWireframeGeometry,
    ThBoxLineGeometry,
    ThConvexGeometry,
    ThDecalGeometry,
    ThLightningStrike,
    ThParametricGeometry,
    ThRoundedBoxGeometry,
    ThTeapotGeometry,
    ThTextGeometry,
    ThPass,
    ThEffectComposerGen,
    ThEffectComposer,
    ThAdaptiveToneMappingPass,
    ThAfterimagePass,
    ThBloomPass,
    ThBokehPass,
    ThClearPass,
    ThCubeTexturePass,
    ThDotScreenPass,
    ThFilmPass,
    ThGlitchPass,
    ThHalftonePass,
    ThLUTPass,
    ThMaskPass,
    ThClearMaskPass,
    ThOutlinePass,
    ThRenderPassGen,
    ThRenderPass,
    ThSAOPass,
    ThSMAAPass,
    ThSSAARenderPass,
    ThSSAOPass,
    ThSSRPass,
    ThSavePass,
    ThShaderPass,
    ThTAARenderPass,
    ThTexturePass,
    ThUnrealBloomPass,
    ThVideoTexture,
    ThCompressedArrayTexture,
    ThDataTexture,
    ThCompressedTexture,
    ThCubeTexture,
    ThData3DTexture,
    ThDataArrayTexture,
    ThCanvasTexture,
    ThDepthTexture,
    ThFramebufferTexture,
    ThTexture,
  ],
})
export class NgxThreeGeneratedModule {}
