import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
	return (
		<div className='tasks'>
			{/* display a list of tasks using Task component */}
			<div className='tasks'>
				{tasks.map((task) => (
					<Task
						key={task.text}
						text={task.text}
						category={task.category}
					/>
				))}
			</div>
		</div>
	);
}

export default TaskList;
