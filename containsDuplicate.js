const containsDuplicate = (nums) => {
  //   const newArray = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i];
  //     console.log(num);
  //     if (newArray.includes(num)) {
  //       return true;
  //     }
  //     newArray.push(num);
  //   }
  //     return false;

  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 7]));
