import data

class Question:
    def __init__(self, text, options, correct_index):
        self.text = text
        self.options = options
        self.correct_index = correct_index

    def display(self, q_number):
        print(f"\nQuestion {q_number}: {self.text}")
        for i, option in enumerate(self.options):
            print(f"{i}) {option}")

    def check_answer(self, user_guess):
        try:
            return int(user_guess) == self.correct_index
        except ValueError:
            return False

questions_list = [
    Question(
        text=val["question"], 
        options=val["options"], 
        correct_index=val["correctAnswer"]
    ) 
    for key, val in data.data.items()
]