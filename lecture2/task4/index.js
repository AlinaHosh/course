export function moveZeros(array){
  if(Array.isArray(array)===true){
    let arraySize=array.length;
    let arrayZeros=[];
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
}
