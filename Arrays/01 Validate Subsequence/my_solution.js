// Qns :- Given an array of integers and sub array of integers, find if the Given sub array is a subset of given array and return true or false

// function validateSubsequence(array, sequence) {
//   let arrIdx = 0;
//   let seqIdx = 0;
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++;
//     }
//     arrIdx++;
//   }
//   return seqIdx === sequence.length;
// }

function validateSubsequence(array, sequence) {
  // given array and sub array
  let seqIdx = 0; // assigning the index of sequence array to 0
  for (let i = 0; i <= array.length; i++) {
    // looping through the array
    if (seqIdx === sequence.length) return true; // if the index of the sub array is equal to the length of the sub array return true

    if (array[i] === sequence[seqIdx]) {
      // if the value of the array is equal to the value of the sub array
      seqIdx++; // increment the sequence index
    }
  }
  return seqIdx === sequence.length; // return is the index of the sub array is equal to the length of the sub array (true or false)
}

console.log(
  validateSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10, 11, 23],
    [1, 6, -1, 10]
  )
);

// Time Complexity = O(n)
// Space Complexity = O(1)
