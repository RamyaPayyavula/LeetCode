var partition = function (nums, left, right) {
    const mid = Math.floor((left + right) / 2);
    const pivot = nums[mid];
    let i = left, j = right;
    while (i <= j) {
        while (nums[i] < pivot) i++;
        while (nums[j] > pivot) j--;
        if (i <= j) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

var quickSort = function (nums,left,right) {
    if (nums.length > 1) {
        var index = partition(nums, left, right);
        if (left < index - 1) {
            quickSort(nums, left, index - 1);
        }
        if (index < right) {
            quickSort(nums, index, right);
        }
    }
    return nums;
}

console.log(quickSort([1,3,5,2,4,6,7],0,6));
