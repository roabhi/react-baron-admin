import { createContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  /**
   * * Auth data
   */

  const username = 'Miguel',
    password = '1234'

  /**
   * * Auth functions
   */

  const logInUser = () => {
    localStorage.setItem('baron-user-logged', JSON.stringify(true))
  }

  const logOutUser = () => {
    localStorage.removeItem('baron-user-logged')
  }

  const isUserLogged = (_key) => {
    if (localStorage.getItem(_key)) {
      return JSON.parse(localStorage.getItem('baron-user-logged'))
    } else {
      return false
    }
  }

  const checkCredentials = (_username, _password) => {
    if (_username === username && _password === password) {
      logInUser()
      return true
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        checkCredentials: checkCredentials, // ? This is a function
        isUserLogged: isUserLogged, // ? This is a function
        logOutUser: logOutUser, // ? This is a function
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
