import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import LoginForm from '../components/LoginPage/LoginForm.jsx';
import RegisterForm from '../components/LoginPage/RegisterForm.jsx';
import ForgotPasswordForm from '../components/LoginPage/ForgotPasswordForm.jsx';
import StartPage from '../pages/StartPage.jsx';
import Dashboard from '../components/StartPage/Dashboard.jsx';
import Boards from '../components/StartPage/Boards.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <StartPage />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/board',
				element: <Boards />,
			},
		],
	},
	{
		path: '/',
		element: <LoginPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <LoginForm />,
			},
			{
				path: 'register',
				element: <RegisterForm />,
			},
			{
				path: 'forgot-password',
				element: <ForgotPasswordForm />,
			},
		],
	},
]);

export default router;
