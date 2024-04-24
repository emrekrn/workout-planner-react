import { Outlet } from 'react-router-dom';
import '../assets/scss/pages.scss';

const LoginPage = () => {
	return (
		<div className='login-page'>
			<Outlet />
		</div>
	);
};

export default LoginPage;
