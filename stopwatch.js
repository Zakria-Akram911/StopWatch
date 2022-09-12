function Stopwatch() {

    let startTime, endTime, totalDuration = 0, runningCheck = 0;

    this.start = function start() {
        if (runningCheck > 0) {
            alert("Watch is already running");
        } else {
            startTime = new Date();
            runningCheck += 1;
        }
    }

    this.stop = function stop() {
        if (runningCheck === 0) {
            alert("Watch is not ruuning");
        } else {
            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            totalDuration += seconds;
            runningCheck = 0;
        }

    }

    this.reset = function reset() {
        startTime = null;
        endTime = null;
        totalDuration = 0;
        runningCheck = 0;
    }

    this.calculateTime = function () {
        return totalDuration;
    }
}

let stopwatch = new Stopwatch();

function loadEventListeners() {
    //To start the watch
    document.querySelector('.start').addEventListener("click", start);

    //To stop the watch
    document.querySelector('.stop').addEventListener("click", end);

    //To reset the watch
    document.querySelector('.reset').addEventListener("click", reset);

    //To calculate the time
    document.querySelector('.calculate-time').addEventListener("click", calculateTime);
}

loadEventListeners();

function start() {
    stopwatch.start();
}

function end() {
    stopwatch.stop();
}

function reset() {
    let timeToShow = '0';

    if(removePara()){
        document.querySelector('.paraToShowTime').innerHTML = ` ${timeToShow} s`;
    } else{
        appendPara();
        document.querySelector('.paraToShowTime').innerHTML = ` ${timeToShow} s`;
    }

}

function calculateTime() {
    if(removePara()){
        document.querySelector('.paraToShowTime').innerHTML = `${updateTime()} s`;
    } else{
        appendPara();
        document.querySelector('.paraToShowTime').innerHTML = `${updateTime()} s`;
    }
}

function appendPara() {
    paraToShowTime = document.createElement('p');
    paraToShowTime.classList.add('paraToShowTime');
    paraToShowTime.style.fontSize = "18px";
    document.querySelector('.calculated-time').appendChild(paraToShowTime);
}

function removePara() {
    let forCalculatedTimeDiv = document.querySelector('.calculated-time');
    for (i = 0; i < forCalculatedTimeDiv.childNodes.length; i++) {
        if (forCalculatedTimeDiv.childNodes[i].className === "paraToShowTime") {
            // console.log(forCalculatedTimeDiv.childNodes[i])
            return true;
        } 
    }
}

function updateTime() {
    return stopwatch.calculateTime();
}





