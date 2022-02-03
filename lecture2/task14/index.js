export let frankenSplice=function(array1,array2,position){
  const copyArray2=array2;
  copyArray2.splice(position,0,...array1);
  return copyArray2;
};


