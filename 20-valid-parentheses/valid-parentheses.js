/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (let ch of s) {
        if (ch === '(') {
            stack.push(')');
        } else if (ch === '{') {
            stack.push('}');
        } else if (ch === '[') {
            stack.push(']');
        } else {
            // closing bracket
            if (stack.pop() !== ch) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
