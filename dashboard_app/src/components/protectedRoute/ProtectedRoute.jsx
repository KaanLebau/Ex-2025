import {Navigate} from 'react-router-dom'

export function ProtectedRoute({children}){
    const isAuthenticated = window.appModel.getActiveUserSession();
    const navigate = Navigate()
    return isAuthenticated ? children : <Navigate to="\login" replace />
}