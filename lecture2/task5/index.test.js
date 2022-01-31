import {reverseWords} from '.'
describe('reverseWords',()=>{
test('should return "anila hsog" after reversing "alina gosh"',
    function(){
        const result =reverseWords('alina gosh')
        expect(result).toBe('anila hsog')
    });
});
test('should return "elbuod  secaps" after reversing "double  spaces"',
    function(){
        const result =reverseWords('double  spaces')
        expect(result).toBe('elbuod  secaps')
    });
test('should return "ehT kciuq nworb xof spmuj revo eht yzal .god" after reversing "The quick brown fox jumps over the lazy dog."',
    function(){
        const result =reverseWords('The quick brown fox jumps over the lazy dog.')
        expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
    });