/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let indexAr = [];
    words.forEach((word,i) => {
        if(word.includes(x)) indexAr.push(i)
    });

    return indexAr;
};
























