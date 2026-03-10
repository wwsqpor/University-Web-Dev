data = {
    "1": {
        "question" : '''Which mechanism is primarily responsible for destroying objects\nthat are no longer in use, specifically handling objects with circular references?''',
        "options": ["Reference Counting", 
                    "Cyclic Garbage Collector", 
                    "The Python Virtual Machine (PVM)",
                    "Manual free() calls"],
        "correctAnswer": 1,
    },
    "2": {
        "question" : '''Why are tuples technically faster and more memory-efficient than lists in Python?''',
        "options": ["They are stored in a linked list format.", 
                    "They are immutable, allowing Python to allocate a fixed block of memory.", 
                    "They do not support indexing.",
                    "They are written in C, while lists are written in Python."],
        "correctAnswer": 1,
    },
    "3": {
        "question" : '''What is the fundamental difference between the is operator and the == operator?''',
        "options": ["is checks for value equality; == checks for memory address.", 
                    "is checks if two variables point to the same object in memory; == checks if their values are equal.", 
                    "They are identical in Python 3.",
                    "is is only used for strings; == is used for integers."],
        "correctAnswer": 1,
    },
    "4": {
        "question" : '''In what order does Python search for a variable name?''',
        "options": ["Global, Local, Enclosed, Built-in", 
                    "Local, Enclosed, Global, Built-in", 
                    "Built-in, Global, Enclosed, Local",
                    "Local, Global, Enclosed, Built-in"],
        "correctAnswer": 1,
    },
    "5": {
        "question" : '''What is the primary impact of the GIL on a Python program?''',
        "options": ["It prevents the program from using more than 2GB of RAM.", 
                    "It prevents multiple threads from executing Python bytecode simultaneously in a single process.", 
                    "It forces all variables to be global.",
                    "It speeds up mathematical calculations on multi-core CPUs."],
        "correctAnswer": 1,
    }
}