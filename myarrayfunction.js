Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; ++i) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; ++i) {
    if (this.hasOwnProperty(i)) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

const arr = [2, 3, 4];

const double = arr.myMap((num) => num * 2);
const filtered = arr.myFilter((num) => num > 2);

console.log(double, filtered);
