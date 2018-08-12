const player = function () {
    const videoMain = document.getElementById('video-main');

    let playVideo = () => {
        videoMain.play();
    }
    
    let isVideoPlaying = () => {
        return !videoMain.paused;
    }
    
    let pauseVideo = () => {
        videoMain.pause();
    }
    
    let getVideoDuration = () => {
        return videoMain.duration;
    }
    
    let getVideoCurrentTime = () => {
        return videoMain.currentTime;
    }

    return {
        playVideo,
        isVideoPlaying,
        pauseVideo,
        getVideoCurrentTime,
        getVideoDuration
    }
}();