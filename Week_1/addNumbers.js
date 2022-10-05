// node addNumbers 1 2 3 4 5 
// 15

const array = process.argv.slice(2);
console.log('line 5 ', array);

const addNumbers = function(array) {
  let sum = 0;

  // for (let i in array) {
  //   sum += Number(array[i]);
  // }

  for (let val of array) {
    sum += Number(val);
  }

  console.log('THE VALUE IS : ', sum);
};

addNumbers(array);