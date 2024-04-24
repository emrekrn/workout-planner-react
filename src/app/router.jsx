import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import ForgotPasswordForm from '../components/ForgotPasswordForm.jsx';

const router = createBrowserRouter([
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
