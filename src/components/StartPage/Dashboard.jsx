import {
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
} from 'recharts';
const data = [
	{ name: 'January', shortName: 'Jan', inProgress: 5, done: 2, inactive: 2 },
	{ name: 'February', shortName: 'Feb', inProgress: 7, done: 4, inactive: 3 },
	{ name: 'March', shortName: 'Mar', inProgress: 3, done: 0, inactive: 3 },
	{ name: 'April', shortName: 'Apr', inProgress: 2, done: 0, inactive: 2 },
	{ name: 'May', shortName: 'May', inProgress: 4, done: 3, inactive: 1 },
	{ name: 'June', shortName: 'Jun', inProgress: 1, done: 1, inactive: 0 },
	{ name: 'July', shortName: 'Jul', inProgress: 3, done: 1, inactive: 0 },
	{ name: 'August', shortName: 'Aug', inProgress: 6, done: 2, inactive: 2 },
	{ name: 'September', shortName: 'Sep', inProgress: 8, done: 4, inactive: 3 },
	{ name: 'October', shortName: 'Oct', inProgress: 12, done: 5, inactive: 4 },
	{ name: 'November', shortName: 'Nov', inProgress: 9, done: 5, inactive: 5 },
	{ name: 'December', shortName: 'Dec', inProgress: 14, done: 4, inactive: 7 },
];

const Dashboard = () => {
	return (
		<>
			<div className='mt-4 flex h-full flex-col items-center'>
				<h1 className='text-5xl font-bold text-white'>Projects</h1>

				<div className='mt-10 w-full  lg:w-5/6 xl:w-4/6 2xl:w-3/6'>
					<ResponsiveContainer width={'100%'} height={400} minHeight={400}>
						<AreaChart
							width={300}
							height={400}
							data={data}
							margin={{
								top: 10,
								right: 30,
								left: 0,
								bottom: 0,
							}}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='shortName' />
							<YAxis />
							<Tooltip />
							<Area
								type='monotone'
								dataKey='inProgress'
								stroke='#535353'
								fill='#686868'
							/>
							<Area
								type='monotone'
								dataKey='done'
								stroke='#0f4343'
								fill='#0a5c5c'
							/>
							<Area
								type='monotone'
								dataKey='inactive'
								stroke='#b51b26'
								fill='#c80815'
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
				<div className='m-10 flex flex-wrap justify-center gap-x-7 gap-y-14 xl:w-4/6 xl:flex-nowrap'>
					<div className='w-5/6 rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-2xl'>
						<div className='p-8 sm:p-10 lg:flex-auto'>
							<h3 className='text-2xl tracking-tight text-white'>
								Latest Projects
							</h3>
							<p className='mt-6 text-base leading-7 text-white'>
								Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
								amet indis perferendis blanditiis repellendus etur quidem
								assumenda.
							</p>
							<div className='mt-10 flex items-center gap-x-4'>
								<h4 className='flex-none text-sm font-semibold leading-6 text-white'>
									Show More
								</h4>
								<div className='h-px flex-auto bg-gray-100' />
							</div>
						</div>
					</div>
					<div className='w-5/6 rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-2xl'>
						<div className='p-8 sm:p-10 lg:flex-auto'>
							<h3 className='text-2xl tracking-tight text-white'>
								Latest Projects
							</h3>
							<p className='mt-6 text-base leading-7 text-white'>
								Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
								amet indis perferendis blanditiis repellendus etur quidem
								assumenda.
							</p>
							<div className='mt-10 flex items-center gap-x-4'>
								<h4 className='flex-none text-sm font-semibold leading-6 text-white'>
									Show More
								</h4>
								<div className='h-px flex-auto bg-gray-100' />
							</div>
						</div>
					</div>
					<div className='w-5/6 rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-2xl'>
						<div className='p-8 sm:p-10 lg:flex-auto'>
							<h3 className='text-2xl tracking-tight text-white'>
								Latest Projects
							</h3>
							<p className='mt-6 text-base leading-7 text-white'>
								Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
								amet indis perferendis blanditiis repellendus etur quidem
								assumenda.
							</p>
							<div className='mt-10 flex items-center gap-x-4'>
								<h4 className='flex-none text-sm font-semibold leading-6 text-white'>
									Show More
								</h4>
								<div className='h-px flex-auto bg-gray-100' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
