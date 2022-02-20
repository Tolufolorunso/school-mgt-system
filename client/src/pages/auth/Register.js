import React, { useState } from 'react'
import { AuthNav, Center, FormRow } from '../../components'
import { useAppContext } from '../../context/appContext'
import '../../theme/auth.css'

const initialState = {
  name: 'kolawole kola',
  email: '@yahoo.com',
  role: 'Teacher',
  password: '12345',
  passwordConfirm: '12345',
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const { register } = useAppContext()

  // console.log(isLoading)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log('27 values',values)
    return register(values)
  }

  return (
    <>
      <AuthNav />
      <main className='auth'>
        <Center classes='container auth-container'>
          <form className='form bg-white' onSubmit={onSubmit}>
            <h2 className='text-w'>Register here</h2>
            <div className='flex align-center w-full'>
              <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
              />
              <FormRow
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
              />
            </div>
            <div className='flex'>
              <FormRow
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
              />
              <FormRow
                type='password'
                name='passwordConfirm'
                value={values.passwordConfirm}
                labelText='Password Confirm'
                handleChange={handleChange}
              />
            </div>

            <FormRow
              type='select'
              name='role'
              value={values.role}
              handleChange={handleChange}
            />
            <button type='submit' className='btn w-full'>
              Sign up
            </button>
          </form>
        </Center>
      </main>
    </>
  )
}

export default Register
