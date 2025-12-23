/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    if (s === t) return true;
    
    const process = (str) => {
        let stock = [];

        for (let ch of str) {

            if (ch === '#') {
                stock.pop();
            } else {
                stock.push(ch)
            }

        }
        return stock.join('');
    }

    return process(s) === process(t);
};