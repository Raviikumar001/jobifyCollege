
import { useState, useEffect } from "react"
import {Logo} from '../components/Index';
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember:  true,
}


const Register = () => {

  const [values, setValues] = useState(initialState);

  const handleChage = (e)=> {
     console.log(e.target);

  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }


  return (
    <Wrapper className="full-page">
      <form  className="form" onSubmit={onSubmit}>
      <Logo />
      <h3>Login</h3>
       <div className="form-row"> 
       <label htmlFor="name" className="form-lable">
       Name

       </label>
       <input   type="text" value ={values.name} name="name"

        onChange={handleChage}
        className="form-input"
       />

       </div>
       <button type="submit" className="btn btn-block">
          Submit
       </button>

      </form>
    </Wrapper>
  )
}

export default Register