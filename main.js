import createPlaylist from "./utils/playlist.js";

let playingNow;

function loadSong(i){
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");

    const now = songs[i];

    elements.media.src = now.song_url;
    title.innerText = now.song_name;
    artist.innerText = now.artist_name;
    elements.song_img.src = now.caratula;
}


function playPause(){
    if(elements.play_btn.classList.contains("pause")){
        elements.media.pause();
        elements.play_btn.classList.remove("pause");
        elements.play_btn.classList.add("play");
        elements.play_btn.innerText = "Play"
    }else{
        elements.media.play();
        elements.play_btn.classList.remove("play");
        elements.play_btn.classList.add("pause");
        elements.play_btn.innerText = "Pause";
    }
}

