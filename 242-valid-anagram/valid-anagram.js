/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    sortS = s.split('').sort().join('');
    sortT = t.split('').sort().join('');
    console.log(sortS,sortT)
    return sortS === sortT;
};