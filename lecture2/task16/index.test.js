import {fearNotLetter} from '.'
describe('squareList',()=>{
test('should return "d"',
    function(){
        const result =fearNotLetter('abce')
        expect(result).toEqual('d')
    });
});
test('should return "i"',
    function(){
        const result =fearNotLetter('abcdefghjklmno')
        expect(result).toEqual('i')
    });
test('should return "u"',
    function(){
        const result =fearNotLetter('stvwx')
        expect(result).toEqual('u')
    });
test('should return undefined',
    function(){
        const result =fearNotLetter('abcdefghijklmnopqrstuvwxyz')
        expect(result).toEqual(undefined)
    });