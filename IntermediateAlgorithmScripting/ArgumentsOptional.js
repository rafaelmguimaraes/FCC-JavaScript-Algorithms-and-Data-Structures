function addTogether() {
  if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number' ) {
    return arguments[0] + arguments[1];
  }
  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    return (num) => {
      if (typeof num === 'number') {
        return arguments[0] + num;
      }
      else return undefined;
    }
  }
  return undefined;
}

console.log(addTogether(2,3));

var sumTwoAnd = addTogether(2);

console.log(sumTwoAnd(3)); 

console.log(addTogether(2)([3]));