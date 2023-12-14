// addSix(10); // 16
// addSix(21); // 21+6 = 27

function createBase(initial) {
  return function (num) {
    console.log(num + initial);
  };
}

var addSix = createBase(5);
addSix(10); // 16
addSix(21); // 21+6 = 27
