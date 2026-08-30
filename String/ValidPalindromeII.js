// 680. Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
// Input: s = "aba"
// Output: true
// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:
// Input: s = "abc"
// Output: false
//Leetcode Link : https://leetcode.com/problems/valid-palindrome-ii/description/

const checkPalindrome = function(str, left, right){
    while(left < right){
        if(str[left] !== str[right])
            return false;
        left++;
        right--;
    }
    return true;
}

var validPalindrome = function(s) {
    let leftIndex = 0; 
    let rightIndex = s.length - 1;
    while(leftIndex < rightIndex){
        if(s[leftIndex] === s[rightIndex]){
            leftIndex++;
            rightIndex--;
        }
        else{
            return checkPalindrome(s, leftIndex+1, rightIndex) || checkPalindrome(s, leftIndex, rightIndex-1)
        }
    }
    return true;
};
console.log(validPalindrome("abc"));