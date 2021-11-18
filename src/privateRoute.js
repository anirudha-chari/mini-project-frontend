import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from './context/AuthContext'

export function PrivateUserRoute({ children }) {
    const {currentUser} = useAuth();
    return currentUser ? children : <Navigate to="/login"></Navigate>
}
export function PrivateAdminRoute({ children }) {
    const {currentUser, isAdmin} = useAuth();
    // console.log(currentUser, isAdmin)
    return currentUser && isAdmin ? children : <Navigate to="/login"></Navigate>
}
export function PrivateloginRoute({ children }) {
    const {currentUser, isLoggedin} = useAuth();
    return (currentUser && !isLoggedin) ? children : <Navigate to="/"></Navigate>
}
// export const PrivateAdminRoute