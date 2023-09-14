import React from "react";
import {useEffect, useState} from 'react'
import {getAuth} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import '../styles/Profile.css';

function Profile ()
{   const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect (()=> {
        setUser(auth.currentUser)
    } , [])
    const onLogout = ()=>{
        auth.signOut();
        navigate('/')
    }
    return (
            <div className="profile">
                <div className="profile-component">
                    <h1>Profile Info</h1>
                    <label>Email address:</label>
                <div className="profile-section">
                {user ? (<p>{user.email}</p> ) : (<p>No user found</p>)}
                </div>
                <button type="submit" onClick={onLogout}>Logout</button>
            </div> 

            <div className="profile-deletion-component">
                <h1>Delete Account</h1>
                <p>You will lose your account once deletion request has been submitted.</p>
                <button>Delete Account</button>
            </div>
        </div> 
         
    )
    
}

export default Profile