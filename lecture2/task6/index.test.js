import {createUrl} from '.'
describe('createUrl',()=>{
test('should return "/api/0"',
    function(){
        const result =createUrl('/api/{id}',{id: 0})
        expect(result).toBe('/api/0')
    });
});
test('should return "/api/undefined"',
    function(){
        const result =createUrl('/api/{id}',{name: 'Petya'})
        expect(result).toBe('/api/undefined')
    });
test('should return "/api/items/0"',
    function(){
        const result =createUrl('/api/{list}/{id}',{list: 'items', id: 0})
        expect(result).toBe('/api/items/0')
    });