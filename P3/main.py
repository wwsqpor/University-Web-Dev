from models import Book, EBook, PrintedBook

def print_header():
    print("\n" + "=" * 40)
    print("BOOK MANAGEMENT SYSTEM")
    print("=" * 40)

def print_menu():
    print("\n----- MENU -----")
    print(
        "  1. Add Book\n" + 
        "  2. View All Books\n" +
        "  3. Borrow Book\n" +
        "  4. Return Book\n" +
        "  5. Search Book by Title\n" +
        "  6. Exit\n" +
        "-"*20)

def find_book_by_id(library, book_id):
    for book in library:
        if book.book_id == book_id:
            return book
    return None

def add_book(library):
    print("\n--- Add a New Book ---")
    book_type = input("Enter type (ebook / printed): ").strip().lower()

    if book_type not in ("ebook", "printed"):
        print("Enter 'ebook' or 'printed'.")
        return

    title = input("Enter title: ").strip()
    author = input("Enter author: ").strip()
    book_id = input("Enter ID: ").strip()

    if find_book_by_id(library, book_id):
        print(f"A book with ID '{book_id}' already exists.")
        return

    if book_type == "ebook":
        file_size = input("Enter file size (e.g. 5 MB): ").strip()
        file_format = input("Enter format (e.g. PDF / EPUB): ").strip().upper()
        book = EBook(title, author, book_id, file_size, file_format)
    else:
        try:
            pages = int(input("Enter number of pages: ").strip())
        except ValueError:
            print("Pages must be a whole number.")
            return
        weight = input("Enter weight (e.g. 320 g): ").strip()
        book = PrintedBook(title, author, book_id, pages, weight)

    library.append(book)
    print("Book added!")

def view_all_books(library):
    print("\n--- All Books ---")
    if not library:
        print("(No books in the system yet.)")
        return
    for book in library:
        print(" ", book)

def borrow_book(library):
    print("\n--- Borrow a Book ---")
    book_id = input("Enter book ID: ").strip()
    book = find_book_by_id(library, book_id)
    if book:
        book.borrow_book()
    else:
        print(f"No book found with ID '{book_id}'.")

def return_book(library):
    print("\n--- Return a Book ---")
    book_id = input("Enter book ID: ").strip()
    book = find_book_by_id(library, book_id)
    if book:
        book.return_book()
    else:
        print(f"No book found with ID '{book_id}'.")

def search_book(library):
    print("\n--- Search by Title ---")
    query = input("Enter title to search: ").strip().lower()
    results = [b for b in library if query in b.title.lower()]

    if results:
        print(f"  Found {len(results)} result(s):")
        for book in results:
            print("   ", book)
    else:
        print(f"No books found matching '{query}'.")

def main():
    library = []

    library.append(EBook("Python Basics", "John Doe", "101", "5 MB", "PDF"))
    library.append(PrintedBook("Clean Code", "Robert C. Martin", "102", 431, "450 g"))

    print_header()

    while True:
        print_menu()
        choice = input("Enter choice: ").strip()

        if choice == "1":
            add_book(library)
        elif choice == "2":
            view_all_books(library)
        elif choice == "3":
            borrow_book(library)
        elif choice == "4":
            return_book(library)
        elif choice == "5":
            search_book(library)
        elif choice == "6":
            break
        else:
            print("Invalid choice. Please enter a number from 1 to 6.")

if __name__ == "__main__":
    main()