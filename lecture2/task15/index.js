export let squareList=function(arrayNumbers){
  const numbersFiltered=arrayNumbers.filter(function(i){   
      if(i>0 && Number.isInteger(i)){
        return i;
      }
  });
  const square=numbersFiltered.map((num)=>num*num);
  return square;
};


