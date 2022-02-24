import {useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default  function Dashboard(props){
    function signOut(){
        props.history.push('/');       
    }

    function getDetails(){
        
    }

    return(
        <div className='dashboard'>
            <button onClick={getDetails}>Get Details</button>
            <button onClick={signOut} >Sign Out</button>
        </div>
    )
}