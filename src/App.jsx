
import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context/AuthProvider'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
