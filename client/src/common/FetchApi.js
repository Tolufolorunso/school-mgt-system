// axios
import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'http://localhost:8000',
})
// request

// authFetch.interceptors.request.use(
//   (config) => {
//     config.headers.common['Authorization'] = `Bearer ${state.token}`
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
// response

authFetch.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // console.log(error.response)
    if (error.response.status === 401) {
      // logoutUser()
    }
    return Promise.reject(error)
  }
)

export default authFetch
