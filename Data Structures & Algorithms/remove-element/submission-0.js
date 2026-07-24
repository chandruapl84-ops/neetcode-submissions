class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let writeIndex = 0;
        for (let readIndex = 0; readIndex < nums.length; readIndex++) {
            if (nums[readIndex] !== Number(val)) {
                nums[writeIndex] = Number(nums[readIndex]);
                writeIndex++;
            }
        }
        return writeIndex;
    }
}