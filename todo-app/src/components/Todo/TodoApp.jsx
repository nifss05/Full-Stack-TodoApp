
import './TodoApp.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodoComponent from './ListTodoComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
import AddTodoComponent from './AddTodoComponent';


function AuthRoute({children})
{
    const ucontext = useAuth()
        if(ucontext.isAuthenticated)
            return children
        return  <Navigate to={"/"}/>
}

export default function TodoApp(){
    return(
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>

                       
                        <Route path='/welcome/:username' element={
                            <AuthRoute>
                            <WelcomeComponent/>
                            </AuthRoute>
                            }/>
                       

                        <Route path='/todos' element={
                            <AuthRoute>
                            <ListTodoComponent/>
                            </AuthRoute>
                            }/>

                            <Route path='/todo/:id' element={
                            <AuthRoute>
                            <AddTodoComponent/>
                            </AuthRoute>
                            }/>

                        <Route path='/logout' element={
                            <AuthRoute>
                                 <LogoutComponent/>
                            </AuthRoute>
                            }/>
                    </Routes>
                </BrowserRouter> 
            </AuthProvider>    
        </div>
        
    )
}









