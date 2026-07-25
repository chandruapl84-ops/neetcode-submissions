class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length;i++) {
            let j = i + 1;
            let tempArr = arr.slice(j, arr.length);
            arr[i] = Math.max(...tempArr)
        }
        arr[arr.length - 1] = -1
        return arr;
    }
}
