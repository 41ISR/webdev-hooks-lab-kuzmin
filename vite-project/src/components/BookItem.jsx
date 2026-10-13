function BookItem({ id, title, author, read, onToggleRead, onDelete }) {
  return (
    <div className="book-row">
      <div className="book-cover">{title.charAt(0).toUpperCase()}</div>

      <div className="book-info">
        <p className={read ? 'book-title done' : 'book-title'}>{title}</p>
        <div className="book-author">{author}</div>
      </div>

      <div
        className={read ? 'read-check checked' : 'read-check'}
        onClick={() => onToggleRead(id)}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>

      <button
        className="delete-btn"
        title="Убрать с полки"
        onClick={() => onDelete(id)}
      >
        ✕
      </button>
    </div>
  )
}

export default BookItem
