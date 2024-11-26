import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const [isEdit, setIsEdit] = useState(false)
  const [editInput, setEditInput] = useState('')
  const [isStrike, setIsStrike] = useState(false)

  const {todo, deleteItem, saveTodo} = props
  const {id, title} = todo

  const toggleEditMode = () => {
    setIsEdit(true)
    setEditInput(title)
  }

  const handleSave = () => {
    if (editInput.trim() !== '') {
      saveTodo(id, editInput)
      setIsEdit(false)
    }
  }

  const toggleStrike = () => {
    setIsStrike(prev => !prev)
  }

  return (
    <li className="todo-container">
      <input type="checkbox" onChange={toggleStrike} />
      {isEdit ? (
        <input
          type="text"
          value={editInput}
          onChange={e => setEditInput(e.target.value)}
          className="todo-edit-input"
        />
      ) : (
        <p className={`todo ${isStrike ? 'strike-through' : ''}`}>{title}</p>
      )}
      {!isEdit ? (
        <button type="button" onClick={toggleEditMode}>
          Edit
        </button>
      ) : (
        <button type="button" onClick={handleSave}>
          Save
        </button>
      )}
      <button type="button" onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
