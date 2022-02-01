import {invertColor} from '.'
describe('invertColor',()=>{
test('should return #ffffff that inverted #000000',
    function(){
        const result =invertColor('#000000')
        expect(result).toBe('#ffffff')
    });
});
test('should return #221155 that inverted #DDEEAA',
    function(){
        const result =invertColor('#DDEEAA')
        expect(result).toBe('#221155')
    });
test('should return #fedcba that inverted #012345',
    function(){
        const result =invertColor('#012345')
        expect(result).toBe('#fedcba')
    });
test('should return #ffff00 that inverted #0000ff',
    function(){
        const result =invertColor('#0000ff')
        expect(result).toBe('#ffff00')
    });
test('should return #00ffff that inverted #ff0000',
    function(){
        const result =invertColor('#ff0000')
        expect(result).toBe('#00ffff')
    });
test('should return #222222 that inverted #dddddd',
    function(){
        const result =invertColor('#dddddd')
        expect(result).toBe('#222222')
    });