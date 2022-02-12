# O(n) time | O(1) space
# def validateSubsequence(array, sequence):
#     arrIdx = 0
#     seqIdx = 0
#     while arrIdx < len(array) and seqIdx < len(sequence):
#         if array[arrIdx] == sequence[seqIdx]:
#             seqIdx += 1
#         arrIdx += 1
#     return seqIdx == len(sequence)

def validateSubsequence(array, sequence):
    seqIdx = 0
    for item in array:
        if seqIdx == len(sequence):
            return True
        if item == sequence[seqIdx]:
            seqIdx += 1
    return seqIdx == len(sequence)


print(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 1, 6, -1]))

# // Time Complexity = O(n)
# // Space Complexity = O(1)
