export let invertObject=function(object){
  const swapped = Object.entries(object).map(([key, value]) => [value, key]);
  return Object.fromEntries(swapped);
};


