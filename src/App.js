import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/Layout';
import Messages from './pages/messages/Messages';
import Applicants from './pages/applicants/Applicants';
import ApplicantsLayout from './pages/applicants/ApplicantsLayout';
import Archived from './pages/applicants/Archived';
import Hired from './pages/applicants/hired/Hired';
import Referrals from './pages/referrals/Referrals';
import BusinessProfile from './pages/business/BusinessProfile';
import Details from './pages/applicants/hired/Details.hired';
import Notifications from './pages/notifications/Notifications';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        errorElement: <h1>page not found</h1>
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        element: <ApplicantsLayout />,
        children: [
          {
            path: '/applicants',
            element: <Applicants />,
            errorElement: <h1>page not found</h1>
          },
          {
            path: '/applicants/hired',
            element: <Hired />
          },
          {
            path: '/applicants/archived',
            element: <Archived  />
          }
        ]
      },
      {
        path: '/applicants/hired/details',
        element: <Details />
      },
      {
        path: '/referrals',
        element: <Referrals />
      },
      {
        path: '/business-profile',
        element: <BusinessProfile />
      },
      {
        path: '/notifications',
        element: <Notifications />
      }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
