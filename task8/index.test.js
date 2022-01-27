import {countOccurences} from '.'
describe('swapCase',()=>{
test('should return "2" that is count letter "I" in string "unit testing"',
    function(){
        const result =countOccurences('unit testing','I')
        expect(result).toBe(2)
    });
});
test('should return "2" that is count letter "i" in string "unit testing"',
    function(){
        const result =countOccurences('unit testing','i')
        expect(result).toBe(2)
    });
test('should return "0" that is count letter "a" in string "unit testing"',
    function(){
        const result =countOccurences('unit testing','a')
        expect(result).toBe(0)
    });