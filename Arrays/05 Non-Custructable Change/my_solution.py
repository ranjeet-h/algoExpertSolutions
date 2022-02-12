# non-constructable change
# O(nlogn) time | O(1) space
# Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change(the minimum sum of money) that you cannot create.
def nonConstructableChange(coins):
    coins.sort()
    currentChangeCreated = 0  # 7
    for coin in coins:
        # print(currentChangeCreated)
        if coin > currentChangeCreated + 1:
            return currentChangeCreated + 1
        currentChangeCreated += coin
    return currentChangeCreated + 1


print(nonConstructableChange([1, 2, 3]))
