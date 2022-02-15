export const fearNotLetter = strLetters => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const firstMatchLetter = alphabet.indexOf(strLetters[0]);
  
  for (const letter of strLetters) {

    if (strLetters[letter] !== alphabet[firstMatchLetter + letter]) {
      
      return alphabet[firstMatchLetter + strLetters];
    }
  }

  return;
};


