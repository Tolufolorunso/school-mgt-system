import {Navigate} from 'react-router-dom'
import {useAppContext} from '../context/appContext'

const ProtectRoute = ({children}) => {
  const {user} = useAppContext()
console.log(user);
  if(!user) {
    return <Navigate to='users/login' />
  }

  return children
}

export default ProtectRoute