import {stringMerge} from '.'
describe('stringMerge',()=>{
test('should return a word that merged with first word till the letter and second word after this one',
    function(){
        const result =stringMerge('hello','world','l')
        expect(result).toBe('held')
        const result1 =stringMerge('coding','anywhere','n')
        expect(result1).toBe('codinywhere')
        const result2 =stringMerge('jason','samson','s')
        expect(result2).toBe('jasamson')
        const result3=stringMerge('wonderful','people','e')
        expect(result3).toBe('wondeople')
    });
});