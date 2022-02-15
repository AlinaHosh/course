export const createUrl=(str, objects)=>{
    str=str.replace('{id}',objects.id);
    str=str.replace('{list}',objects.list);
  
    return str;
  };
        