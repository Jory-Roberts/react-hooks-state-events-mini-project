import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
	const [newTask, setNewTask] = useState({
		text: '',
		category: 'Code',
	});

	function handleNewTask(e) {
		const { name, value } = e.target;

		setNewTask({ ...newTask, [name]: value });
	}

	return (
		<form
			className='new-task-form'
			onSubmit={(e) => {
				e.preventDefault();
				onTaskFormSubmit(newTask);
			}}
		>
			<label>
				Details
				<input
					type='text'
					name='text'
					value={newTask.text}
					onChange={handleNewTask}
				/>
			</label>
			<label>
				Category
				<select
					name='category'
					value={newTask.category}
					onChange={handleNewTask}
				>
					{/* render <option> elements for each category here */}
					{categories.map((category, index) => (
						<option
							key={index}
							value={category}
						>
							{category}
						</option>
					))}
				</select>
			</label>
			<input
				type='submit'
				value='Add task'
			/>
		</form>
	);
}

export default NewTaskForm;
