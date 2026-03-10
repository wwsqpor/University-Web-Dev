def power(a, n):
    res = 1
    # If n is 0, the loop won't run and it returns 1 (correct)
    for _ in range(int(n)):
        res *= a
    return res

data = input().split()
a = float(data[0])
n = int(data[1])

print(power(a, n))