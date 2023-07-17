import React, { useReducer } from 'react'
const actions={
  EMAIL:"EMAIL",
  PASSWORD:"PASSWORD",
  GENDER:"GENDER",
  NAME:"NAME",
  RESET:"RESET"
}
const initialState={
  email:"",
  gender:"",
  name:"",
  password:""
}
const SignupPage = () => {
  const reducer=(state=initialState,(type,payload)=>{
    switch(type){
      case actions.NAME:{
        return {...state,name:payload}
      }
      case actions.EMAIL:{
        return {...state,email:payload}
      }
      case actions.GENDER:{
        return {...state,gender:payload}
      }
     case actions.PASSWORD:{
      return{...state,password:payload}
    }
     case actions.RESET:{
      return initialState
     }
      default:{
        return state
      }
    }
  })
  const[state,dispatch]=useReducer(reducer,initialState)
  const{name,password,gender,email}=state
  const handleSignup=()=>{
    const payload={email,gender,name,password}
    console.log(payload)
    fetch("http://localhost:8080/users/register",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
  }
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>dispatch({type:actions.NAME,payload:e.target.value})} />
      <input type="text" value={email} onChange={(e)=>dispatch({type:actions.EMAIL,payload:e.target.value})}  />
      <input type="password" value={password} onChange={(e)=>dispatch({type:actions.PASSWORD,payload:e.target.value})} />
      <input type="text" value={gender} onChange={(e)=>dispatch({type:actions.GENDER,payload:e.target.value})} />
      <button onClick={handleSignup}></button>
    </div>
  )
}

export default SignupPage
