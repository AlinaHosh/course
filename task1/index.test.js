import {sum} from '.'
describe('sum',()=>{
test('should return 11 when passed 4 and 7',
    function(){
        const result =sum(4,7)
        expect(result).toBe(11)
    });
});
import {minus} from '.'
describe('minus',()=>{
test('should return -3 when passed 15 and 18',
    function(){
        const result =minus(15,18)
        expect(result).toBe(-3)
    });
});
import {multiply} from '.'
describe('multiply',()=>{
test('should return 25 when passed 5 and 5',
    function(){
        const result =multiply(5,5)
        expect(result).toBe(25)
    });
});
import {divide} from '.'
describe('divide',()=>{
test('should return 7 when passed 49 and 7',
    function(){
        const result =divide(49,7)
        expect(result).toBe(7)
    });
});
