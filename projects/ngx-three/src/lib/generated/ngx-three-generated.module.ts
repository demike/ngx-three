import { NgModule } from '@angular/core';
import { ThCSS2DObject } from './overrides/ThCSS2DObject';
import { ThCSS3DObject } from './overrides/ThCSS3DObject';
import { ThEffectComposer } from './overrides/ThEffectComposer';
import { ThRenderPass } from './overrides/ThRenderPass';
import { ThTransformControls } from './overrides/ThTransformControls';
import { ThAfterimagePass } from './ThAfterimagePass';
import { ThAmbientLight } from './ThAmbientLight';
import { ThArcballControls } from './ThArcballControls';
import { ThArrayCamera } from './ThArrayCamera';
import { ThArrowHelper } from './ThArrowHelper';
import { ThAudio } from './ThAudio';
import { ThAudioListener } from './ThAudioListener';
import { ThAxesHelper } from './ThAxesHelper';
import { ThBatchedMesh } from './ThBatchedMesh';
import { ThBloomPass } from './ThBloomPass';
import { ThBokehPass } from './ThBokehPass';
import { ThBone } from './ThBone';
import { ThBox3Helper } from './ThBox3Helper';
import { ThBoxGeometry } from './ThBoxGeometry';
import { ThBoxHelper } from './ThBoxHelper';
import { ThBoxLineGeometry } from './ThBoxLineGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCamera } from './ThCamera';
import { ThCameraHelper } from './ThCameraHelper';
import { ThCanvasTexture } from './ThCanvasTexture';
import { ThCapsuleGeometry } from './ThCapsuleGeometry';
import { ThCircleGeometry } from './ThCircleGeometry';
import { ThClearMaskPass } from './ThClearMaskPass';
import { ThClearPass } from './ThClearPass';
import { ThCompressedArrayTexture } from './ThCompressedArrayTexture';
import { ThCompressedCubeTexture } from './ThCompressedCubeTexture';
import { ThCompressedTexture } from './ThCompressedTexture';
import { ThConeGeometry } from './ThConeGeometry';
import { ThConvexGeometry } from './ThConvexGeometry';
import { ThCSS2DObjectGen } from './ThCSS2DObjectGen';
import { ThCSS3DObjectGen } from './ThCSS3DObjectGen';
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
import { ThIcosahedronGeometry } from './ThIcosahedronGeometry';
import { ThInstancedBufferGeometry } from './ThInstancedBufferGeometry';
import { ThInstancedMesh } from './ThInstancedMesh';
import { ThLatheGeometry } from './ThLatheGeometry';
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
import { ThOutputPass } from './ThOutputPass';
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
import { ThVideoFrameTexture } from './ThVideoFrameTexture';
import { ThVideoTexture } from './ThVideoTexture';
import { ThWireframeGeometry } from './ThWireframeGeometry';

@NgModule({
  imports: [
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
    ThAudio,
    ThAudioListener,
    ThPositionalAudio,
    ThArrayCamera,
    ThCamera,
    ThCubeCamera,
    ThOrthographicCamera,
    ThPerspectiveCamera,
    ThStereoCamera,
    ThObject3D,
    ThArrowHelper,
    ThAxesHelper,
    ThBox3Helper,
    ThBoxHelper,
    ThCameraHelper,
    ThDirectionalLightHelper,
    ThGridHelper,
    ThHemisphereLightHelper,
    ThPlaneHelper,
    ThPointLightHelper,
    ThPolarGridHelper,
    ThSkeletonHelper,
    ThSpotLightHelper,
    ThAmbientLight,
    ThDirectionalLight,
    ThHemisphereLight,
    ThLightProbe,
    ThPointLight,
    ThRectAreaLight,
    ThSpotLight,
    ThBatchedMesh,
    ThBone,
    ThGroup,
    ThInstancedMesh,
    ThLine,
    ThLineLoop,
    ThLineSegments,
    ThLOD,
    ThMesh,
    ThPoints,
    ThSkinnedMesh,
    ThSprite,
    ThScene,
    ThCSS3DObjectGen,
    ThCSS3DObject,
    ThCSS2DObjectGen,
    ThCSS2DObject,
    ThLineBasicMaterial,
    ThLineDashedMaterial,
    ThMaterial,
    ThMeshBasicMaterial,
    ThMeshDepthMaterial,
    ThMeshDistanceMaterial,
    ThMeshLambertMaterial,
    ThMeshMatcapMaterial,
    ThMeshNormalMaterial,
    ThMeshPhongMaterial,
    ThMeshPhysicalMaterial,
    ThMeshStandardMaterial,
    ThMeshToonMaterial,
    ThPointsMaterial,
    ThRawShaderMaterial,
    ThShaderMaterial,
    ThShadowMaterial,
    ThSpriteMaterial,
    ThBufferGeometry,
    ThInstancedBufferGeometry,
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
    ThParametricGeometry,
    ThRoundedBoxGeometry,
    ThTeapotGeometry,
    ThTextGeometry,
    ThPass,
    ThEffectComposerGen,
    ThEffectComposer,
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
    ThOutputPass,
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
    ThCanvasTexture,
    ThCompressedArrayTexture,
    ThCompressedCubeTexture,
    ThCompressedTexture,
    ThCubeTexture,
    ThData3DTexture,
    ThDataArrayTexture,
    ThDataTexture,
    ThDepthTexture,
    ThFramebufferTexture,
    ThTexture,
    ThVideoFrameTexture,
    ThVideoTexture,
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
    ThAudio,
    ThAudioListener,
    ThPositionalAudio,
    ThArrayCamera,
    ThCamera,
    ThCubeCamera,
    ThOrthographicCamera,
    ThPerspectiveCamera,
    ThStereoCamera,
    ThObject3D,
    ThArrowHelper,
    ThAxesHelper,
    ThBox3Helper,
    ThBoxHelper,
    ThCameraHelper,
    ThDirectionalLightHelper,
    ThGridHelper,
    ThHemisphereLightHelper,
    ThPlaneHelper,
    ThPointLightHelper,
    ThPolarGridHelper,
    ThSkeletonHelper,
    ThSpotLightHelper,
    ThAmbientLight,
    ThDirectionalLight,
    ThHemisphereLight,
    ThLightProbe,
    ThPointLight,
    ThRectAreaLight,
    ThSpotLight,
    ThBatchedMesh,
    ThBone,
    ThGroup,
    ThInstancedMesh,
    ThLine,
    ThLineLoop,
    ThLineSegments,
    ThLOD,
    ThMesh,
    ThPoints,
    ThSkinnedMesh,
    ThSprite,
    ThScene,
    ThCSS3DObjectGen,
    ThCSS3DObject,
    ThCSS2DObjectGen,
    ThCSS2DObject,
    ThLineBasicMaterial,
    ThLineDashedMaterial,
    ThMaterial,
    ThMeshBasicMaterial,
    ThMeshDepthMaterial,
    ThMeshDistanceMaterial,
    ThMeshLambertMaterial,
    ThMeshMatcapMaterial,
    ThMeshNormalMaterial,
    ThMeshPhongMaterial,
    ThMeshPhysicalMaterial,
    ThMeshStandardMaterial,
    ThMeshToonMaterial,
    ThPointsMaterial,
    ThRawShaderMaterial,
    ThShaderMaterial,
    ThShadowMaterial,
    ThSpriteMaterial,
    ThBufferGeometry,
    ThInstancedBufferGeometry,
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
    ThParametricGeometry,
    ThRoundedBoxGeometry,
    ThTeapotGeometry,
    ThTextGeometry,
    ThPass,
    ThEffectComposerGen,
    ThEffectComposer,
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
    ThOutputPass,
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
    ThCanvasTexture,
    ThCompressedArrayTexture,
    ThCompressedCubeTexture,
    ThCompressedTexture,
    ThCubeTexture,
    ThData3DTexture,
    ThDataArrayTexture,
    ThDataTexture,
    ThDepthTexture,
    ThFramebufferTexture,
    ThTexture,
    ThVideoFrameTexture,
    ThVideoTexture,
  ],
})
export class NgxThreeGeneratedModule {}
