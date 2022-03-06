import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import {
  StudentAddNewStudent,
  StudentProfile,
  ShareLayout,
  Stats,
  Students,
} from './dashboard'

import { Login, Register, ProtectedRoute } from './auth'
import { Home, NotFound } from './home'

function App() {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false)
    }, 2000)
  })
  if (loadingPage) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='loadingio-spinner-gear-0yxyk9madkt'>
          <div className='ldio-0c05fwxx3og9'>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Box>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />}>
          <Route index element={<Stats />} />
          <Route path='students' element={<Students />} />
          <Route path='students/:id' element={<StudentProfile />} />
          <Route path='students/add' element={<StudentAddNewStudent />} />
        </Route>
        <Route path='/landing' element={<Home />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

{
  /* <ProtectRoute>
<ShareLayout />
</ProtectRoute> */
}
