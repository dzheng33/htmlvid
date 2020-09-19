const videoElement = document.getElementById('video');
const transcriptElement = document.getElementById('transcript');
const captionElement = document.querySelectorAll('span');


// Highlight //

$('#video').on('timeupdate', () => {
        for (let i = 0; i < captionElement.length; i++) {
                let time = videoElement.currentTime;
                let start = captionElement[i].getAttribute(
                        'data-start');
                let end = captionElement[i].getAttribute(
                        'data-end');
                if (time > start && time < end) {
                        captionElement[i].className =
                                'highlight';
                } else {
                        captionElement[i].className = "";
                }
        }
});



// Click //

transcriptElement.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {
                videoElement.currentTime = event.target.getAttribute(
                        'data-start');
        }
});