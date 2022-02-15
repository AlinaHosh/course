export const moveZeros=array=>{

  if(Array.isArray(array)){
    let arraySize=array.length;
    const arrayZeros=[];

    for(let i=0;i<arraySize;i++){
      if(array[i]===0){
        array.splice(i,1);
        arrayZeros.push(0);
        arraySize--;
        i--;
      }
    }

    return array.concat(arrayZeros);
  }
};