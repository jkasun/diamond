let playButton = function () {
    const playButton = document.getElementById('play-button');

    let startAnimation = () => {
        // Initial Setup
        const c = playButton.getContext('2d');

        let lastRad = 0;

        // Configurations
        let zoomLevel = 2;

        let draw = () => {

            c.clearRect(0, 0, window.innerWidth, window.innerHeight);

            lastRad = Math.PI * 2 * player.getVideoCurrentTime() / player.getVideoDuration();

            // Outer line 02
            c.beginPath();
            c.strokeStyle = '#fff'
            c.lineWidth = 1;
            c.arc(48 * zoomLevel, 48 * zoomLevel, 44 * zoomLevel, 0, 2 * Math.PI);
            c.stroke();

            // Timer Status
            c.beginPath();
            c.strokeStyle = '#fff'
            c.lineWidth = 3 * zoomLevel;
            c.arc(48 * zoomLevel, 48 * zoomLevel, 41 * zoomLevel, 0, lastRad);
            c.stroke();

            if (player.isVideoPlaying()) {
                c.beginPath();
                c.rect((48 - 15) * zoomLevel, (48 - 15) * zoomLevel, 10 * zoomLevel, 30 * zoomLevel);
                c.stroke();

                c.rect((48 + 15 - 10) * zoomLevel, (48 - 15) * zoomLevel, 10 * zoomLevel, 30 * zoomLevel);
                c.stroke();
                c.closePath();
            } else {
                c.beginPath();
                c.moveTo((48 - 10) * zoomLevel, (48 - 20) * zoomLevel);
                c.lineTo((48 - 10) * zoomLevel, (48 + 20) * zoomLevel);
                c.lineTo((48 + 20) * zoomLevel, 48 * zoomLevel);
                c.closePath();
            }

            c.fillStyle = "#fff";
            c.fill();

            setTimeout(() => {
                c.restore();
                window.requestAnimationFrame(draw);
            }, 1000);
        }

        $(playButton).click(() => {
            if (player.isVideoPlaying()) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }

            window.requestAnimationFrame(draw);
        })

        window.requestAnimationFrame(draw);
    }

    let show = () => {
        $(playButton).css('display', 'block');
    }

    let hide = () => {
        $(playButton).css('display', 'none')
    }

    return {
        startAnimation,
        show,
        hide
    }
}();