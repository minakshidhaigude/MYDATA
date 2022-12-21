function countDown(n) {
  for (var i = n; i > 0; i--) {
    console.log(i);
  }
}
//countDown(3);
//recursion
function recursiveCountDown(n) {
  if (n === 0) return;
  console.log(n);
  recursiveCountDown(n - 1);
}
recursiveCountDown(3);

function calculateTotalRecursion(n, total = 0) {
  if (n === 0) return total;
  return calculateTotalRecursion(n - 1, (total += n));
}
console.log("Calculating total recursion", calculateTotalRecursion(3));
