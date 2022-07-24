//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function anagram(first, second) {
  if (first.length !== second.length) {
    //if the length of the two strings are not the same, they are not anagrams
    return false;
  }
  const lookup = {}; //create an empty object
  //loop through the first string
  for (let i = 0; i < first.length; i++) {
    let letter = first[i]; //get the letter at index i
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1); //if the letter is in the object, increment the value by 1, otherwise set the value to 1
  }
  //loop through the second string
  for (let i = 0; i < second.length; i++) {
    let letter = second[i]; //get the letter at index i
    if (!lookup[letter]) {
      //if the letter is not in the object
      return false;
    } else {
      //if the letter is in the object
      lookup[letter] -= 1;
    }
  }
  return true;
}
