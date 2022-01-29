import {swapCase} from '.'
describe('swapCase',()=>{
test('should return "wOW"',
    function(){
        const result =swapCase('Wow')
        expect(result).toBe('wOW')
    });
});
test('should return "75386"',
    function(){
        const result =swapCase('75386')
        expect(result).toBe('75386')
    });
test('should return "AbC"',
    function(){
        const result =swapCase('aBc')
        expect(result).toBe('AbC')
    });
test('should return "gOOd"',
    function(){
        const result =swapCase('GooD')
        expect(result).toBe('gOOd')
    });
test('should return "hello"',
    function(){
        const result =swapCase('hello')
        expect(result).toBe('HELLO')
    });
test('should return "JAVASCRIPT"',
    function(){
        const result =swapCase('JAVASCRIPT')
        expect(result).toBe('javascript')
    });
test('should return "java Script"',
    function(){
        const result =swapCase('JAVA sCRIPT')
        expect(result).toBe('java Script')
    });
test('should return empty',
    function(){
        const result =swapCase()
        expect(result).toBe()
    });
test('should return "12 MONTHS"',
    function(){
        const result =swapCase('12 months')
        expect(result).toBe('12 MONTHS')
    });
test('should return "12MONTHS"',
    function(){
        const result =swapCase('12months')
        expect(result).toBe('12MONTHS')
    });
test('should return "MONTHS 12"',
    function(){
        const result =swapCase('months 12')
        expect(result).toBe('MONTHS 12')
    });