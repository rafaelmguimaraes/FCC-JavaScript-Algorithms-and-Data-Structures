function truthCheck(collection, pre) {
  return collection.every(currentObject => (currentObject.hasOwnProperty(pre) && currentObject[pre]));
    
  /*   {
    console.log(currentObject);
    console.log(currentObject.hasOwnProperty(pre));
    return currentObject.hasOwnProperty(pre);
  } */
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));