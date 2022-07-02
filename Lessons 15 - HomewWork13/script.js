const Clock = function () {
    this.start = function () {
         function currentClock () {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            if (hours < 10) {
                hours = '0' + hours
            }
            if (minutes < 10) {
                minutes = '0' + minutes
            }
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            document.querySelector('.js--clock').innerHTML = `${hours} : ${minutes} : ${seconds}`
        }

        this.timer = setInterval(currentClock, 1000);
    }
}

Clock.prototype.stop = function () {
    clearInterval(this.timer);
}
const clock = new Clock();

const bindStop = clock.stop.bind(clock);

clock.start();

document.querySelector('.js--stop').addEventListener('click', bindStop);


