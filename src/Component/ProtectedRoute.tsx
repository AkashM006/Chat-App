import { Navigate } from "react-router-dom"
import useStore from "../zustand/store"
import { User } from "../zustand/UserSlice"

function ProtectedRoute({ children, loginRequired }: { children: JSX.Element, loginRequired?: boolean | undefined }): JSX.Element {

    const { token } = useStore<User>((state) => state.user)

    if ((loginRequired && token.trim().length === 0) || (!loginRequired && token.trim().length !== 0)) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute
