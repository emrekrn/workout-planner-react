import '../assets/scss/pages.scss';
import Navbar from '../components/StartPage/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const StartPage = () => {
	return (
		<div className='start-page'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default StartPage;
