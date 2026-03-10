def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

# Reading two integers (0 or 1)
data = list(map(int, input().split()))
print(xor(data[0], data[1]))