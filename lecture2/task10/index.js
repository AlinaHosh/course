export const invertObject=object=>{
  const uniqueValues=[];
  const values=Object.values(object);

  for(const value of values){
    if(!uniqueValues.includes(value)){
      uniqueValues.push(value);
    }
  }

  if(uniqueValues.length<Object.values(object).length){

    return null;
  }else{
    const swapped = Object.entries(object).map(([key, value]) => [value, key]);

    return Object.fromEntries(swapped);
  }
};



