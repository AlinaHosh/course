import {getTime} from '.'
describe('getTime',()=>{
test('should return 09:00 time from sentence',
    function(){
        const result =getTime('Breakfast at 09:00')
        expect(result).toBe('09:00')
      });
});
test('should return 21:00 from sentence',
    function(){
        const result1 =getTime('Breakfast at 09:60, Dinner at 21:00')
        expect(result1).toBe('21:00')
      });
test('should return 09:59 from sentence',
    function(){
        const result2 =getTime('Breakfast at 09:59, Dinner at 21:00')
        expect(result2).toBe('09:59')
      });
test('should return empty from sentence',
    function(){
        const result2 =getTime('Breakfast and Dinner')
        expect(result2).toBe('')
      });
test('should return empty from sentence',
    function(){
        const result2 =getTime('Breakfast 9 and Dinner')
        expect(result2).toBe('')
        });
        test('should return empty from sentence',
    function(){
        const arg=''
        const result2 =getTime(arg)
        expect(result2).toBe('')
        });
