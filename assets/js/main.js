const soundOn = document.querySelector('.icon-speaker-on')
const soundOff = document.querySelector('.icon-speaker-off')
const soundOn2 = document.querySelector('.icon-speaker-on.icon2')
const soundOff2 = document.querySelector('.icon-speaker-off.icon2')
const playBtn = document.querySelector('.icon-play')
const playBtn2 = document.querySelector('.icon-play.icon2')
const pauseBtn = document.querySelector('.icon-pause')
const pauseBtn2 = document.querySelector('.icon-pause.icon2')
const progressBar = document.getElementById('progress-bar')
const progressBar2 = document.getElementById('progress-bar.v2')
const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')
const seek1 = document.querySelector('.seek-progress');
const seek2 = document.querySelector('.seek-progress.v2');

function updateProgress(video, s) {
    let seek = (s == 1) ? seek1 : seek2 
    seek.value = Math.floor(video.currentTime)
    seek.played = Math.floor(seek.value / video.duration * 100)
    seek.setAttribute('style','width:'+seek.played+'%');
}

function getVideo(id) {
    let video = document.getElementById(id)
    return video
}

if(video1) {
    video1.addEventListener('timeupdate', () => {
        updateProgress(video1, 1)
    }) 
}

if(video2) {
    video2.addEventListener('timeupdate', () => {
        updateProgress(video2, 2)
    }) 
}


// VIDEO SOUND BUTTONS
if(soundOn) {
    soundOn.addEventListener('click', toggleSound)
    soundOff.addEventListener('click', toggleSound)
}
if(soundOn2) {
    soundOn2.addEventListener('click', toggleSound)
    soundOff2.addEventListener('click', toggleSound)
}

function toggleSound(e) {
    let video = getVideo(e.target.getAttribute('data-video'))
    let icons = Array.from(e.currentTarget.parentNode.children)

    icons.forEach((i) => {
        if(i.classList.contains('hide')) {
            i.classList.remove('hide')
        } else {
            i.classList.add('hide')
        }
    })

    if (video.muted) {
        video.muted = false
    } else {
        video.muted = true
    }
}


// VIDEO PLAY BUTTONS
if(playBtn) {
    playBtn.addEventListener('click', toggleVideo)
    pauseBtn.addEventListener('click', toggleVideo)
}
if(playBtn2) {
    playBtn2.addEventListener('click', toggleVideo)
    pauseBtn2.addEventListener('click', toggleVideo)
}

function toggleVideo(e) {
    let video = getVideo(e.target.getAttribute('data-video'))
    let icons = Array.from(e.currentTarget.parentNode.children)

    icons.forEach((i) => {
        if(i.classList.contains('hide')) {
            i.classList.remove('hide')
        } else {
            i.classList.add('hide')
        }
    })

    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

