
import './App.css'
import Notifications from '../Notifications/Notifications.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'
import { Fragment } from 'react'
import { getLatestNotification } from '../utils/utils.js'
import { v4 as uuidv4 } from 'uuid'

function App() {
  let notificationsList = [{id: uuidv4(), type: "default", value: "New course available"}, {id: uuidv4(), type: "urgent", value: "New resume available"}, {id: uuidv4(), type: "urgent", HTML: getLatestNotification()}]
  return (
    <Fragment>
      <div className='root-notifications'><Notifications notifications={notificationsList} /></div>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  )
}

export default App
