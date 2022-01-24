import {getTime} from '.'
describe('sum',()=>{
test('should return 4 when passed 2 and 2',
    function(){
        const result =getTime('Breakfast at 09:00')
        expect(result).toBe('09:00')
        const result1 =getTime('Breakfast at 09:60, Dinner at 21:00')
        expect(result1).toBe('21:00')
        const result2 =getTime('Breakfast at 09:59, Dinner at 21:00')
        expect(result2).toBe('09:59')
      });
});