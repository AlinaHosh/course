import {openOrSenior} from '.'
describe('openOrSenior',()=>{
test('should return ["Open", "Senior", "Open", "Senior"]',
    function(){
        const result =openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]])
        expect(result).toEqual(['Open', 'Senior', 'Open', 'Senior'])
    });
});
test('should return ["Open","Open","Open","Open"]',
    function(){
        const result =openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]])
        expect(result).toEqual(['Open', 'Open', 'Open', 'Open'])
    });
test('should return ["Open","Open"]',
    function(){
        const result =openOrSenior([[38, 16],[55,7]])
        expect(result).toEqual(['Open', 'Open'])
    });
test('should return ["Open","Open"]',
    function(){
        const result =openOrSenior([[57, 12],[55,12]])
        expect(result).toEqual(['Open','Open'])
    });
test('should return ["Open","Senior"]',
    function(){
        const result =openOrSenior([[57, 14],[55,20]])
        expect(result).toEqual(['Open','Senior'])
    });
    test('should return ["Senior","Senior"]',
    function(){
        const result =openOrSenior([[57, 21],[55,20]])
        expect(result).toEqual(['Senior','Senior'])
    });