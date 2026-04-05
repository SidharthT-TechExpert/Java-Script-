/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const map = {};
    
    for (let i = 0, j = 0; i < names.length; i++, j++) {
        map[heights[i]] = names[i]
    }

    const sort = heights.sort((a, b) => b - a);
    const output = sort.map((h) => map[h])
    return output;
};