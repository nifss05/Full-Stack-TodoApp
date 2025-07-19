import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import {  executeJwtAuthenticationService } from "../api/AuthenticationApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{

    const[isAuthenticated,setAuthentication] = useState(false)
    const[username,setUsername] = useState(null)
    const [token, setToken] = useState(null)

    // function Login(username,pasword)
    // {
    //      if(username==="Nifal" && pasword==="dummy")
    //     {
    //         setAuthentication(true)
    //         setUsername(username)
    //         return true 
    //     }
    //     else{
    //         setAuthentication(false)
    //         setUsername(null)
    //         return false  
    //     }
    // }
    async function Login(username,password)
    {
     try {
            const response = await executeJwtAuthenticationService(username, password)

            if(response.status===200){
                const jwtToken = 'Bearer ' + response.data.token
                setAuthentication(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

                return true            
            } else {
                logout()
                return false
            }    
        } catch(error) {
            logout()
            return false
        }
    }


    function logout() {
        setAuthentication(false)
        setToken(null)
        setUsername(null)
    }


    return(
        <AuthContext.Provider value={{isAuthenticated,Login,logout,username,token}}>
            {children}
        </AuthContext.Provider>

    )
}