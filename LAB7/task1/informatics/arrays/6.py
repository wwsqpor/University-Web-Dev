n = int(input())
a = list(map(int, input().split()))
count = 0
# Start from 1 and end at n-2 to avoid index out of bounds
for i in range(1, n - 1):
    if a[i] > a[i-1] and a[i] > a[i+1]:
        count += 1
print(count)