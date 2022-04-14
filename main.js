"use strict";
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("StopWatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("StopWatch has not started.");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
const stopwatch = new StopWatch();
// console.log(stopwatch.start());
// console.log(stopwatch.stop());
// console.log(stopwatch.duration);
// console.log(stopwatch.reset);
