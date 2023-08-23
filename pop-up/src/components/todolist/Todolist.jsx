import "./Todolist.css";
import { useState } from 'react';

function TodoListApp() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }

        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    function deleteTodo(id) {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)

        setTodos(updatedTodos)
    }

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id == id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div className="App">
            <h1>todos</h1>
            <form className="input" onSubmit={handleSubmit}>
                <input type="text" placeholder="E.g. Build a web app" onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button type="submit">Add</button>
            </form>
            {todos.map((todo) => <div className="list" key={todo.id}>
                <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>
                <div className="text">{todo.text}</div>
                <button onClick={() => deleteTodo(todo.id)}>x</button>
            </div>)}
        </div>
    );
}

export default TodoListApp;