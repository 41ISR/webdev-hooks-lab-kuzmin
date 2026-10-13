import BookItem from './BookItem'

function BookList({ books, onToggleRead, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          {...book}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default BookList
