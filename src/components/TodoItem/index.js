<<<<<<< HEAD
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
=======
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {isEdit: false, editInput: ''}

  componentDidMount() {
    const {todo} = this.props
    const {title} = todo
    this.setState({editInput: title})
  }

  deleteTodo = () => {
    const {todo, deleteItem} = this.props
    const {id} = todo
    deleteItem(id)
  }

  changeInput = e => {
    this.setState({editInput: e.target.value})
  }

  saveTodo = async () => {
    const {editInput} = this.state
    const {saveTodoItem, todo} = this.props
    const {id} = todo
    await this.setState(() => ({isEdit: false}))
    saveTodoItem(id, editInput)
  }

  render() {
    const {isEdit, editInput} = this.state
    const {todo} = this.props
    const {title} = todo
    // console.log(todo)
    return (
      <li className="todo-container">
        {isEdit ? (
          <input
            type="text"
            className="edit-input"
            onChange={this.changeInput}
            value={editInput}
          />
        ) : (
          <p className="todo">{title}</p>
        )}
        {isEdit ? (
          <button className="edit-btn" type="button" onClick={this.saveTodo}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            type="button"
            onClick={() => this.setState({isEdit: true})}
          >
            Edit
          </button>
        )}
        <button type="button" onClick={this.deleteTodo} className="del-btn">
          Delete
        </button>
      </li>
    )
  }
>>>>>>> upadted
}

export default TodoItem
