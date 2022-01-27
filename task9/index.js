export function vowelCount(str){
  let count=0;
  const vowels=/[aeiou]/gi;
  for(let i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase){
      str=str[i].toLowerCase;
    }
  }
  const checkVowels=str.match(vowels)
  return checkVowels!=null?checkVowels.length:0

}
