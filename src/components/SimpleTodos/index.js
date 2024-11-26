import {Component} from 'react'
import shortid from 'shortid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, todoText: ''}

  deleteItem = id => {
    const filteredTodos = this.state.todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredTodos})
  }

  changeTodo = e => {
    this.setState({todoText: e.target.value})
  }

  addTodo = () => {
    const {todoText, todoList} = this.state
    const match = todoText.match(/(.*?)(\d+)$/)

    if (match) {
      const text = match[1].trim()
      const count = parseInt(match[2], 10)

      const newTodos = Array.from({length: count}, (_, index) => ({
        id: shortid.generate(),
        title: `${text} ${index + 1}`,
      }))

      this.setState({
        todoList: [...todoList, ...newTodos],
        todoText: '',
      })
    } else {
      const newTodo = {id: shortid.generate(), title: todoText.trim()}

      if (todoText.trim() !== '') {
        this.setState(prevState => ({
          todoList: [...prevState.todoList, newTodo],
          todoText: '',
        }))
      }
    }
  }

  saveTodo = (id, newTitle) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each =>
        each.id === id ? {...each, title: newTitle} : each,
      ),
    }))
  }

  render() {
    const {todoList, todoText} = this.state

    return (
      <div className='bg-container'>
        <div className='card-container'>
          <h1 className='heading'>Simple Todos</h1>
          <div className='add-new-todo-container'>
            <input
              type='text'
              value={todoText}
              onChange={this.changeTodo}
              placeholder='Add your todo here...'
            />
            <button type='button' onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul>
            {todoList.map(each => (
              <TodoItem
                todo={each}
                key={each.id}
                saveTodo={this.saveTodo}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
