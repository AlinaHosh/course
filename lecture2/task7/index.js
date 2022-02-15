export const invertColor=color=>{
    const strToLowerCase = color.toLowerCase();
    const arrayColor=strToLowerCase.split('');
    const number=[];
    const letter=['a','b','c','d','e','f'];
  
    for(let i=0;i<10;i++){
      number.push(i);
    }
  
    const alphabetHex=number.concat(letter);
    const invertedColor=['#'];
    const reverseHex=alphabetHex.slice().reverse();
      
    for (let i=0;i<arrayColor.length;i++){
          
      for(let j=0;j<alphabetHex.length;j++){       
              
        if( arrayColor[i]==alphabetHex[j]){                   
          invertedColor.push(reverseHex[j]);
        }
      } 
    }
      
    return invertedColor.join('');
  };



