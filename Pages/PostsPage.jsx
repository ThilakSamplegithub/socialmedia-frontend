import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const PostsPage = () => {
  const [data,setData]=useState
  useEffect(()=>{
    fetch("http://localhost:8080/posts",{
      headers:{
        "content-type":"application/json",
        "Authorization":localStorage.getItem("token")
      }
    })
    .then(res=>res.json())
    .then(res=>{console.log(res);setData(res)})
  },[])
  console.log(data)
  const handleDelete=(id)=>{
    fetch("http://localhost:8080/posts/delete",{
      method:"DELETE",
      headers:{
        "content-type":"application/json",
        "Authorization":localStorage.getItem("token")
      }
    })
    .then(res=>res.json())
    .then(res=>{console.log(res);setData(res)})
  }
  return (
    <div>
      {Array.isArray(data)&&data.map(({title,body,device,_id},i)=><div>
        <p>{i}. {title}-{body}-{device}</p>
        <button onClick={()=>handleDelete(_id)}>delete</button>
       <Link to={`/update/${_id}`}><button>update</button></Link>
      </div>)}
    </div>
  )
}

export default PostsPage
