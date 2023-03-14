const checkIfTwoItemsInArrayAreEqual = (arr1, arr2) => {
  arr1.forEach((item) => {
    arr2.forEach((item2) => {
      if (item === item2) console.log(true);
      // else console.log(false);
    });
  });
};
const arr1 = ['b', 'a', 'c'];
const arr2 = ['a', 'd', 'e'];
checkIfTwoItemsInArrayAreEqual(arr1, arr2);
