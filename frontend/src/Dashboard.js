import './App.css'
import {useState} from 'react'
import axios  from 'axios';

export default function Dashboard() {

    return(
        <div className='dashboard'>
            <button className='getDetails' type='submit'>Get Details</button>

            <button className='logout' type='submit'>Log Out</button>
        </div>
    )
}