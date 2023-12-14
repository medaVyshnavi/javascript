// used for performance optimization and limiting the rate of api calls or function execution.

const expensive = () => {
  console.log("throttled");
};

const normal = () => {
  console.log("normal");
};
function throttle(func, limit) {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      func(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

const betterExperience = throttle(expensive, 1000);

window.addEventListener("resize", betterExperience);
window.addEventListener("resize", normal);
