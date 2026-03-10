n = int(input())
a = list(map(int, input().split()))

# Using Python slicing to reverse
print(*(a[::-1]))

# OR using a loop:
# for i in range(n-1, -1, -1):
#     print(a[i], end=' ')