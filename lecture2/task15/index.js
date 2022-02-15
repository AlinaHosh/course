export const squareList = arrayNumbers => {
  const squareArray = arrayNumbers.reduce((total,number)=>{   
      
    if(Math.sign(number) === 1 && Number.isInteger(number) === true){
      const toPow = Math.pow(number,2);

      total.push(toPow);
    }

    return total;
  },[]);

  return squareArray;
};



