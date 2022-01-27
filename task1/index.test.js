import {calculate} from '.'
describe('calculate',()=>{
test('should return 11 when passed 4 and 7',
    function(){
        const result =calculate('+',4,7)
        expect(result).toBe(11)
    });
});
test('should return -3 when passed 15 and 18',
    function(){
        const result =calculate('-',15,18)
        expect(result).toBe(-3)
    });
test('should return 25 when passed 5 and 5',
    function(){
        const result =calculate('*',5,5)
        expect(result).toBe(25)
    });
test('should return 7 when passed 49 and 7',
    function(){
        const result =calculate('/',49,7)
        expect(result).toBe(7)
    });
test('should return 0 when passed 45 and 45',
    function(){
        const result =calculate(',',49,8)
        expect(result).toBe(0)
    });
