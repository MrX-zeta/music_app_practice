import * as elements from "./html_elements.js";
import Player from "./Player.js";

export default function(){
    window.addEventListener('DOMContentLoaded', () => {
    playingNow = playlist.pop()
    loadSong(playingNow);
})

elements.media.addEventListener('loadmetadata', () => {
    progress_bar.max = 100;
    progress_bar.value = 0;
    if(play_btn.classList.contains("pause")){
        media.play();
    }
});

elements.media.addEventListener('mediaupdate', function(){
    const progress_value = (this.currentTime / this.duration) * 100;
    elements.progress_bar.value = progress_value;
})

elements.media.ontimeupdate = function updateProgressBar() {
    const progress_value = (this.currentTime / this.duration) * 100;
    elements.progress_bar.value = progress_value;
}

elements.lastest.addEventListener('click', function(){
    if(!last.length == 0){
        playlist.push(playingNow);
        playingNow = last.pop();
        loadSong(playingNow)
    }
});


elements.progress_bar.addEventListener('input', function() {
    media.currentTime = (this.value / 100) * media.duration;
});

elements.forward.addEventListener('click', function(){
    if(!playlist.length == 0){
        last.push(playingNow);
        playingNow = playlist.pop();
        loadSong(playingNow);
    }
});

elements.play_btn.addEventListener("click", playPause);

elements.progress_bar.oninput = function() {
    elements.media.currentTime = (this.value/100) * elements.media.duration;
}
}