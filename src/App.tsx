
import React,{ useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile'>
            <ProtectedLayout/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Routes>
      </BrowserRouter>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
