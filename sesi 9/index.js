const videoComponent = document.querySelector("video")

function play() {
   videoComponent.play()
}

function pause() {
    console.log('testing cuy')
    videoComponent.pause()
}

function minimize() {
    console.log('testing bre')
    videoComponent.requestPictureInPicture()
}