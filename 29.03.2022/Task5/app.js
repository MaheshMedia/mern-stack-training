let ob1 = {
    name: 'josh',
    age: 22,
    sad: true,
  },
  ob2 = {
    name: 'josh',
    age: 22,
    sad: true,
  };

let run = (ob1, ob2) => {
  if (Object.keys(ob1).length === Object.keys(ob2).length) {
    for (let key of Object.keys(ob1)) {
      if (ob1[key] != ob2[key]) return false;
    }
    return true;
  } else return false;
};

console.log(run(ob1, ob2));
