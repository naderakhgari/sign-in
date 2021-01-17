import React from 'react';

import './App.css';

function App() {

  const changeHandler = (event) => {
  }

  const submitHandler = async (event) => {
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
            <input type='password' name='password' placeholder='Password...' onChange={changeHandler}className="form-element"></input>
            <br />
            <button onClick={submitHandler} className="form-element">Sign In</button>
          </form>
        </div>
    </div>
  );
}

export default App;
