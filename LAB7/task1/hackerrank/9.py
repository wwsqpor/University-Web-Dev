n = int(input())
arr = map(int, input().split())
# Remove duplicates with set(), sort it, then take the second to last
unique_scores = sorted(list(set(arr)))
print(unique_scores[-2])