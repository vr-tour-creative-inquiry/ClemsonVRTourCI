/* global AFRAME */

AFRAME.registerComponent('set-objects', {
  init: function () {
    var objs = this.el.sceneEl.querySelectorAll('.objs');
    for (var i = 0; i < objs.length; i++) {
        if(objs[i].id == "lobby-objs"){
                objs[i].setAttribute('scale', {x: 1, y: 1, z: 1});
        }
        else{
            objs[i].setAttribute('scale', {x: 0, y: 0, z: 0});
        }
    }  
    this.el.addEventListener('set-objects', function (event) {
        for (var i = 0; i < objs.length; i++) {

            if(objs[i].id == event.detail){
                objs[i].setAttribute('scale', {x: 1, y: 1, z: 1});
            }
            else{
                objs[i].setAttribute('scale', {x: 0, y: 0, z: 0});          
            }
        }
        this.el.sceneEl.querySelector('[raycaster]').components.raycaster.refreshObjects();
    });
  }
});