export function checkPalindrome(str){
  if(str!=null){
     const strEdit=str.replace(/\W/g,'');
     const strToArray=strEdit.split('');
     const strReverse=strToArray.reverse();
     const strToString=strReverse.join('');
     const matches=strToString.match(/\w/g).join('');
     return strEdit.toLowerCase()===matches.toLowerCase();
   }
   else return true;
 }