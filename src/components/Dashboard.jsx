import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
// import {Link,useNavigate} from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import styles from "./Dashboard.module.css"


function Dashboard({blogs}) {

    // const location = useLocation();
    // let  blog= location.state?.blog;

    // let new_blog={id:uuidv4(),name:"",
    // img:"",
    // color:"",year:""}
    
    let [blogs_arr,setBlogs]=useState(blogs)


    // let [blogs,setBlogs]=useState([
    //     {id:uuidv4(),name:'idkk',
    //     img:'data:image/jpeg;base64,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',
    //     color:'Orange',year:'2020'},
    //     {id:uuidv4(),name:'safari',img:'https://th.bing.com/th?id=OIP.kQmplfcVhrbcdoSuXMKCGwHaE6&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2',
    //     color:'White',year:'2000'},
    //     {id:uuidv4(),name:'safari',img:'https://th.bing.com/th?id=OIP.kQmplfcVhrbcdoSuXMKCGwHaE6&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2',
    //     color:'White',year:'2000'}
    // ])
    // const Navigate=useNavigate();

    function handleAdd(blogg){
        // Navigate('/new')
        // console.log(blogs_arr);
        // console.log(blogs)
        setBlogs([...blogs_arr,blogg])
        // Navigate('/new', { state: { handleAdd } })
        
    }

    function handleDelete(id){
        // console.log(id)
        // // console.log(blog.text)
        let new_blogs=blogs_arr.filter((blog)=>{
            if(blog.id==id){
                return false;
            }
            else{
                return true;
            }
        })
        // console.log(new_blogs)
        // blogs=new_blogs
        setBlogs(new_blogs)
        console.log(blogs_arr)
        console.log(blogs)
        
        // console.log(blogs)

        // for (var i = 0; i < blogs.length; i++) {
        //     var obj = blogs[i];
        
        //     if (obj.id === id) {
        //         console.log(blogs[i])
        //         console.log(blogs)
        //         blogs.splice(i, 1);
        //     }
        // }
    }

  return (
    <div className={styles.container}>
        
      <h1>Home page</h1>
      <div className={styles.blogs}>
      <ul style={{listStyleType:'none'}} className={styles.blog}>
        {
            blogs_arr.map((blog)=>(
            
                <li key={blog.id}><br />
                    <h3>Car Image</h3><img style={{height:'300px' , width:'350px'}} src={blog.img} alt="" />
                    <h3>Car name - <span> {blog.name} </span></h3>
                    <h3> Car color -  <span>  {blog.color} </span></h3>
                    <h3>Car year -     <span>{blog.year} </span></h3>
                    <button onClick={()=>handleDelete(blog.id)}>Delete Car</button>
                </li>
                
            ))
        }
        
      </ul>
      {/* <button onClick={handleAdd}>Add new car</button> */}
      
      </div>
      <AddBlog handleAdd={handleAdd}/>
    </div>

  )
}


function AddBlog({handleAdd}) {
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
    // const location = useLocation();
    // let  handleAdd= location.state?.handleAdd;


    // let [blogs_arr,setBlogs]=useState(blogs)
    // const Navigate=useNavigate();

    let blog={id:"",name:"",
    img:"",
    color:"",year:""}
    let [blogg,setBlogg]=useState(blog)
    
    function onSubmit(e){

        e.preventDefault();
        blogg.id=uuidv4();
        console.log(blogg)
        setBlogg(blogg)
        handleAdd(blogg)
    
    //   console.log(blog);
    //   blogs.push({...blogg})
    //   // blog=blogs_arr
    //   // setBlogs(blog_arr)
    //   console.log(blogs)
    //   // Navigate('/home', { state: { blogg } })
    //   Navigate('/home')
      
      
    }

  return (
    <div className={styles.new_blog}>
        <h1>Add new Car</h1>
        <div>
      <form action="" className={styles.new_blog_form}>
        <input type="text" placeholder='car Name' value={blogg.name} onChange={(e)=>{
              setBlogg({...blogg,name:e.target.value}); 
            }}/>
            <br /><br />
        <input type="img" placeholder='car image' value={blogg.img} onChange={(e)=>{
              setBlogg({...blogg,img:e.target.value}); 
            }}/><br /><br />
        <input type="text" placeholder='car color' value={blogg.color} onChange={(e)=>{
              setBlogg({...blogg,color:e.target.value}); 
            }}/><br /><br />
        <input type="Number" placeholder='car year' value={blogg.year} onChange={(e)=>{
              setBlogg({...blogg,year:e.target.value}); 
            }}/><br /><br />
        
        <button onClick={onSubmit}>Add Car</button>
        
      </form>
      </div>
    </div>
  )
}




export default Dashboard
