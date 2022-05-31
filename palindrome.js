
function reverseString(str) {
    return str.split("").reverse().join("");
}

function isPalindrome(name)
{
    return name === reverseString(name);
}

module.exports = isPalindrome;
