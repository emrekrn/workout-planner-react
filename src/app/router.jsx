import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
]);

export default router;
