export const isPrime=number=>{

  if(Math.sign(number)===1 && number>1 && Number.isNaN(number)===false){
    for(let i=2;i<number;i++){
      if(number%i==0){
        return false; 
      }
    }

    return true;
  }

  return false;
};
  