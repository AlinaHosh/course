import {getOperands} from '.'
describe('getOperands',()=>{
test('should return 1 and 2 from expressions',
    function(){
        const result =getOperands('1 + 2')
        expect(result).toBe('a: 1 b: 2')
    });
});
test('should return 1.2 and -3.4 from expressions',
    function(){
        const result1 =getOperands('1.2 * -3.4')
        expect(result1).toBe('a: 1.2 b: -3.4')
    });
test('should return 1 and 2 from expressions',
    function(){
        const result2 =getOperands('1 - 2')
        expect(result2).toBe('a: 1 b: 2')
    });
test('should return 1 and -2 from expressions',
    function(){
        const result3 =getOperands('1 - -2')
        expect(result3).toBe('a: 1 b: -2')
    });