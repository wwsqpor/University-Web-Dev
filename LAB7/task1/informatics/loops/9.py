x = int(input())
count = 0
for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        count += 1
        if i*i != x: # If not a perfect square, add the paired divisor
            count += 1
print(count)