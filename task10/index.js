export function alphabetPosition(str){
  if(str!=null){
    const strToLowerCase = str.toLowerCase();
    const str1=strToLowerCase.match(/\D/gi);
    const str2=str1.join('');
    let strNew = "";
    for (let i = 0; i < str1.length; i++) {
      if(str2.charCodeAt(i) - 96 > 0 && str2.charCodeAt(i) - 96 <= 26) {
        strNew+= str2.charCodeAt(i) - 96 + ' ';
      }
    }
    return strNew.trim();
  }
}