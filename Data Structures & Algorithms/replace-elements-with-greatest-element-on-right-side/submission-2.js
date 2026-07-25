class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxSeen = -1
        for (let i = arr.length - 1; i >= 0;i--) {
            let currentVal = arr[i];
            arr[i] = maxSeen;
            maxSeen = Math.max(currentVal, maxSeen);
        }
        return arr;
    }
}
