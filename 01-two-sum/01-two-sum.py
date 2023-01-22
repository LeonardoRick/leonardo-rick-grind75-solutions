# https://leetcode.com/problems/two-sum/description/

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        alreadyChecked = {}
        for i in range(len(nums)):
            curr = nums[i]
            rest = target - curr
            if (rest in alreadyChecked):
                return [alreadyChecked[rest], i]
            alreadyChecked[curr] = i
        return [-1, -1]


print(Solution().twoSum([2, 7, 11, 15], 9))
