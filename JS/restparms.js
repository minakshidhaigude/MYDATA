function sum(...values) {
  let sum = 0;
  values.map((d) => (sum += d));
  console.log("SUM:", sum);
}
sum(2, 3);
sum(45, 2, 3, 4, 5);
