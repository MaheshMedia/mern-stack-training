let ar1 = prompt('enter an array 1')
    .split(' ')
    .map((el) => +el),
  ar2 = prompt('enter an array 2')
    .split(' ')
    .map((el) => +el),
  count = 0;
let run = (ar1, ar2) => {
  for (let element of ar1) {
    if (ar2.indexOf(element) > -1) {
      count++;
    }
  }
  return count;
};

console.log(run(ar1, ar2));
