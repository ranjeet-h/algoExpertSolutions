# sol 1 O(nlogn) time | O(n) space
# def sortedSquaredArray(A):
#     return sorted([i*i for i in A])

# def sortedSquaredArray(A):
#     A.sort()
#     sortedSquares = [0 for _ in A]

#     for idx in range(0, len(A)):
#         value = A[idx]
#         sortedSquares[idx] = value * value
#     sortedSquares.sort()
#     return sortedSquares

# sol 2 O(n) time | O(n) space
# def sortedSquaredArray(array):
#     squared = [0 for _ in array]
#     left = 0
#     right = len(array) - 1
#     idx = len(array) - 1
#     while left <= right:
#         left_square = array[left] * array[left]
#         right_square = array[right] * array[right]
#         if left_square > right_square:
#             squared[idx] = left_square
#             left += 1
#         else:
#             squared[idx] = right_square
#             right -= 1
#         idx -= 1
#     return squared

def sortedSquaredArray(array):
    sortedSquares = [0 for _ in array]
    smallerValueIdx = 0
    largerValueIdx = len(array) - 1

    for idx in reversed(range(len(array))):
        smallerValue = array[smallerValueIdx]
        largerValue = array[largerValueIdx]

        if abs(smallerValue) > abs(largerValue):
            sortedSquares[idx] = smallerValue * smallerValue
            smallerValueIdx += 1
        else:
            sortedSquares[idx] = largerValue * largerValue
            largerValueIdx -= 1
    return sortedSquares


print(sortedSquaredArray([-4, -1, 0, 3, 10]))
