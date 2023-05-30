const randomArr = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(`An array of random dice rolls:`);
console.log(randomArr);
