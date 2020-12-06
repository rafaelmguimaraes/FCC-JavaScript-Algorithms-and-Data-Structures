function palindrome(str) {
  // remove all non-alphanumeric characters and set lower case
  const newStr =  str.replace(/[\W_]+/gi, '').toLowerCase();
  // reverse word after regex
  const reverseStr = newStr.split('').reverse().join(''); 
  // compare strings
  return newStr === reverseStr;
}



console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|_/|four"));
console.log(palindrome("race car"));
