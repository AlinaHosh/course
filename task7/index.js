export function swapCase(str){
  if(str!=null){
    let strAfterSwap='';
    const regexp=/\d+\w+/g;
    const numbers=str.match(regexp); 
    for(let i=0;i<str.length;i++){   
      if(str[i]==str[i].toUpperCase())
        strAfterSwap+=str[i].toLowerCase();
        else
        strAfterSwap+=str[i].toUpperCase();       
      }
      return strAfterSwap;
    }
}