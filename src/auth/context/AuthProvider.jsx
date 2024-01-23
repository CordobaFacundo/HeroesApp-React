
import React, { useReducer } from 'react'
import { authReducer } from './authReducer'
import { AuthContext } from './AuthContext'
import { types } from '../types/types'
import { json } from 'react-router-dom'

// const initialState = {
//     logged: false,
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user, //si el user existe es true
        user: user,
    }
}

export const AuthProvider = ({ children }) => {
  
    const [ authState, dispatch ] = useReducer( authReducer, {}, init )  
  
    const login = ( name = '' ) => {
        const user= { id: 'ABC', name}
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    }

    return (
    <AuthContext.Provider value={{
        ...authState,
        login: login,
        logout: logout
    }}>
       { children } 
    </AuthContext.Provider>
  )
}