function Input({ value, onChange }) {
  return (
    <input
      className="input"
      placeholder="Название книги..."
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
