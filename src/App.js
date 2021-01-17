import React, { useState } from 'react';

import './App.css';
import { getTokenData } from './functions';

function App() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    type: 'USER_PASSWORD_AUTH'
  });
  const [tokenData, setTokenData] = useState({});
  console.log(tokenData)

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setTokenData(await getTokenData(userData))
  }

  return (
    <div><div className="App">
      <h2>Sign In</h2>
      <hr />
      <form >
        <label htmlFor='username' className="form-element">User Name:</label>
        <input type='text' name='username' placeholder='usertest' onChange={changeHandler} className="form-element"></input>
        <br />
        <label htmlFor='password' className="form-element">Password:</label>
        <input type='password' name='password' placeholder='Password...' onChange={changeHandler} className="form-element"></input>
        <br />
        <button onClick={submitHandler} className="form-element">Sign In</button>
      </form>
    </div>
    </div>
  );
}

export default App;
