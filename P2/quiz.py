import random
from question import questions_list

while True:
    random_q = random.choice(questions_list)

    random_q.display("RANDOM")
    user_input = input("Your answer (0-3): ")

    if random_q.check_answer(user_input):
        print("Correct!")
    else:
        print(f"Wrong! The correct answer was index {random_q.correct_index}.")