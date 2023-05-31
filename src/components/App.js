import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [tasks, setTasks] = useState(TASKS);
	// const [category, setCategory] = useState(CATEGORIES);

	function handleDelete(taskToDelete) {
		setTasks((previousTasks) => previousTasks.filter((task) => task.text !== taskToDelete.text));
	}

	return (
		<div className='App'>
			<h2>My tasks</h2>
			<CategoryFilter />
			<NewTaskForm />
			<TaskList
				tasks={tasks}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;
