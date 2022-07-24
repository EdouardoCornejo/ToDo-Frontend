import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function AppTodo() {

    const [todos, setTodos] = useState([
      {
        id: 1,
        title: 'Make a ToDo Frontend',
        date: '05/07/2022',
        completed: false,
      },
      {
        id: 2,
        title: 'Watch a movie',
        date: '15/04/2022',
        completed: false,
      },
    ])
    const [activeFilter, setActiveFilter] = useState('all') //Filter all from the list
    const [filteredTodos, setFilteredTodos] = useState(todos)  //stock copy of all initials

    const addTodo = (title,date) => {  
      const lastId = todos.length > 0 ? todos[todos.length -1].id :1

      const newTodo = {
        id: lastId + 1,
        title,
        date,
        completed: false
      }

      const todoList = [...todos]
        todoList.push(newTodo)
        setTodos(todoList)
    }

    const handleSetComplete = (id) => {    //Make the change completed and not completed
      const updatedList = todos.map(todo => {
        if (todo.id === id){
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      setTodos(updatedList)
    }

    const handleDelete = (id) => {  // Filter to remove all
      const updatedList = todos.filter(todo => todo.id !== id)
        setTodos(updatedList)
    }

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed)
    setTodos(updatedList)
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }    

  const showActiveTodos = () => {
    setActiveFilter('active')
  }  

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }  
  
  useEffect(()=>{
    if(activeFilter === 'all'){
      setFilteredTodos(todos)
    }else if (activeFilter === 'active'){
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    }else if (activeFilter === 'completed'){
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  },[activeFilter, todos])

  return (
  <div className='bg-white m-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-10 px-5'>
    <div className='rounded-xl container flex flex-col max-w-xl'> 
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList 
        todos={filteredTodos} 
        activeFilter={activeFilter}
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />    
    </div>
  </div> 
  )
}

export default AppTodo;
