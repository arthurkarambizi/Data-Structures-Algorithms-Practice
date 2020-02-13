def twoSum(nums, target):
    results = {}
    for index, current_number in enumerate(nums):
        if current_number in results:
            return [results[current_number], index]
        results[target - current_number] = index


nums = [3, 3]
target = 6

twoSum(nums, target)
