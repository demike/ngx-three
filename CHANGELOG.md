# Changelog

## [0.28]

### Features
 - allow useage of multiple renderers
 - renderers can be provided and injected
 - CSS3D renderer example
 - WebGL + CSS3D renderer example
 - Html renderering (with occlusion) with CSS3D renderer example 

### Breaking Changes 
 - if you have used `[rendererParameters]="..."` on the ThCanvas you have to change this to a structural diretive `*rendererParameters="..."` 
 - ThEngine service has changed, and does not expose a renderer member but "renderers"