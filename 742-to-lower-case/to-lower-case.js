/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let output = [];
    for (let char of s) {
        if (isUpperCase(char)) {
            output.push(char.toLowerCase());
            continue;
        }
        output.push(char);
    }
    return output.join('')
};

function isUpperCase(char) {
    let code = char.charCodeAt(0);
    return code >= 65 && code <= 90;
}