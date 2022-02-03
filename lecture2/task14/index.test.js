import {frankenSplice} from '.'
describe('frankenSplice',()=>{
test('should return [4, 1, 2, 3, 5]',
    function(){
        const result =frankenSplice([1, 2, 3], [4, 5], 1)
        expect(result).toEqual([4, 1, 2, 3, 5])
    });
});
test('should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]',
    function(){
        const result =frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
        expect(result).toEqual(["head", "shoulders", "claw", "tentacle", "knees", "toes"])
    });
test('should return [1, 2, 3, 4]',
    function(){
        const result =frankenSplice([1, 2, 3, 4], [], 0)
        expect(result).toEqual([1, 2, 3, 4])           
    });

