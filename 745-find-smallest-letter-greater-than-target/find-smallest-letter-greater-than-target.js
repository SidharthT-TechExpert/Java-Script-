/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {

    const tagCode = target.charCodeAt(0);
    const codes = []
    letters.forEach((lte) => {
        codes.push(lte.charCodeAt(0))
    })

    const filtArray = [];
    for (let code of codes) {
        if (code != tagCode && code > tagCode) {
            filtArray.push(code);
        }
    }

    return String.fromCharCode(filtArray.length ? Math.min(...filtArray) : codes[0])
};