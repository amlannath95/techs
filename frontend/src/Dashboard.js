import {useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default  function Dashboard(){
    return(
        <div className='dashboard'>
            <button >Get Details</button>
            <button >Log Out</button>
        </div>
    )
}