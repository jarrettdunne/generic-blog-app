import { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

import Layout from './layouts/Layout'
import UserCreate from './screens/UserCreate'
import UserLogin from './screens/UserLogin'
import MainContainer from './containers/MainContainer'

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleCreate = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="app">
      <Layout currentUser={currentUser} handleLogout={handleLogout} >
        <Switch>
          <Route path='/login'>
            <UserLogin handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <UserCreate handleRegister={handleCreate} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
