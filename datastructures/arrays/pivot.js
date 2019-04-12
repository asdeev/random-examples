function pivotIndex(nums) {
  const reducer = (sum, val) => sum + val;

  if (nums && nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      const leftSum = nums.slice(0, i).reduce(reducer, 0);
      const rightSum = nums.slice(i + 1).reduce(reducer, 0);

      if (leftSum === rightSum) return i;
    }
  }
  return -1;
}

const val = pivotIndex([-1, -1, -1, -1, -1, -1]);
console.log(val);
