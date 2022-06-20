const {Level} = require("./world/level");

let level = new Level()

function run() {
    // Compute delta and elapsed time
    var time = performance.now();
    var delta = time - lastTime;

    // Run all the systems
    level.execute(delta, time);
    lastTime = time;
    requestAnimationFrame(run);
}

var lastTime = performance.now();
run();