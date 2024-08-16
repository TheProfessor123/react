import UserContextProvider from './context/UserContextProvider.jsx'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>React with youtube and completing course is important</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
