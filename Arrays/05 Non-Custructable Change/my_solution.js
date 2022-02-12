// O(nlogn) Time complexity || O(1) Space complexity

// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change(the minimum sum of money) that you cannot create.

// # given an array of coin values, find the change that can't be made with the coins

const nonConstructableChange = (coins) => {
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
};

console.log(nonConstructableChange([1, 2, 5]));
