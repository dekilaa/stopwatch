class Timer {
    constructor(durationInput, startButton, pauseButton, refreshButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.refreshButton = refreshButton;
        
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplite = callbacks.onComplite;
            this.circle = circle;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.refreshButton.addEventListener('click', this.refresh);
    };

     start = () => {
         if (this.onStart) {
            this.onStart(this.timeRemaining)
         }
        this.tick()
        this.indervalId = setInterval(this.tick, 10);
    
    };

    pause = () => {
        clearInterval(this.indervalId);
    };

    tick = () => {
        
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplite){
                this.onComplite()
            }
        } else {
           this.timeRemaining  = this.timeRemaining - 0.01;
           if (this.onTick){
            this.onTick(this.timeRemaining)
        }
        }  
    };
     
    refresh = () => {
        location.reload();
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    };
}
