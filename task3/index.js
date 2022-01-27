export function createPhoneNumber(numbers){
      if(numbers.length==10){
            const part1=numbers.slice(0,3).join('');
            const part2=numbers.slice(3,6).join('');
            const part3=numbers.slice(6).join('');
            const num='('+part1+') '+part2+'-'+part3;
            return num;    
      }
      else return 'not right number';
}