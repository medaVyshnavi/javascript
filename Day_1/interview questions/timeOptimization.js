// time optimization using closure

function find() {
  let a = [];
  for (i = 0; i < 100000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const y = find();
console.time("6");
y(6);
console.timeEnd("6");
console.time("12");
y(12);
console.timeEnd("12");
