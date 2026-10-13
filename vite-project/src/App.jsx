import { useState } from 'react'
import ShelfScreen from './pages/ShelfScreen'

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
  ])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  const addBook = (title) => {
    const newBook = {
      id: Date.now(),
      title,
      author: 'Автор не указан',
      read: false,
    }
    setBooks((prev) => [...prev, newBook])
  }

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  const toggleRead = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    )
  }

  return (
    <ShelfScreen
      books={books}
      showOnlyUnread={showOnlyUnread}
      onToggleFilter={() => setShowOnlyUnread((prev) => !prev)}
      onAdd={addBook}
      onToggleRead={toggleRead}
      onDelete={deleteBook}
    />
  )
}

export default App
