//MAP
const arr = [1, 2, 3, 4];
const result = arr.map((num) => num * 2);
console.log(result); // [2,4,6,8]

// polyfill for map

Array.prototype.myMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const result1 = arr.myMap((num) => num * 3);
console.log(result1);
