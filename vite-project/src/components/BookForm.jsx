import { useState } from 'react'
import Input from './Input'
import Button from './Button'

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const cleanTitle = title.trim()
    if (!cleanTitle) return

    onAdd(cleanTitle)
    setTitle('')
  }

  return (
    <form className="add-book-row" onSubmit={handleSubmit}>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Добавить на полку</Button>
    </form>
  )
}

export default BookForm
