/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let output = [];

    for (let char of s) {
        let code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            output.push(String.fromCharCode(code + 32));
            continue;
        }
        output.push(char);
    }
    return output.join('')
};