class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
        let arr = [];
        if (s.length % 2 !== 0) {
            return false;
        }

        for (let c of s) {
            let pair = pairs[c];
            if (pair) {
                arr.push(pair);
            } else if (arr.at(-1) === c) {
                arr.pop();
            } else {
                return false
            }
        }
        return arr.length === 0;
    }
}
