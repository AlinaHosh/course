export function createPhoneNumber(numbers){
      if(numbers.length==10){
            let part1=numbers.slice(0,3);
            let part2=numbers.slice(3,6);
            let part3=numbers.slice(6);
            let num='('+part1+') '+part2+'-'+part3;
            return num.replace(/,/g,'');      
      }
      else return 'not right number';
}