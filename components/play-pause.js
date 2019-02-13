/* global AFRAME */

AFRAME.registerComponent('play-pause', {
    init: function () {
        var myVideo = document.querySelector('#introvideo');
        var videoControls = document.querySelector('#videoControls');
        this.el.addEventListener('click', function () {
            if (myVideo.paused) {
                myVideo.play();
                videoControls.setAttribute('visible', 'false');
//                        this.el.emit('vidplaying');
//                        this.el.emit('vidplaying',{value: 2, el: this.el});
//                        myVideo.emit('vidplaying');
//                        myVideo.setAttribute('animation__grow', {
//                            property: 'scale',
//                            dir: 'normal',
//                            from: '1 1 1',
//                            to: '3 3 3',
//                            dur: '1000'
//                        });
            } else {
                myVideo.pause();
                videoControls.setAttribute('visible', 'true');
            }
        });
    }
});