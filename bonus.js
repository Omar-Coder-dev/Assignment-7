var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
let nums = [4, 3, 2, 2, 3];
let val = 4;
let k = removeElement(nums, val);
console.log("Count:", k);
console.log("Updated Array:", nums.slice(0, k));