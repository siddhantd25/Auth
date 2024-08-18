import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const loginpage = () => {
    const {loginData, setLoginData} = useState({
        username:'',
        password:'',
    })

    const handleloginsubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8000/login', loginData);
            const [success, message] = response.data;

            if(success){
                console.log('Login Successfully');
            }
            else{
                console.log(message);
            }
        }
        catch(error)
        {
            console.error('Login error', error);
        }
        setLoginData({
            username:'',
            password:''
        })
    }

    const handleLoginChange = (e) =>{
        const {name, value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleloginsubmit}>
        <input
        type='text'
        name='username'
        placeholder='username'
        required
        value={loginData.username}
        onChange={handleLoginChange}/>
        <input
        type='password'
        name='password'
        placeholder='password'
        required
        value={loginData.password}
        onChange={handleLoginChange}/>
        <button type='submit'>Login</button>
        <p>
            Not Registered yet
            <Link to = "/signup">Register Here</Link>
        </p>
      </form>
    </div>
  )
}

export default loginpage
