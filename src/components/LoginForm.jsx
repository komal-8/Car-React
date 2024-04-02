import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import styles from "./RegisterForm.module.css"

function Form({users}) {
  let data={username:"",password:""};
  let [entry,setEntry]=useState(data);
  const Navigate=useNavigate();

  function handleSubmit(e){
   
    // const a=users.filter(()=>{entry.name===users.username && entry.password===users.password})
    let obj = users.find(o => o.username === entry.username && o.password === entry.password );
    console.log(obj)
    if(!obj){
      // console.log("Incorrect credentials")
      alert('Incorrect credentials ! Try login again ')
      Navigate('/login')
    }


    else Navigate('/home')

  }
  return (
    <div className={styles.container}>
        <h1>Login Form</h1>
        <div className={styles.form}>
        <form action="">
            <input type="text" placeholder='username' value={entry.username} onChange={(e)=>{
              setEntry({...entry,username:e.target.value});
              
            }}/>
            <br />
            <br />
            <input type="password" placeholder='password' onChange={(e)=>{setEntry({...entry,password:e.target.value})}} />
            <br /><br />
            
        
        <button onClick={handleSubmit} >Login </button>
        </form>
      </div>
      </div>
    
  )
}

export default Form
