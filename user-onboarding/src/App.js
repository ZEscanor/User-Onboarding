import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form.js';
import UserZ from './User.js'
import schema from './validation/formSchema.js';
import axios from 'axios';
import * as yup from "yup";
const initialFormValues ={
//inputs
  name:'',
  email:'',
  password:'',
  // checkbox
  termsOfService: false,
  //submit
}
const initialFormErrors = {
  name:" ",
  email:'',
  password: '',
}
const initialUser = [];
const initialDisabled = true;

export default function App() {
  const [user,setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getFriends = () => {
   axios.get(`https://reqres.in/api/users`)
    .then(res =>{
      // console.log("this is",res)
    }
      )
      .catch(err => {

      })
  }

  const postNewFriend = newFriend => {
   // console.log(newFriend)
    axios.post(`https://reqres.in/api/users`,newFriend)
     .then( res =>{
       console.log("this is res", res.data);
      //setUser([...user],res.data)
      setUser(user.concat(res.data))
     })
     .catch(err => {
       console.log(err)
     })
     .finally(()=>{
       setFormValues(initialFormValues)
     }
     )
     
  }
  const validate = (name,value) =>{
    yup
    .reach(schema,name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors, [name]: ""})
    })
    .catch(err =>{
      setFormErrors({
        ...formErrors, [name]: err.errors[0]
      });
    });
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    
    validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newFriend = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
    }
    postNewFriend(newFriend)

  }


  useEffect(() => {
    schema.isValid(formValues)
    .then(valid=>{
     setDisabled(!valid)
    }
      )
  },[formValues])
  useEffect(() => {
    getFriends()
  },[])

  return (
    <div className="App">
     <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
       user.map(member => {
        // console.log("meme",
        // member)
          return (
            <UserZ key={member.id} ourUser= {member}/>
          )
       
       })
      } 
    </div>
  )
}
