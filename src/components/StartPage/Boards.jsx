import '../../assets/scss/board.scss';
import Board from './Board.jsx';
import { useState } from 'react';

const Boards = () => {
	const [boards, setBoards] = useState([
		{
			id: 1,
			boardTitle: 'Not started',
		},
		{
			id: 2,
			boardTitle: 'Doing',
		},
	]);

	const boardsEl = boards.map((board) => <Board key={board.id} {...board} />);
	const addNewBoard = () => {
		setBoards((prev) => [
			...prev,
			{
				id: 3,
				boardTitle: 'New board',
			},
		]);
		console.log('New Board');
	};
	return (
		<div className='mx-auto mt-4 flex h-full w-10/12 flex-col'>
			<h1 className='text-5xl font-bold text-white'>Boards</h1>
			<p className='mt-2 text-gray-400'>Current projects</p>

			<div className='boards mt-2 flex items-stretch justify-between gap-4 overflow-scroll'>
				{boardsEl}
				<div
					className='board flex items-center justify-center rounded-lg bg-gray-800 px-10 text-2xl text-white hover:cursor-pointer hover:bg-gray-600'
					onClick={() => addNewBoard()}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default Boards;
