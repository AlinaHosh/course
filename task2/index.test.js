import {stringMerge} from '.'
describe('stringMerge',()=>{
test('should return "held" that merged with "hello" till the letter "l" and "world" after this one',
    function(){
        const result =stringMerge('hello','world','l')
        expect(result).toBe('held')
    });
});
    test('should return "held" that merged with "coding" till the letter "n" and "anywhere" after this one',
    function(){
        const result1 =stringMerge('coding','anywhere','n')
        expect(result1).toBe('codinywhere')
    });
    test('should return "held" that merged with "jason" till the letter "s" and "samson" after this one',
    function(){
        const result2 =stringMerge('jason','samson','s')
        expect(result2).toBe('jasamson')
    });
    test('should return "held" that merged with "wonderful" till the letter "e" and "people" after this one',
    function(){
        const result3=stringMerge('wonderful','people','e')
        expect(result3).toBe('wondeople')
    });
