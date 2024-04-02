import React from 'react'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {Link,useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';




function Addblog({blogs}) {
    // let [text,setText]=useState();
    // let [name,setname]=useState();

    // function handleText(e){
    //     setText(e.target.value);
    //     console.log(e.target.value)
    // }
    // function handleName(e){
    //     setname(e.target.value);
    //     console.log(e.target.value)
    // }
    const location = useLocation();
    let  handleAdd= location.state?.handleAdd;


    // let [blogs_arr,setBlogs]=useState(blogs)
    const Navigate=useNavigate();

    let blog={id:uuidv4(),name:"",
    img:"",
    color:"",year:""}
    let [blogg,setBlogg]=useState(blog)
    
    function handleAdd(e){
      
      // console.log(blog);
      blogs.push({...blogg})
      // blog=blogs_arr
      // setBlogs(blog_arr)
      console.log(blogs)
      // Navigate('/home', { state: { blogg } })
      Navigate('/home')
      
      
    }

  return (
    <div>
        <h1>Add new Blog</h1>
      <form action="">
        <input type="text" placeholder='car Name' value={blogg.name} onChange={(e)=>{
              setBlogg({...blogg,name:e.target.value}); 
            }}/>
        <input type="img" placeholder='car image' value={blogg.img} onChange={(e)=>{
              setBlogg({...blogg,img:e.target.value}); 
            }}/>
        <input type="text" placeholder='car color' value={blogg.color} onChange={(e)=>{
              setBlogg({...blogg,color:e.target.value}); 
            }}/>
        <input type="Number" placeholder='car year' value={blogg.year} onChange={(e)=>{
              setBlogg({...blogg,year:e.target.value}); 
            }}/>
        
        <button onClick={handleAdd}>Add Car</button>
        
      </form>
    </div>
  )
}

export default Addblog
