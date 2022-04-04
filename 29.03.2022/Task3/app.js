let num = parseInt(prompt('enter a number')),
  [lb, ub] = prompt('enter range')
    .split(' ')
    .map((el) => +el);

console.log(num, lb, ub);

let run = (num, lb, ub) => (num > lb && num < ub ? true : false);

console.log(run(num, lb, ub));
