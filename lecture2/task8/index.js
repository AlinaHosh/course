const addProperties = (state,properties) => {
  
  for(const index of properties){
    state[index] = properties[index];
  }
};   

const removeProperties= (state,properties)=> {
  
  for(const index of properties){
    delete state[index];
  }
};

const clear = state=>{
    
  for(const index of state){
    delete state[index];
  }
};

const checkTransform=(state,transform)=>{

  switch(transform.operation){
    case 'addProperties':{
      addProperties(state,transform.properties);
    }
    
      break;
    
    case 'removeProperties':{
      removeProperties(state,transform.properties);
    }
    
      break;
    
    case 'clear':{
      clear(state);
    }
        
      break;
  }
};

export const transformState=(state,transforms)=>{

  for(const transform of transforms){
    checkTransform(state,transform);  
  }

  return state;
};


