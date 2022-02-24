import {useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default  function Dashboard(props){
    function signOut(){
        localStorage.clear();
        props.history.push('/Signin');       
    }

    function getDetails(){
        axios.get(`http://localhost:9898/getUserData/${localStorage.getItem('token')}`).then(
            (res) => {
                console.log("success:", res);
            }
        ).catch((err) => {
            console.log("err:", err);
        })
    }

    return(
        <div className='dashboard'>
            <button onClick={getDetails}>Get Details</button>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}