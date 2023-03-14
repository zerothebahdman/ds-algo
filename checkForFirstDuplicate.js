const checkForFirstDuplicate = (arr) => {
  const newArray = [];
  //   for (i = 0; i <= arr.length; i++) {
  //     // console.log(i);
  //     if (newArray.includes(i)) {
  //       console.log(arr[i]);
  //       return arr[i];
  //     }
  //     newArray.push(i);
  //   }

  //   arr.map((item) => {
  //     if (newArray.includes(item)) {
  //       console.log(item);
  //       return item;
  //     }
  //     newArray.push(item);
  //   });
  //     return undefined;

  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (set.has(item)) {
      return item;
    }
    set.add(item);
    console.log(set);
  }
  return undefined;
};

console.log(checkForFirstDuplicate([1, 2, 3, 3, 2, 4, 5, 6, 7, 7, 8, 9, 10]));
console.log(checkForFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2]));
