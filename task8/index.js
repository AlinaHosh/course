export function countOccurences(str,letter){
  let count=0;
  const letterLowerCase=letter.toLowerCase();
  const letterUpperCase=letter.toUpperCase();
for(let i=0;i<str.length;i++){

    if(str[i]==letterUpperCase || str[i]==letterLowerCase)
      count++;
}
  return count;
}
