export function getOperands(str){
      if(str!=null){
          const index=str.indexOf(' ');
          return 'a:'+str.slice(0,index)+' b:'+str.slice(index+3);
      }
  }