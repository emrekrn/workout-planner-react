import { useState } from 'react';
import Project from './Project.jsx';

const Board = ({ boardTitle }) => {
	const [showEditTitle, setShowEditTitle] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
	};
	const editBoardTitleEl = (
		<form onSubmit={handleSubmit} className='relative'>
			<input
				className='block h-7 w-full rounded-md border-0 px-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				name='title'
				type='text'
				defaultValue={boardTitle}
			/>
			<div className='buttons absolute left-full top-1/2 flex  -translate-y-1/2 transform gap-0.5 rounded bg-gray-100 p-0.5 text-xs'>
				<button type='submit' className='h-5 w-5 rounded bg-gray-600'>
					+
				</button>
				<button
					type='button'
					className='h-5 w-5 rounded bg-gray-400'
					onClick={() => setShowEditTitle(false)}
				>
					-
				</button>
			</div>
		</form>
	);

	return (
		<div className='board flex w-full min-w-52 flex-col items-center rounded-lg bg-gray-600 p-4'>
			<div className='board-title h-10 text-xl text-white'>
				{showEditTitle ? (
					editBoardTitleEl
				) : (
					<p
						onClick={() => {
							setShowEditTitle(true);
						}}
						className='hover:px-2 hover:outline hover:outline-gray-500'
					>
						{boardTitle}
					</p>
				)}
			</div>
			<div className='my-2 h-px w-full bg-white'></div>
			<div className='board-content flex w-full flex-wrap items-stretch gap-5 overflow-scroll bg-gray-600 md:items-start'>
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
};

export default Board;
