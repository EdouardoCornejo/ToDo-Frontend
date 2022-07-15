import {useState} from 'react'
const TodoInput = ({addTodo}) => {
    const[title, setTitle] = useState('')

    const handleAddTodo = (e) => {
        if(e.key.toLowerCase() === 'enter'){
            addTodo(title)
            setTitle('')
        }
    }

console.log(title)
    return(
        <div className='mt-3 relative'>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            </div>
            <input type='text'
                className='focus:shadow-md font-inter focus:shadow-indigo-700 pl-5 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'            
                placeholder='Insert something to do'
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => handleAddTodo(e)}
            />
        </div>
    )
}

export default TodoInput
