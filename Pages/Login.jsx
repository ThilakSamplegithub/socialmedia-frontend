import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
      const handleLogin=()=>{
    const payload={email,password}
    console.log(payload)
    fetch("http://localhost:8080/users/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>{console.log(res);localStorage.setItem("token",res.token)})
  }
  return (
    <div>
      <input type="text" value={email} onChange={(e)=>e.target.value}  />
      <input type="password" value={password} onChange={(e)=>e.target.value} />
      <button onClick={handleLogin}></button>
    </div>
  )
}

export default Login
