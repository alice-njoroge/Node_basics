/**
 * Message log function
 * @param {*} message
 */
function log(message) {
  console.log(message);
}

/**
 * Timer function
 */
const timerFunc = function() {
  let time = 0;
  let timer = setInterval(() => {
    if (time < 10) {
      time += 2;
      console.log(time + "seconds have passed");
    } else {
      clearInterval(timer);
    }
  }, 2000);
};

// array ninja function
let counter = function(arr) {
  return "there are " + arr.length + " ninjas here";
};

// exports
module.exports.log = log;
module.exports.timer = timerFunc;
module.exports.ninjas = counter;
