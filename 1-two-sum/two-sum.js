var twoSum = function(nums, target) {

    let hash = {};

    for (let i = 0; i < nums.length; i++) {

        let com = target - nums[i];

        if (hash[com] !== undefined) {
            return [hash[com], i];
        }

        hash[nums[i]] = i;
    }
};