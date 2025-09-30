import createPlaylist from "./utils/playlist.js";

const songs = [
        {
            song_name : "cancion CHIDA",
            artist_name: "artista 1",
            song_url: "./media/song.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 2",
            artist_name: "artista 1",
            song_url: "./media/song_2.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 3",
            artist_name: "artista 3",
            song_url: "./media/song_3.mp3",
            caratula: "https://picsum.photos/200"
        },
    ];

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

