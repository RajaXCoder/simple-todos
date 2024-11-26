import {Component} from 'react'
<<<<<<< HEAD
import shortid from 'shortid'
=======
>>>>>>> upadted
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
<<<<<<< HEAD
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
=======
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
>>>>>>> upadted
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, todoText: ''}

  deleteItem = id => {
<<<<<<< HEAD
    const filteredTodos = this.state.todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredTodos})
  }

  changeTodo = e => {
    this.setState({todoText: e.target.value})
  }

  addTodo = () => {
=======
    const {todoList} = this.state
    const filterTodo = todoList.filter(each => each.id !== id)

    this.setState({todoList: filterTodo})
  }

  addTodosList = () => {
>>>>>>> upadted
    const {todoText, todoList} = this.state
    const match = todoText.match(/(.*?)(\d+)$/)

    if (match) {
      const text = match[1].trim()
      const count = parseInt(match[2], 10)

      const newTodos = Array.from({length: count}, (_, index) => ({
<<<<<<< HEAD
        id: shortid.generate(),
=======
        id: Math.random * 1000000000000000000,
>>>>>>> upadted
        title: `${text} ${index + 1}`,
      }))

      this.setState({
        todoList: [...todoList, ...newTodos],
        todoText: '',
      })
    } else {
<<<<<<< HEAD
      const newTodo = {id: shortid.generate(), title: todoText.trim()}
=======
      const newTodo = {
        id: Math.random * 10000000000000000000000000000,
        title: todoText.trim(),
      }
>>>>>>> upadted

      if (todoText.trim() !== '') {
        this.setState(prevState => ({
          todoList: [...prevState.todoList, newTodo],
          todoText: '',
        }))
      }
    }
  }

<<<<<<< HEAD
  saveTodo = (id, newTitle) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each =>
        each.id === id ? {...each, title: newTitle} : each,
      ),
=======
  saveTodoItem = (id, title) => {
    console.log(title)
    this.setState(prev => ({
      todoList: prev.todoList.map(each => {
        if (each.id === id) return {...each, title}
        return each
      }),
>>>>>>> upadted
    }))
  }

  render() {
    const {todoList, todoText} = this.state

    return (
<<<<<<< HEAD
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
=======
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-todo-element"
              onChange={e => this.setState({todoText: e.target.value})}
              value={todoText}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.addTodosList}
            >
>>>>>>> upadted
              Add
            </button>
          </div>
          <ul>
            {todoList.map(each => (
              <TodoItem
                todo={each}
                key={each.id}
<<<<<<< HEAD
                saveTodo={this.saveTodo}
                deleteItem={this.deleteItem}
=======
                deleteItem={this.deleteItem}
                saveTodoItem={this.saveTodoItem}
>>>>>>> upadted
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
