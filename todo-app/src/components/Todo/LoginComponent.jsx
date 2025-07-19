import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'


function LoginComponent(){

    const [username,setuserName]=useState('Nifal')
    const [password,setpassword]=useState('')
    const [eMessage,seteMessage]=useState(false)

    const navigate = useNavigate();

    const ucontext = useAuth()

    function handleUserChange(event){
        setuserName(event.target.value)
    }

    function handlePasswordChange(event){
        setpassword(event.target.value)
    }

    async function handleSubmit(){
        if(await ucontext.Login(username,password))
            {
            navigate(`/welcome/${username}`)
            }
            else{
                seteMessage(true);
            }
    }

    return(
        <div className="login">
            <div className="loginForm">
                <div>
                     {eMessage && <div>login failed</div>}
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserChange}></input>
                </div>
                 <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button name="login" onClick={handleSubmit}>Login</button>
                </div>    
            </div>
        </div>
    )
}

export default LoginComponent