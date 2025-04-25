function range(from, to) {
  let r = range.methods;

  r.from = from;
  r.to = to;

  return r;
}

range.methods = {
  includes(x) {
    return this.from <= x && this.to >= x;
  },
};

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

Range.prototype.includes = function (x) {
  return this.from <= x && this.to >= x;
};

const r = range(1, 4);
console.log("-".repeat(20));
console.log("classes and object prototype", r.includes(2));
console.log("-".repeat(20));

const ran = new Range(3, 8);
console.log("classes, constructor and prototype methods", ran.includes(2));
console.log("-".repeat(20));
