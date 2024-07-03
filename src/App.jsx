import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) =>{
    return new Promise((reslove, reject)=>{
      setTimeout( () =>{
        reslove()
      }, d * 1000);
    })
  }

  
  const onSubmit = async (data) => {
    await delay(2)  // simulating network delay
    console.log(data)

  //   if(data.username !== "shunham"){
  //     setError("myform", {message: "Username is invalid"})
  //   }
  //  if(data.username === "rohan"){
  //     setError("blocked", {message: "Sorry this user is block"})
  //   }
  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
     <div className="container">
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Username' {...register("username", { required: {value: true, 
      message: "This field is required"}, minLength:

      {value: 3, message: "Min length is 3"},

      maxLength:{value: 8, message: "Max length is 8"} })} type="text"/>

      {errors.username && <div className='red'>{errors.username.message}</div>}
       
      <br />
      <input placeholder='password' {...register("password", 
       {minLength: {value: 7, message: "Min length of password is 7"},})} type="password" />

     
      {errors.password && <div className='red'>{errors.password.message}</div>}
      <br />

      <input disabled={isSubmitting} type="submit" value="Submit" />

      {errors.myform && <div className='red'>{errors.myform.message}</div>}
      {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
    </form>
   </div>
    </>
  )
}

export default App
