import { Outlet } from 'react-router-dom'

import './index.css'

import Layout from './components/Layout'
import './i18n'; 

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
