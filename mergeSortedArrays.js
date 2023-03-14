const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

const mergeSortedArrays = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  return newArray.sort((a, b) => a - b);
};

console.log(mergeSortedArrays(arr1, arr2));
