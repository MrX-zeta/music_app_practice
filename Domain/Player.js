const player = {
    _post_songs: [],
    _next_songs: [],
    _controller: document.getElementById("media"),
    _progress_bar: document.getElementById("progress"),
    _actual_song: null,
    
    initianlizePlayer() {
        this._actual_song = this._next_songs.pop();
        this._progress_bar.max = 100;
        this._progress_bar.value = 0;
        this.initializeControlMedia(false);
        
        this._controller.addEventListener('loadedmetadata', function() {
            const progress_value = (this.currentTime / this.duration) * 100;
            player._progress_bar.value = progress_value;
        });
        
        this._progress_bar.addEventListener('input', function() {
            player._controller.currentTime = (this.value / 100) * player._controller.duration;
        });
    },
    initializeControlMedia: function(play) {
        this._progress_bar.value = 0;
        if (play) {
            this._controller.play();
        }
    },

    getNextSong: function() {
        return playlist.pop();
    }
};

export default player;