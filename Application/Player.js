
export default{
    _post_songs: [],
    _next_songs: [],
    getNextSong: function(){
        return playlist.pop();
    }
}