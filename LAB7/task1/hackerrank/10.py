students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name, score])

# Find the second lowest score
scores = sorted(list(set([s[1] for s in students])))
second_lowest = scores[1]

# Get names and sort alphabetically
names = sorted([s[0] for s in students if s[1] == second_lowest])
for name in names:
    print(name)