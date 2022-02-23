import './App.css'
import {useState} from 'react'
import axios  from 'axios';

var pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~?<>])[a-zA-Z0-9!@#$%^&*~?<>]{8,30}$/;
var emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;

var checkValidation = false;

export default function Login(){
    const [email, setEmail] = useState('');
    const [pwd, setpwd] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePwd = (e) => {
        setpwd(e.target.value);
    }

    function emailValidation(){
        if(!emailRegex.test(email)){
            alert('Error email');
            checkValidation = false;
        } else {
            checkValidation = true;
        }
    }

    function pwdValidation(){
        if(!pwdRegex.test(pwd)){
            alert('Error pwd');
            checkValidation = false;
        } else {
            checkValidation = true;
        }
    }

    const loginUser = () => {
        const userObject = {
            email:email,
            pwd:pwd
        }

        axios.post('http://localhost:9898/signin', userObject)
        .then((res) => {
            console.log(res.data)

        }).catch((error) => {
            console.log(error)
        });
    }

    return(
        <div className = 'login'>
            <h1>
                User Login
            </h1>

            <form>
                <label className='label'>
                    Email
                </label>
                <input onChange={handleEmail} className='input' value={email} type='email' onBlur={emailValidation}/>
            
                <label className='label'>
                    Password
                </label>
                <input onChange={handlePwd} className='input' value={pwd} type='password' onBlur={pwdValidation}/>
            </form>
            <button onClick={loginUser} type='submit' className='submitButton'>Submit</button>
        </div>

    )
}