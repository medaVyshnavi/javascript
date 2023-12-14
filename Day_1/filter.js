//Filter
const arr = [1, 2, 3, 4];
const filterResult = arr.filter((num) => num > 2);
console.log(filterResult, 22);

//polyfill
Array.prototype.filter = function (cb) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) array.push(this[i]);
  }
  return array;
};
const result = arr.filter((num) => num > 2);
console.log(result, 44);
