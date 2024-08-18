import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import loginpage from './loginpage';
import signuppage from './signuppage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login'
        element = {<loginpage/>}/>
        <Route path='/signup'
        element = {<signuppage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
