const wholePlayer = document.querySelector(".player");
const videoItself = document.querySelector(".player__video");
const playButton  = document.querySelector('.player__button');
const volumeChanger = document.querySelector("[name='volume']");
const progressBarFilled = document.querySelector('.progress__filled');
const progressBar = document.querySelector('.progress');
let isPlaying = false ;


playButton.addEventListener("click",playOrPause);
 function playOrPause (e) {
    isPlaying = !isPlaying;
    isPlaying ? (videoItself.play() , playButton.textContent='❚ ❚')  : ( videoItself.pause(), playButton.textContent='►');
 }

 volumeChanger.addEventListener("input",(e)=> {
    videoItself.volume = (e.currentTarget.value);
});

 videoItself.addEventListener('click', playOrPause);
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



