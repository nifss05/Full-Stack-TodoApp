import {useParams,Link} from 'react-router-dom'
function WelcomeComponent(){
    const {username} = useParams()
    return(
        <div className='welcome'>
            <h1>welcome {username}!! </h1>
            <div>Manage your todo - <Link to="/todos">Click Here</Link></div>
        </div>
    )
}

export default WelcomeComponent