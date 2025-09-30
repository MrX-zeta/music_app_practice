import * as elements from "./html_elements.js";

export default function(){
    window.addEventListener('DOMContentLoaded', () => {
    player.initianlizePlayer();
    const playingNow = songs[player.actual_song];
})

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

elements.lastest.addEventListener('click', function(){
    if(!last.length == 0){
        playlist.push(playingNow);
        playingNow = last.pop();
        loadSong(playingNow)
    }
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