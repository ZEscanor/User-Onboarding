import React  from "react";


export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        //we do this because the value checkbox returns is "ON" and not true so we need to have a use case
        const {name, value, type, checked} = evt.target
        const valueToUse = type === "checkbox" ? checked:value;
        change(name,valueToUse);
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>password
          <input
            onChange={onChange}
            value={values.password}
            name='password'
            type='text'
          >
         
          </input>
        </label>
      </div>

      <div className='form-group checkboxes'>
        <label>termsOfService
            <input
            type="checkbox"
            name= "termsOfService"
            checked = {values.termsOfService}
            onChange = {onChange}
            
            
            >
            
            
            </input>
        </label>
      </div>
    </form>
    )
}