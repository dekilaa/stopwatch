const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const refreshButton = document.querySelector('#refresh');
const circle = document.querySelector('circle');

const size = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',size);

let duration;


const timer = new Timer(
    durationInput,
    startButton,
    pauseButton, 
    refreshButton,
    {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
            size * timeRemaining / duration - size
        );
        
    },
    onComplite(){
        console.log(('Tick is complited'));
    }
});
