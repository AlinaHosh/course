export function getOperands(str){
      let index=str.indexOf(' ');
      return 'a: '+str.slice(0,index)+' b:'+str.slice(index+2);
      }