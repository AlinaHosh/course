export function getOperands(str){
      //let symbol=['+','*'];
      let index=str.indexOf(' ');
      return 'a: '+str.slice(0,index)+' b:'+str.slice(index+2);
      }