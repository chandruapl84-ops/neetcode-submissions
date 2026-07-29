class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // [...nums, ...nums] just for the reference
        return nums.concat(nums);
    }
}
