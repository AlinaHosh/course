export function swapCase(str){
    let result='';
    let numbersInStr=str.match(/\d+/g);
    if(numbersInStr!=null){
      for(let i=0;i<numbersInStr.length;i++){
        return numbersInStr[i];
      }
    }
    for(let i=0;i<str.length;i++){
      if(str[i]==str[i].toUpperCase())
        result+=str[i].toLowerCase();
        else
        result+=str[i].toUpperCase();       
      }
      return result;
}
