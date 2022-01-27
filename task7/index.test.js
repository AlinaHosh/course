    import {swapCase} from '.'
    describe('swapCase',()=>{
    test('should return "wOW"',
        function(){
            const result =swapCase('Wow')
            expect(result).toBe('wOW')
        });
    });
    test('should return "wOW"',
    function(){
        const result =swapCase(78)
        expect(result).toBe(78)
    });