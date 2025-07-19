import { useEffect, useState } from "react"
import { DeleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ListTodoComponent(){

    const [todos,setTodos] = useState([])
    const [Message,seteMessage] = useState(null)

    const ucontext = useAuth()
    const username = ucontext.username

    const navigate = useNavigate()

    useEffect ( () => refreshTodos(), [])

    function refreshTodos() {
        
        retrieveAllTodosForUsernameApi(username)
        .then(response => {
            setTodos(response.data)
        }
            
        )
        .catch(error => console.log(error))
    
    }

    function deleteTodo(id)
    {
        console.log("delete" + id)
        DeleteTodoApi(username,id)
        .then(
            ()=>{seteMessage(`todos deleted where id=${id}`)
            refreshTodos()
        }
        )
         .catch(error => console.log(error))
    }

     function UpdateTodo(id){
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }
    

    return(
        <div className='container'>
            <h1>Things You Want To Do!! </h1>
            {Message && <div className="alert alert-warning">{Message}</div>}
            <div>
                <table className='table table-dark table-hover bg-dark text-white'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done</th>
                            <th>Target Date</th>
                            <th></th>
                             <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                     <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}> Delete</button></td>
                                     <td><button className="btn btn-success" onClick={()=>UpdateTodo(todo.id)}> Update</button></td>
                                </tr>
                            )
                         )
                        }
                        
                    </tbody>
                </table>
            </div>
           <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>             
        </div>
    )
}

export default ListTodoComponent