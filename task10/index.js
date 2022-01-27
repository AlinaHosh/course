export function alphabetPosition(text){
  let str = text.toLowerCase();
  let strNew = "";
  for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
        strNew+= str.charCodeAt(i) - 96 + ' ';
      }
    }
    return strNew.trim();
}
