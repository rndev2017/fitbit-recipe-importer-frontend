import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import App from './App'

function Root() {
  const extractAccessToken = () => {
    let url = window.location.href
    var accessToken = url?.split("#")[1]?.split("=")[1]?.split("&")[0];
    return accessToken
  }

  const extractUserId = () => {
    let url = window.location.href
    let userId = url?.split("#")[1]?.split("=")[2]?.split("&")[0]; 
    return userId
  }

  const [token, setToken] = useState(extractAccessToken())
  const [userId, setUserId] = useState(extractUserId())
  const auth_link = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=238CQ7&redirect_uri=https://fitbit-recipe-importer.netlify.app&scope=nutrition%20profile&expires_in=604800"

  if (token == null && userId == null) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center mb-5 space-y-2'>
          <p className='text-3xl font-bold tracking-tight'>
            Login
          </p>
          <p className='text-slate-400 font-medium text-lg'>Import recipes into FitBit within minutes!</p>
        </div>
        <a
          href={auth_link}
          className='text-center bg-cyan-500 hover:bg-cyan-600 
            font-semibold text-white
            w-1/2 md:w-1/4 py-3 rounded-lg shadow-lg shadow-cyan-200'>
          Login with FitBit
        </a>
      </div>
    )
  } else {
    return (
      <>
        <App userId={userId} accessToken={token}/>
      </>
    )
  }
}

export default Root