const video = document.querySelector("#video");
const captions = document.querySelector("#captions");
const sentence = document.querySelectorAll('span');

$('#video').on('timeupdate', () => {
        for (let i = 0; i < sentence.length; i++) {
                let time = video.currentTime;
                let start = sentence[i].getAttribute('data-start');
                let end = sentence[i].getAttribute('data-end');
                if (time > start && time < end) {
                        sentence[i].className ='highlight';
                } else {
                        sentence[i].className = "";
                }
        }
});

captions.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {
                video.currentTime = event.target.getAttribute('data-start');
        }
});