import {vowelCount} from '.'
describe('vowelCount',()=>{
test('should return "4" vowels in string',
    function(){
        const result =vowelCount('unit testing')
        expect(result).toBe(4)
    });
});
test('should return "0" vowels in string',
    function(){
        const result =vowelCount('nt tstng')
        expect(result).toBe(0)
    });
test('should return "4" vowels in string',
    function(){
        const result =vowelCount('uNit testing')
        expect(result).toBe(4)
    });
test('should return "5" vowels in string',
    function(){
        const result =vowelCount('abracadabra')
        expect(result).toBe(5)
    });
test('should return "2" vowels in string',
    function(){
        const result =vowelCount('letter')
        expect(result).toBe(2)
    });
test('should return "1" vowels in string',
    function(){
        const result =vowelCount('toy')
        expect(result).toBe(1)
    });
test('should return "0" vowels in string',
    function(){
        const result =vowelCount('555')
        expect(result).toBe(0)
    });
test('should return "0" vowels in string',
    function(){
        const result =vowelCount('Toy')
        expect(result).toBe(0)
    });
test('should return "3" vowels in string',
    function(){
        const result =vowelCount('toy and dog')
        expect(result).toBe(3)
    });