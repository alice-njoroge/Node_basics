function log(message) {
  console.log(message);
}

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

module.exports.log = log;
module.exports.timer = timerFunc;
