const isPalindrome = require("./palindrome")

describe("isPalindrome", ()=> {
    test('should return true for a palindrome', () => {
        expect(isPalindrome("ana")).toBe(true);
    });
    
    test('should return false for a non palindrome', () => {
        expect(isPalindrome("connect")).toBe(false);
    });

});
