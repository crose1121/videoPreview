console.log("page loaded...");

var video = document.getElementById("video");


function play() {
    video.muted = false;
    video.play();
}

function pause() {
    video.muted = true;
    video.pause();
}