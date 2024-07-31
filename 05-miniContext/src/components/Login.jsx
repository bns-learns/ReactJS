import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

//Login component will be rendered in UserContextProvider.jsx
function Login() {
    //state management
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //updating the value of User. using the contextAPI here.
    const setUser = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault(); //in order to prevent the passing of value (unnecessary in this case)
        setUser({username, password}); //a function that'll pass the values to useContext hence, creating context
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username}
        onChange={(e) => setUsername(e.target.value)}
      placeholder='username' />
      <input type="text" value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login