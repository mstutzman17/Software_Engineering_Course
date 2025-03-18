const oneTimeTasks = []
let monitoringTaskId

function addOneTimeTask (func, delay) {
    oneTimeTasks.push({func, delay});
}

function runOneTimeTasks () {
    oneTimeTasks.forEach(task => {
        setTimeout(task.func, task.delay);
    });
}

function startMonitoring (interval = 5000) {
    monitoringTaskId = setInterval(() => {
        console.log("Monitoring ongoing. . .");
    }, interval);
}

function stopMonitoring() {
    if (monitoringTaskId) {
        clearInterval(monitoringTaskId);
        monitoringTaskId = null;
        console.log('Monitoring stopped.')
    }
}

function startCountdown(duration) {
    let timeRemaining = duration;
    let countdownTaskId = setInterval(() => {
        if(timeRemaining > 0) {
            console.log(`Time remaining: ${timeRemaining}s`);
            timeRemaining--;
        } else {
            clearInterval(countdownTaskId);
            console.log("Liftoff!");
        }
    }, 1000);
}

addOneTimeTask(() => {
    console.log('Pre-launch system check compoleted.');
    startMonitoring();
}, 5000);

setTimeout(runOneTimeTasks, 1000);

addOneTimeTask(() => {
    console.log('Starting countdown. . .');
    startCountdown(10);
}, 15000);

addOneTimeTask(() => {
    stopMonitoring();
}, 25000);

setTimeout(runOneTimeTasks, 1000)