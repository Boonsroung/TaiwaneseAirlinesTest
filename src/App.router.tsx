// App.router.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import PageWrapper from './components/PageWrapper';
import './index.css'

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
        element: (
          <PageWrapper pageNameKey='departure_from_bangkok' visiblePartnerLogo={true}>
            <HomePage />
          </PageWrapper>
        )
      },
      {
        path: '/result',
        element: (
          <PageWrapper pageNameKey='departure_from_bangkok'  visiblePartnerLogo={true}>
            <ResultPage />
          </PageWrapper>
        )
      }
    ]
  }
]);

export default router;
