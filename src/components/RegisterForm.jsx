import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import styles from "./RegisterForm.module.css"

function RegisterForm({users}) {

    let data={username:"",age:"",fullName:"",password:""};
    let [entry,setEntry]=useState(data);
    let [object,setObject]=useState(users);
    const Navigate=useNavigate();
    function handleSubmit(e){
        // setObject(
          users.push({
            // username:entry.username,
            // age:entry.age,
            // fullName:entry.fullName,
            // password:entry.password
            ...entry
        })
        // )
        console.log(users)
        Navigate('/login')

    }
  return (
    <div className={styles.container}>
      <h1>Register Form</h1>
      <div className={styles.form}>
      <form action="" >
            <input type="text" placeholder='username' value={entry.username} onChange={(e)=>{
              setEntry({...entry,username:e.target.value}); 
            }} />
            <br></br>
            <br></br>
            <input type="number" placeholder='Age' value={entry.age} onChange={(e)=>{
              setEntry({...entry,age:e.target.value});
              
            }}/>
            <br></br>
            <br></br>
            <input type="text" placeholder='FullName' value={entry.fullName} onChange={(e)=>{
              setEntry({...entry,fullName:e.target.value});
              
            }}/>
            <br></br>
            <br></br>
            <input type="password" placeholder='password' value={entry.password} onChange={(e)=>{
              setEntry({...entry,password:e.target.value});
              
            }}/>
            <br></br>
            <br></br>
            <button onClick={handleSubmit}> Register </button>
            
        </form>
        </div>
        
    </div>
  )
}

export default RegisterForm
