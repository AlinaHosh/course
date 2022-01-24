import {createPhoneNumber} from '.'
describe('createPhoneNumber',()=>{
test('should return phone number type of (123) 456-7890',
    function(){
        const result =createPhoneNumber([1,2,3,4,5,6,7,8,9,0])
        expect(result).toBe('(123) 456-7890')
    });
});