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
const seekProgress1 = document.querySelector('.seek-progress');
const seekProgress2 = document.querySelector('.seek-progress.v2');
const seek1 = document.querySelector('.seek');
const seek2 = document.querySelector('.seek.v2');

function updateProgress(video, s) {
    let seekProgress = (s == 1) ? seekProgress1 : seekProgress2 
    seekProgress.value = Math.floor(video.currentTime)
    seekProgress.played = Math.floor(seekProgress.value / video.duration * 100)
    seekProgress.setAttribute('style','width:'+seekProgress.played+'%');
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

// VIDEO SEEK
if(seek1) {
    seek1.addEventListener('click', seekVideo)
}
if(seek2) {
    seek2.addEventListener('click', seekVideo)
}

function seekVideo(e) {
    let video = getVideo(e.target.getAttribute('data-video'))

    let clickX = e.clientX
    let pos = e.currentTarget.getBoundingClientRect()
    let seekStart = pos.left
    let seekEnd = pos.left + pos.width
    let seekTarget = (clickX - seekStart) / (seekEnd - seekStart)
    let seekTime = video.duration * seekTarget

    video.currentTime = seekTime
}



var encEmail = "c3BlbmNlckBmaXJzdGJsb2MuY29t";
const form = document.getElementById("contact");
if(form) {
	form.setAttribute("href", "mailto:".concat(atob(encEmail)));
}

window.addEventListener('DOMContentLoaded', () => {

// --------------------------------------------------
// Fullscreen Slider
// --------------------------------------------------

const slides = document.querySelectorAll('.slide');
const body = document.body;
var currentSlide = 0;

if (slides.length > 0) {
  
  const slideTotal = document.querySelectorAll('.slide-total')[0];
  const slideCurrent = document.querySelectorAll('.slide-current')[0];
  slideTotal.innerHTML= slides.length;

  function nextSlide() {
    const inactiveSlides = document.querySelectorAll('.inactive');
    

    for(let i = 0; i<inactiveSlides.length; i++) {
        inactiveSlides[i].classList.remove('animate','inactive');
    }

    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('inactive','animate');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active', 'animate');

    console.log(currentSlide)

    // Set color of overlay text
    if(currentSlide == 3 || currentSlide == 5 ||currentSlide == 6) {
      body.classList.add('light-header');
    } else {
      body.classList.remove('light-header');
    }

    slideCurrent.innerHTML = currentSlide + 1;

  }

  setInterval(nextSlide, 5000); // Auto-rotate slides every 5 seconds
}


window.addEventListener("focus", function(event) { 

    for(let i = 0; i<slides.length; i++) {
        inactiveSlides[i].classList.remove('animate','inactive');
    }

}, false);



// --------------------------------------------------
// Item Slider
// --------------------------------------------------
const slideItems = document.querySelectorAll('.slide-item');
if (slideItems.length > 0) {

  var itemSlider = document.getElementsByClassName('item-slider-mover')[0];

  itemSlider.addEventListener("transitionend", () => {
    itemSlider.classList.remove('animate');
    var firstItem = itemSlider.removeChild(itemSlider.firstElementChild);
    itemSlider.appendChild(firstItem);
  });

  function nextItem() {
    
    itemSlider.classList.add('animate');
  }

  setInterval(nextItem, 3000); // Auto-rotate items every 3 seconds
}

// --------------------------------------------------
// Item Slider (Small)
// --------------------------------------------------
const smallSlideItems = document.querySelectorAll('.slide-item.small');
if (smallSlideItems.length > 0) {

  var smallItemSlider = document.getElementsByClassName('small-item-slider-mover')[0];

  smallItemSlider.addEventListener("transitionend", () => {
    smallItemSlider.classList.remove('animate');
    var firstSmallItem = smallItemSlider.removeChild(smallItemSlider.firstElementChild);
    smallItemSlider.appendChild(firstSmallItem);
  });

  function nextSmallItem() {
    
    smallItemSlider.classList.add('animate');
  }

  setInterval(nextSmallItem, 0); // Auto-rotate items every 3 seconds
}



});
const slideWrapper = document.querySelector('.slide-wrapper');
const parallax = document.querySelector('.parallax');
const rate = 0.1; // lower number is slower speed


parallax.addEventListener('scroll', () => {
    if(slideWrapper) {
      slideWrapper.style.opacity = (100 - parallax.scrollTop * rate) + '%';
    }
 });
