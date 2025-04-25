console.log("-".repeat(20));
console.log('"" instanceof of String constructor', "" instanceof String);
console.log("null instanceof of String constructor", null instanceof String);
console.log("-".repeat(20));

//how to create a instanceof function in js
function myinstanceof(from, to) {
  if (from == null || typeof from !== "object") {
    return false;
  }

  if (from?.constructor == to) return true;
  // let prototype = Object.getPrototypeOf(from);
  //
  // while (prototype) {
  //   if (prototype === to.prototype) {
  //     return true;
  //   }
  //   prototype = Object.getPrototypeOf(prototype);
  // }
  return false;
}

let str = new String("hi");
let err = new Error("message");
console.log("Instanceof", "-".repeat(20));
console.log("my instanceof result Error", myinstanceof(err, Error));
console.log("my instanceof result String", myinstanceof(str, String));
console.log("my instanceof result String", myinstanceof("", String));
console.log("my instanceof result String", myinstanceof(null, String));
console.log("-".repeat(20));

//performance in js
