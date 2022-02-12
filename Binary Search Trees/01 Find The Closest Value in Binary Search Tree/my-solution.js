const findMissingValues = (array) => {
  array.sort((a, b) => a - b);
  let missingValues = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i + 1) {
      missingValues.push(i + 1);
    }
  }
  return missingValues;
};

console.log(findMissingValues([1, 2, 3, 4, 5, 6, 7, 9, 10]));
