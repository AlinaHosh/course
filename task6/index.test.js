        import {checkPalindrome} from '.'
        describe('checkPalindrome',()=>{
        test('should return true when "Was it a cat I saw?" passed checking Palindrome',
            function(){
                const result =checkPalindrome('Was it a cat I saw?')
                expect(result).toBe(true)
            });
        });
        test('should return true when empty string passed checking Palindrome',
            function(){
                const result =checkPalindrome()
                expect(result).toBe(true)
            });  
        test('should return true when "Was it a cat I saw" passed checking Palindrome',
            function(){
                const result =checkPalindrome('Was it a cat I saw')
                expect(result).toBe(true)
            });
        test('should return false when "banana" passed checking Palindrome',
            function(){
                const result =checkPalindrome('banana')
                expect(result).toBe(false)
            });
        test('should return false when "race a car" passed checking Palindrome',
            function(){
                const result =checkPalindrome('race a car')
                expect(result).toBe(false)
            });
        test('should return true when "repaper" passed checking Palindrome',
            function(){
                const result =checkPalindrome('repaper')
                expect(result).toBe(true)
            });
        test('should return true when "Eva, can I see bees in a cave?" passed checking Palindrome',
            function(){
                const result =checkPalindrome('Eva, can I see bees in a cave?')
                expect(result).toBe(true)
            });
        test('should return true when "My age is 0, 0 si ega ym." passed checking Palindrome',
            function(){
                const result =checkPalindrome('My age is 0, 0 si ega ym.')
                expect(result).toBe(true)
            });
        test('should return true when "000" passed checking Palindrome',
            function(){
                const result =checkPalindrome('000')
                expect(result).toBe(true)
            });