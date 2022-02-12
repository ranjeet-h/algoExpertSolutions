// Qns :- Given an array on numbers, square each number and sort the result in ascending order. in array format

// sol 1 O(nlogn) time | O(n) space
// ex 1

// const sortedSquaredArray = (arr) => {
//   return arr.map((num) => num * num).sort((a, b) => a - b);
// };

// ex2

// const sortedSquaredArray = (arr) => {
//   arr.sort((a, b) => a - b);
//   let sortedSquaredArray = arr.map(() => 0);
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     sortedSquaredArray[i] = value * value;
//   }
//   sortedSquaredArray.sort((a, b) => a - b);
//   return sortedSquaredArray;
// };

// sol 2 O(n) time | O(n) space

// const sortedSquaredArray = (arr) => {
//   let squared = arr.map(() => 0);
//   let left = 0;
//   let right = arr.length - 1;
//   let index = arr.length - 1;
//   while (left <= right) {
//     let left_square = arr[left] * arr[left];
//     let right_square = arr[right] * arr[right];
//     if (left_square > right_square) {
//       squared[index] = left_square;
//       left += 1;
//     } else {
//       squared[index] = right_square;
//       right -= 1;
//     }
//     index -= 1;
//   }

//   return squared;
// };

const sortedSquaredArray = (arr) => {
  let squared = arr.map(() => 0); // [0,0,0,0,0,0,0,0,0,0]
  let smallerValueIndex = 0; // assigning pointer to start of the array
  let largerValueIndex = arr.length - 1; // assigning pointer to end of the array

  for (let i = arr.length - 1; i >= 0; i--) {
    // iterating backwards on Given array
    let smallerValue = arr[smallerValueIndex]; //getting the value of the pointer [first value in the array]
    let largerValue = arr[largerValueIndex]; //getting the value of the pointer [last value in the array]
    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      //checking if the absolute value of the smaller value is greater than the absolute value of the larger value
      squared[i] = smallerValue * smallerValue; // if true, then multiply the smaller value by itself and assign it to the current index of the squared array
      smallerValueIndex += 1; // increment the pointer
    } else {
      // if the smaller value is greater than the larger value
      squared[i] = largerValue * largerValue; //then multiply the larger value by itself and assign it to the current index of the squared array
      largerValueIndex -= 1; //increment the pointer
    }
  }
  return squared; //return the squared array
};

console.log(sortedSquaredArray([-4, -1, 0, 3, 10]));
