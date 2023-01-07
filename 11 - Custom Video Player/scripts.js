const wholePlayer = document.querySelector(".player");
const videoItself = document.querySelector(".player__video");
const playButton  = document.querySelector('.player__button');
const volumeChanger = document.querySelector("[name='volume']");
const progressBarFilled = document.querySelector('.progress__filled');
const progressBar = document.querySelector('.progress');
const backForSec = document.querySelectorAll('.player__button');
const fullScreenBtn= document.querySelector('.fullscreen');

let isPlaying = false ;
let isFullScreen= false;

volumeChanger.addEventListener("input",(e)=> { videoItself.volume = (e.currentTarget.value)});


videoItself.addEventListener('click', playOrPause);
playButton.addEventListener("click",playOrPause);
 function playOrPause (e) {
    isPlaying = !isPlaying;
    isPlaying ? (videoItself.play() , playButton.textContent='❚ ❚')  : ( videoItself.pause(), playButton.textContent='►');
 }


 videoItself.addEventListener('timeupdate', updateProgressBar)
 function updateProgressBar (e) {
    let currentVideoCompletionRatio = (videoItself.currentTime /videoItself.duration)*100;
    progressBarFilled.style.flexBasis = `${currentVideoCompletionRatio}%`;
 }
 
progressBar.addEventListener("click",updateVideoTİme);
function updateVideoTİme (e) {
    let timeLine =  (e.offsetX / progressBar.offsetWidth) * videoItself.duration
    videoItself.currentTime= timeLine
}


backForSec.forEach(item => item.addEventListener("click",changeTime))
function changeTime(e) {
    console.log("before update", videoItself.currentTime );
    videoItself.currentTime += parseFloat(this.dataset.skip);
    console.log("after update", videoItself.currentTime );
}

const playRate = document.querySelector("[name='playbackRate']");
playRate.addEventListener("input", (e) =>  videoItself.playbackRate = e.currentTarget.value);

fullScreenBtn.addEventListener("click", ()=>videoItself.requestFullscreen());