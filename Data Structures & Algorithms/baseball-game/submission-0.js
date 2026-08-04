class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        let sum = 0;
        for (let op of operations) {
            switch(op) {
                case '+': {
                    let add = record.at(-1) + record.at(-2);
                    sum += add;
                    record.push(add);
                    break;
                }
                case 'C': {
                    sum -= record.at(-1);
                    record.pop();
                    break;
                }
                case 'D': {
                    let mult = 2 * record.at(-1);
                    sum += mult;
                    record.push(mult);
                    break;
                }
                default: {
                    let push = Number(op);
                    sum += push;
                    record.push(push);
                }
            }
        }
        return sum;
    }
}
