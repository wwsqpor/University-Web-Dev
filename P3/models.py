class Book:
    def __init__(self, title, author, book_id, is_available=True):
        self.title = title
        self.author = author
        self.book_id = book_id
        self.is_available = is_available

    def borrow_book(self):
        if self.is_available:
            self.is_available = False
            print(f'You have successfully borrowed "{self.title}".')
        else:
            print(f'Sorry, "{self.title}" is currently not available.')

    def return_book(self):
        if not self.is_available:
            self.is_available = True
            print(f'"{self.title}" has been returned. Thank you!')
        else:
            print(f'"{self.title}" was not borrowed — nothing to return.')

    def __str__(self):
        status = "Available" if self.is_available else "Borrowed"
        return (
            f"[{self.book_id}] {self.title} by {self.author}  |  Status: {status}"
        )

class EBook(Book):
    def __init__(self, title, author, book_id, file_size, file_format, is_available=True):
        super().__init__(title, author, book_id, is_available)
        self.file_size = file_size
        self.file_format = file_format

    def download_info(self):
        print(f'Download "{self.title}" ({self.file_format}, {self.file_size})')

    def borrow_book(self):
        print(
            f'You are now reading "{self.title}" online. '
            f"(Format: {self.file_format}, Size: {self.file_size})"
        )

    def __str__(self):
        status = "Available" if self.is_available else "Borrowed"
        return (
            f"[{self.book_id}] {self.title} by {self.author}  |  "
            f"Format: {self.file_format}  |  Size: {self.file_size}  |  Status: {status}"
        )

class PrintedBook(Book):
    def __init__(self, title, author, book_id, pages, weight, is_available=True):
        super().__init__(title, author, book_id, is_available)
        self.pages = pages
        self.weight = weight

    def shelf_info(self):
        print(f'"{self.title}" — {self.pages} pages, weighs {self.weight}.')

    def borrow_book(self):
        if self.is_available:
            self.is_available = False
            print(
                f'You have borrowed "{self.title}" ({self.pages} pages). '
                "Please return it in good condition!"
            )
        else:
            print(
                f'Sorry, the physical copy of "{self.title}" '
                "is currently checked out."
            )

    def __str__(self):
        status = "Available" if self.is_available else "Borrowed"
        return (
            f"[{self.book_id}] {self.title} by {self.author}  |  "
            f"Pages: {self.pages}  |  Weight: {self.weight}  |  Status: {status}"
        )