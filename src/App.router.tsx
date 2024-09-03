import { createBrowserRouter, Navigate } from 'react-router-dom'

import App from './App'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />
      },
      {
        path: '/home',
        element: <HomePage />,
        handle: {
          pageName: 'Departure from Bangkok',
          visiblePartnerLogo: true
        }
      },
      {
        path: '/result',
        element: <ResultPage />,
        handle: {
          pageName: 'Departure from Bangkok'
        }
      }
    ]
  }
])

export default router
