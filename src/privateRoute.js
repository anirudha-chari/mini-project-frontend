import React from 'react'
import { Navigate, Route } from 'react-router'
import { useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router'

export function PrivateUserRoute({ children }) {
    const {currentUser} = useAuth();
    return currentUser ? children : <Navigate to="/login"></Navigate>
}
export function PrivateAdminRoute({ children }) {
    const {currentUser, isAdmin} = useAuth();
    // console.log(currentUser, isAdmin)
    return currentUser && isAdmin ? children : <Navigate to="/login"></Navigate>
}

// export const PrivateAdminRoute