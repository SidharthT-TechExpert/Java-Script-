/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;       // current depth
    let maxDepth = 0;    // maximum depth observed

    for (let char of s) {
        if (char === '(') {
            depth++;
           maxDepth = Math.max(maxDepth, depth);
        } else if (char === ')') {
            depth--;
        }
    }

    return maxDepth;

};