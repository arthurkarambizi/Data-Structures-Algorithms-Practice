# /*
# ** Source : https://leetcode.com/problems/two-sum/
# ** Date   : 11-01-2020
# */

# /*
# ** Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# **
# ** You may assume that each input would have exactly one solution, and you may not use the same element twice.
# **
# ** Example:
# **
# ** Given nums = [2, 7, 11, 15], target = 9,
# **
# ** Because nums[0] + nums[1] = 2 + 7 = 9,
# ** return [0, 1].
# */

def twoSum(nums, target):
    results = {}
    for index, current_number in enumerate(nums):
        if current_number in results:
            return [results[current_number], index]
        results[target - current_number] = index


nums = [3, 3]
target = 6

twoSum(nums, target)
