test('should return "palindrome" when string with symbol passed checking Palindrome',
    function(){
        const result =checkPalindrome('Was it a cat I saw?')
        expect(result).toBe('palindrome')
    });
test('should return "not palindrome" when empty string passed checking Palindrome',
    function(){
        const result =checkPalindrome()
        expect(result).toBe('palindrome')
    });  
test('should return "palindrome" when string with upperCase and spaces passed checking Palindrome',
    function(){
        const result =checkPalindrome('Was it a cat I saw')
        expect(result).toBe('palindrome')
    });
test('should return "not palindrome" when "banana" passed checking Palindrome',
    function(){
        const result =checkPalindrome('banana')
        expect(result).toBe('not palindrome')
    });
test('should return "palindrome" when string with symbol passed checking Palindrome',
    function(){
        const result =checkPalindrome('Was it a cat I saw?')
        expect(result).toBe('palindrome')
    });