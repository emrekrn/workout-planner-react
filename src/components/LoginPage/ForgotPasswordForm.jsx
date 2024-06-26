import { Link } from 'react-router-dom';

const LoginForm = () => {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold  leading-9 tracking-tight text-white'>
					Reset your password?
				</h2>
			</div>

			<div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-white'
						>
							Email Address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Send confirmation
						</button>
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-500'>
					Do you remember your password?{' '}
					<Link
						to='/'
						className='font-semibold leading-6 text-gray-300 hover:text-gray-50'
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
