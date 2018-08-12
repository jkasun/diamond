let aspectRatio = null;

$(() => {
    let hideEvent = null;

    $('#video-main').bind('loadedmetadata', function () {
        let width = this.videoWidth;
        let height = this.videoHeight;

        aspectRatio = width / height;

        resizeVideo();
        playButton.startAnimation();
    });

    $('#video-main').mouseover(function () {
        clearTimeout(hideEvent);
        playButton.show();
    });

    $('#video-main').mouseleave(function () {
        clearTimeout(hideEvent);

        hideEvent = setTimeout(function () {
            playButton.hide();
        }, 5000)
    });

    $(window).resize(function () {
        setTimeout(() => {
            resizeVideo();
        }, 100);
    });
});

let getVideoAspectRation = () => {
    return aspectRatio;
}

let resizeVideo = () => {
    let wrapperWidth = $('.video-wrapper').width();
    let wrapperHeight = $('.video-wrapper').height();

    let ratio = wrapperWidth / wrapperHeight;

    if (ratio < aspectRatio) {
        $('#video-main').attr('width', wrapperWidth);
        $('#video-main').attr('height', '');
    } else {
        $('#video-main').attr('width', '');
        $('#video-main').attr('height', wrapperHeight);
    }
};