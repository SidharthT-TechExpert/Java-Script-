/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let sum = 0;
    let maxAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];          // Add only current gain
        maxAltitude = Math.max(maxAltitude, sum); // Track maximum
    }
    return maxAltitude;
};