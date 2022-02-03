export let fearNotLetter=function(strLetters){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const firstMatchLetter = alphabet.indexOf(strLetters[0]);
  for (let i = 0; i < strLetters.length; i++) {
    if (strLetters[i] !== alphabet[firstMatchLetter + i]) {
      return alphabet[firstMatchLetter + i];
    }
  }
  return;
};


