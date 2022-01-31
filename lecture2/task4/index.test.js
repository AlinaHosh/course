import {moveZeros} from '.'
describe('moveZeros',()=>{
test('should return [false,1,1,2,1,3,"a",0,0]',
    function(){
        const result =moveZeros([false,1,0,1,2,0,1,3,"a"])
        expect(result).toEqual([false,1,1,2,1,3,"a",0,0])
    });
});
test('should return [6,9,11,3,7,0,0,0]',
    function(){
        const result =moveZeros([0,6,9,11,0,3,7,0])
        expect(result).toEqual([6,9,11,3,7,0,0,0])
    });
test('should return [0,0]',
    function(){
        const result =moveZeros([0,0])
        expect(result).toEqual([0,0])
    });
test('should return ["a","b"]',
    function(){
        const result =moveZeros(['a','b'])
        expect(result).toEqual(['a','b'])
    });
test('should return [] due to empty array',
    function(){
        const result =moveZeros([])
        expect(result).toEqual([])
    });
test('should return empty due to not array',
    function(){
        const result =moveZeros('not array')
        expect(result).toEqual()
    });
test('should return empty due to no agument',
    function(){
        const result =moveZeros()
        expect(result).toEqual()
    });