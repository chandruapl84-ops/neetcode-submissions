class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        //Approach 1
        // [...nums, ...nums] just for the reference
        //Approach 2
        // const n = nums.length;
        // const ans = new Array(2 * n);
        // for (let i = 0; i < n; i++) {
        //     ans[i] = nums[i];
        //     ans[i + n] = nums[i];
        // }
        //Approach 3
        return nums.concat(nums);
    }
}
