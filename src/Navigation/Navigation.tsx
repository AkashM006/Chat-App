import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../Component/ProtectedRoute'
import DashboardController from '../Controller/DashboardController'
import LoginController from '../Controller/LoginController'

function Navigation(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={
                <ProtectedRoute loginRequired>
                    <DashboardController />
                </ProtectedRoute>
            } />
            <Route path='/login' element={
                <ProtectedRoute>
                    <LoginController />
                </ProtectedRoute>
            } />
        </Routes>
    )
}

export default Navigation
