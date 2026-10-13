import BookForm from '../components/BookForm'
import FilterChip from '../components/FilterChip'
import BookList from '../components/BookList'

function ShelfScreen({
  books,
  showOnlyUnread,
  onToggleFilter,
  onAdd,
  onToggleRead,
  onDelete,
}) {
  const visibleBooks = showOnlyUnread
    ? books.filter((book) => !book.read)
    : books

  return (
    <div>
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>

      <section>
        <p className="greeting">Добрый вечер</p>

        <BookForm onAdd={onAdd} />

        <div className="list-toolbar">
          <span className="toolbar-title">Книги</span>
          <FilterChip checked={showOnlyUnread} onChange={onToggleFilter} />
        </div>

        <BookList
          books={visibleBooks}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      </section>
    </div>
  )
}

export default ShelfScreen
