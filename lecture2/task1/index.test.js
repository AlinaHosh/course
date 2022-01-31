import {calculateRentalCost} from '.'
describe('calculateRental',()=>{
test('should return 80 dollars by staying 2 days',
    function(){
        const result =calculateRentalCost(2)
        expect(result).toBe(80)
    });
});
test('should return 100 dollars by staying 3 days',
    function(){
        const result =calculateRentalCost(3)
        expect(result).toBe(100)
    });
test('should return 230 dollars by staying 7 days',
    function(){
        const result =calculateRentalCost(7)
        expect(result).toBe(230)
    });
test('should return empty because of no arguments',
    function(){
        const result =calculateRentalCost()
        expect(result).toBe()
    });
test('should return 140 dollars by staying 2 days',
    function(){
        const result =calculateRentalCost(4)
        expect(result).toBe(140)
    });
test('should return empty because of argument is negative',
    function(){
        const result =calculateRentalCost(-1)
        expect(result).toBe()
    });
test('should return empty because of argument is string',
    function(){
        const result =calculateRentalCost('A')
        expect(result).toBe()
    });
test('should return 270 dollars by staying 8 days',
    function(){
        const result =calculateRentalCost(8)
        expect(result).toBe(270)
    });