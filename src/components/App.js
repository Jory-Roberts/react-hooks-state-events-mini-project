import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [tasks, setTasks] = useState(TASKS);
	const [selectedCategory, setSelectedCategory] = useState('All');

	function handleDelete(taskToDelete) {
		setTasks((previousTasks) => previousTasks.filter((task) => task.text !== taskToDelete.text));
	}

	function handleCategorySelection(category) {
		setSelectedCategory(category);
	}

	const filteredTasks =
		selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);

	return (
		<div className='App'>
			<h2>My tasks</h2>
			<CategoryFilter
				categories={CATEGORIES}
				onSelectedCategory={selectedCategory}
				onHandleCategory={handleCategorySelection}
			/>
			<NewTaskForm />
			<TaskList
				tasks={filteredTasks}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;
