def min4(a, b, c, d):
    return min(a, b, c, d)

# Reading four numbers from a single line
nums = list(map(int, input().split()))
print(min4(nums[0], nums[1], nums[2], nums[3]))