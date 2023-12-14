//Reduce
const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result); // 10

//polyfill
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const result1 = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(result); // 10
