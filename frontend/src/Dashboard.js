import {useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default  function Dashboard(props){

    const [userData, setUserData] = useState('');

    function signOut(){
        localStorage.clear();
        props.history.push('/Signin');       
    }

    function getDetails(){
        axios.get(`http://localhost:9898/getUserData/${localStorage.getItem('token')}`).then(
            (res) => {
                console.log("success:", res);
                setUserData(res);
            }
        ).catch((err) => {
            console.log("err:", err);
        })
    }

    return(
        <div className='dashboard'>
            <button onClick={getDetails}>Get Details</button>
            <button onClick={signOut}>Sign Out</button>
            <div className='userData'>
                <table>
                    <tr>
                        <td>
                            {userData && userData.data.data.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {userData && userData.data.data.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {userData && userData.data.data.contact}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {userData && userData.data.data.dob}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {userData && userData.data.data.lang}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}