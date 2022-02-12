// Qns:- In the given array find the pair of two number which is equal to the given sum and returns the array with pair

// // sol 1
// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     let firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       let secondNum = array[j];
//       if (firstNum + secondNum == targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }

// console.log(twoNumberSum([1, 2, 3, 4, 5], 7));

// // sol 2
// function twoNumberSum(array, targetSum) {
//   let nums = {}; // creating an object to store the values of the array in the values : true/false format

//   for (let i = 0; i < array.length - 1; i++) { // looping through the array
//     let potentialSum = targetSum - array[i]; // subtracting the value of the array from the target sum
//     if (nums[potentialSum]) { // if the potential sum is present in the object
//       return [potentialSum, array[i]]; // return the pair of the two numbers
//     } else { // if the potential sum is not present in the object
//       nums[array[i]] = true; // add the value of the array to the object
//     }
//   }
//   return []; // return an empty array
// }

// console.log(twoNumberSum([1, 2, 3, 4, 5], 7));

// sol 3
function twoNumberSum(array, targetSum) {
  //given is the array and sum
  array.sort(); //sorts the array
  let left = 0; // assign the pointer to left of the array
  let right = array.length - 1; // assign the pointer to right of the array
  while (left < right) {
    // while the left pointer is less than the right pointer
    let currentSum = array[left] + array[right]; // add the value of the left pointer to the value of the right pointer
    if (currentSum === targetSum) {
      // if the current sum is equal to the target sum
      return [array[left], array[right]]; // return the value of the left and right pointer
    } else if (currentSum < targetSum) {
      // if the current sum is less than the target sum
      left += 1; // increment the left pointer
    } else if (currentSum > targetSum) {
      // if the current sum is greater than the target sum
      right -= 1; // decrement the right pointer
    }
  }
  return []; // return an empty array
}

console.log(twoNumberSum([1, 2, 3, 4, 5], 7));
