function rot13(str) {
  const strDecoded = [];
  const regEx = /[A-Z]/;
  
  str.split("").forEach(char => {
    if (regEx.test(char)) {
      strDecoded.push(((char.charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      strDecoded.push(char.charCodeAt());
    }
  });

  return String.fromCharCode.apply(String, strDecoded);
}


console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP

console.log(rot13("SERR CVMMN!")); // should decode to FREE PIZZA!

console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE?

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.