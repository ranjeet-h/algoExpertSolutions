# find the pair from given array whose sum is equal to the given number
#
# sol 1 using two for loops O(n^2) time | O(1) space

# def twoNumberSum(array, targetSum):
#     for i in range(len(array - 1)):
#         firstNum = array[i]
#         for j in range(i+1, len(array)):
#             secondNum = array[j]
#             if firstNum + secondNum == targetSum:
#                 return [firstNum, secondNum]
#     return []


# print(twoNumberSum([2, 1, 6, 11, 7, -1, 8, 10], 7))

# sol 2 using hash table/object/dict O(n) time | O(n) space

# def twoNumberSum(array, targetSum):
#     nums = {}
#     for num in array:
#         potentialSum = targetSum - num
#         if potentialSum in nums:
#             return [potentialSum, num]
#         else:
#             nums[num] = True
#     print(nums)
#     return []


# print(twoNumberSum([2, 1, 6, 11, 7, -1, 8, 10], 7))

# sol 3 using sorting O(nlogn) time | O(1) space

def twoNumberSum(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] + array[right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1

    return []


print(twoNumberSum([2, 1, 6, 11, 7, -1, 8, 10], 7))
