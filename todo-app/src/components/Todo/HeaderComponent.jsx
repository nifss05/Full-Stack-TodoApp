import {Link} from 'react-router-dom'
import img from '../../images/to-do-list.png'
import { useAuth } from './security/AuthContext';


function HeaderComponent() {

  const ucontext = useAuth()
  const isAuthenticated = ucontext.isAuthenticated

  function Logout(){
    return(
      ucontext.logout()
    )
  }
  //console.log(ucontext.number)

  return (                  
    <header className="border-bottom border-dark bg-black border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-md bg-black mb-3 p-1">
            <a
              className="navbar-brand text-white d-flex align-items-center"
              href="https://www.linkedin.com/in/sm-nifal-71a2b5284/"
              style={{ gap: '5px' }}
            >
              <img
                alt="Logo"
                src={img}
                style={{ height: '40px', width: 'auto' }}
              />
               SM-ToDo
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ">
                <li className="nav-item fs-5">
                  {isAuthenticated && <Link className="nav-link text-white" to="/welcome/Sm Nifal">
                    Home
                  </Link>}
                </li>
                <li className="nav-item fs-5">
                  {isAuthenticated && <Link className="nav-link text-white" to="/todos">
                    Todos
                  </Link>}
                  
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                { !isAuthenticated && <Link className="nav-link text-white" to="/login">
                  Login
                </Link>}
              </li>
              <li className="nav-item fs-5">
                {isAuthenticated && <Link className="nav-link text-white" to="/logout" onClick={Logout}>
                  Logout
                </Link>}
                
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent