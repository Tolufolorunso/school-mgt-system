import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Center } from '../../common'
import logo from '../../assets/images/git.svg'
import AuthNav from '../../auth/AuthNav'
import '../home.css'
import Button from '@mui/material/Button'

const Home = () => {
  let navigate = useNavigate()
  const loginHandler = () => {
    navigate('/users/login')
  }

  const registerHandler = () => {
    navigate('/users/register')
  }

  return (
    <main className='home h-screen flex'>
      <AuthNav />
      <Center classes='container'>
        <div className='home__content text-white'>
          <img
            src={logo}
            width='160'
            height='130'
            alt='git logo'
            className='img'
          />
          <h1> Welcome to Student Management System. </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            fugiat debitis architecto nesciunt ipsum. Assumenda mollitia odio
            eligendi quae, impedit dicta recusandae a corrupti error voluptate,
            minima iste. Tempore, repellat.
          </p>
          <div className='home__content--btns flex mt-5'>
            <Button />
            <Button />
          </div>
        </div>
      </Center>
    </main>
  )
}

export default Home
