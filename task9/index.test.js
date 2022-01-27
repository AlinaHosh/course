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
test('should return "0" vowels in string',
    function(){
        const result =vowelCount('uNit testing')
        expect(result).toBe(4)
    });