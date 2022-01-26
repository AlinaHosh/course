import {createPhoneNumber} from '.'
describe('createPhoneNumber',()=>{
test('should return phone number (123) 456-7890',
    function(){
        const number=[1,2,3,4,5,6,7,8,9,0];
        const result =createPhoneNumber(number)
        expect(result).toBe('(123) 456-7890')
    });
});
test('should return answer "not right answer"',
    function(){
        const number=[1,2,3,4,5,6,7,8,9,0,8];
        const result =createPhoneNumber(number)
        expect(result).toBe('not right number')
    });
test('should return answer "not right answer"',
    function(){
        const number=[];
        const result =createPhoneNumber(number)
        expect(result).toBe('not right number')
    });
