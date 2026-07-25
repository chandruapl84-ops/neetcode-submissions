class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let lastGreatestEle = 0;
        for (let i = 0; i < arr.length;i++) {
            let j = i + 1;
            lastGreatestEle = arr[j];
            while(j < arr.length) {
                if (arr[j+1] > lastGreatestEle) {
                    lastGreatestEle = arr[j+1]
                }
                j++;
            }
            arr[i] = lastGreatestEle;
        }
        arr[arr.length - 1] = -1
        return arr;
    }
}
