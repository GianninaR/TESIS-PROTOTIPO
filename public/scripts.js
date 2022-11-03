const columns = document.querySelector('.block-columns')
const videos = document.querySelectorAll('.video')

var space = false;
document.body.onkeydown = function(e) {
    if (e.keyCode == 32) {
        if (space) {
            space = false;
            video.webkitEnterFullScreen()
            return video.play();
        } else {
            space = true;
            return video.pause();
        }
    }
}

for(let i=0; i< videos.length; i ++){
    videos[i].addEventListener('click', (e) => {
        e.target.webkitEnterFullScreen()
    })
}
