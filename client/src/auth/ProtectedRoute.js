import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth/authContext'

const ProtectRoute = ({ children }) => {
  const { user } = useAuthContext()
  if (!user) {
    return <Navigate to='users/login' />
  }

  return children
}

export default ProtectRoute
