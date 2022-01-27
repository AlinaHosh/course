import {alphabetPosition} from '.'
describe('vowelCount',()=>{
test('should return "4" vowels in string',
    function(){
        const result =alphabetPosition('b')
        expect(result).toBe('2')
    });
});
test('should return "4" vowels in string',
    function(){
        const result =alphabetPosition('aabb')
        expect(result).toBe('1 1 2 2')
    });
test('should return "4" vowels in string',
    function(){
        const result =alphabetPosition('a a bb')
        expect(result).toBe('1 1 2 2')
    });
test('should return "4" vowels in string',
    function(){
        const result =alphabetPosition('a a bb7 8')
        expect(result).toBe('1 1 2 2')
    });