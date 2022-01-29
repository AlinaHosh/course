export function vowelCount(str){
  if(str!=null){
    for(let i=0;i<str.length;i++){
      if(str[i]!=str[i].toUpperCase()){      
  const vowels=/[aeiou]/g;
  const checkVowels=str.match(vowels);
  return checkVowels!=null?checkVowels.length:0;
      }
      return 0;
    }
  }
}