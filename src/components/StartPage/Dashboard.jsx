import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
} from 'recharts';
import { Link } from 'react-router-dom';
const data = [
	{ name: 'January', shortName: 'Jan', projects: 1 },
	{ name: 'February', shortName: 'Feb', projects: 3 },
	{ name: 'March', shortName: 'Mar', projects: 4 },
	{ name: 'April', shortName: 'Apr', projects: 6 },
	{ name: 'May', shortName: 'May', projects: 10 },
	{ name: 'June', shortName: 'Jun', projects: 13 },
	{ name: 'July', shortName: 'Jul', projects: 16 },
	{ name: 'August', shortName: 'Aug', projects: 17 },
	{ name: 'September', shortName: 'Sep', projects: 18 },
	{ name: 'October', shortName: 'Oct', projects: 10 },
	{ name: 'November', shortName: 'Nov', projects: 25 },
	{ name: 'December', shortName: 'Dec', projects: 26 },
];

const Dashboard = () => {
	return (
		<>
			<div className='mt-14 flex h-full flex-col items-center'>
				<h1 className='text-5xl font-bold text-white'>Projects</h1>

				<div className='mt-10 h-1/6 w-full sm:h-2/6 lg:w-5/6 xl:w-4/6 2xl:w-3/6'>
					<ResponsiveContainer width='100%' height='100%'>
						<AreaChart
							width={500}
							height={400}
							data={data}
							stackOffset='expand'
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
								dataKey='projects'
								stroke='#8884d8'
								fill='#8884d8'
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
				<div className='mx-10 mt-10 flex flex-wrap justify-center gap-x-7 gap-y-14 xl:w-4/6 xl:flex-nowrap'>
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
