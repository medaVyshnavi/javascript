const expensive = () => {
  console.count("throttled");
};

const normal = () => {
  console.count("normal");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 2000);

window.addEventListener("resize", betterExpensive);
window.addEventListener("resize", normal);
