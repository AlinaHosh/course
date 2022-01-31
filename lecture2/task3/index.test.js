import {isPrime} from '.'
describe('isPrime',()=>{
test('should return true due to number 2',
    function(){
        const result =isPrime(2)
        expect(result).toBe(true)
    });
});
test('should return true due to number 3',
    function(){
        const result =isPrime(3)
        expect(result).toBe(true)
    });
test('should return false due to number 1',
    function(){
        const result =isPrime(1)
        expect(result).toBe(false)
    });
test('should return true due to number 73',
    function(){
        const result =isPrime(73)
        expect(result).toBe(true)
    });
test('should return false due to number -1',
    function(){
        const result =isPrime(-1)
        expect(result).toBe(false)
    });
test('should return false due to number 75',
    function(){
        const result =isPrime(75)
        expect(result).toBe(false)
    });
test('should return false due to number 12',
    function(){
        const result =isPrime(12)
        expect(result).toBe(false)
    });
test('should return false due to number 0',
    function(){
        const result =isPrime(0)
        expect(result).toBe(false)
    });
test('should return false due to not a number',
    function(){
        const result =isPrime('a')
        expect(result).toBe(false)
    });