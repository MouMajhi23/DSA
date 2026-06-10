//14.Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//Leetcode Link : https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function(strs) {
    let min = Number.MAX_SAFE_INTEGER;
let smallestString ;
for(let i = 0 ; i < strs.length ; i++){
    if(strs[i].length < min){
        smallestString = strs[i];
        min = Math.min(min, strs[i].length);
    }
    
}
let output = "";
for(let i = 0 ; i < min; i++){
    let flag = true;
    for(let j = 0 ; j < strs.length-1 ; j++){
         if(strs[j][i] != strs[j+1][i]){
            flag = false;
         }
         
    }
    if(flag){
        output = output +  smallestString.charAt(i);
     }
     else{
        break;
     }
}
    return output;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))