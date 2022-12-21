//Higher Order Function
function x(fn) {
  fn();
}
function y() {
  console.log("Hello from y");
}
x(y);

function cal_square(x) {
  return x * 2;
}

function addByOne(y) {
  return y + 1;
}
const data = [10, 20, 30, 40, 5];
const calculate_square = function (d, calculate) {
  const output = [];
  for (let i = 0; i < d.length; i++) {
    //output.push(d[i] * 2);
    output.push(calculate(d[i]));
  }
  return output;
};
console.log(calculate_square(data, cal_square));
console.log(calculate_square(data, addByOne));
console.log(data.map(addByOne));
