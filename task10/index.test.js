import {alphabetPosition} from '.'
describe('alphabetPosition',()=>{
test('should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" from "The sunset sets at twelve o clock." ',
    function(){
        const result =alphabetPosition("The sunset sets at twelve o' clock.")
        expect(result).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
    });
});
test('should return "1 1 2 2" from string "aabb"',
    function(){
        const result =alphabetPosition('aabb')
        expect(result).toBe('1 1 2 2')
    });
test('should return "1 1 2 2" from string "a a bb"',
    function(){
        const result =alphabetPosition('a a bb')
        expect(result).toBe('1 1 2 2')
    });
test('should return "1 1 2 2" from string "a a bb7 8"',
    function(){
        const result =alphabetPosition('a a bb7 8')
        expect(result).toBe('1 1 2 2')
    });
test('should return "1 1 2 2" from string "a a bb7 8"',
    function(){
        const result =alphabetPosition('7 3')
        expect(result).toBe('')
    });
test('should return empty',
    function(){
        const result =alphabetPosition()
        expect(result).toBe()
    });