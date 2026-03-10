a = int(input())
b = int(input())

# Optimization: only loop through numbers whose square might be in range
for i in range(int(b**0.5) + 1):
    square = i * i
    if a <= square <= b:
        print(square, end=' ')