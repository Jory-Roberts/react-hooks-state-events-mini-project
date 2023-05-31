import React from 'react';

function Task({ task, text, category, handleDelete }) {
	function deleteTask() {
		handleDelete(task);
	}

	return (
		<div className='task'>
			<div className='label'>{category}</div>
			<div className='text'>{text}</div>
			<button
				className='delete'
				onClick={deleteTask}
			>
				X
			</button>
		</div>
	);
}

export default Task;
