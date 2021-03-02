/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var re = new RegExp(needle, "g");
    return haystack.search(re)
};

console.log(strStr("hello","ll"))