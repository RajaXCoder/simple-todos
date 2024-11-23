import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  deleteTodo = () => {
    const {todo, deleteItem} = this.props
    const {id} = todo
    deleteItem(id)
  }

  render() {
    const {todo} = this.props
    const {title} = todo
    console.log(todo)
    return (
      <li className="todo-container">
        <p className="todo">{title}</p>
        <button type="button" onClick={this.deleteTodo} className="del-btn">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
