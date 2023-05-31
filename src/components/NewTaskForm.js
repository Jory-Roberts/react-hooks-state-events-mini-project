import React from 'react';

function NewTaskForm({ onCategoryChange, onTextChange, text, onTaskFormSubmit, formCategory, categories }) {
	return (
		<form
			className='new-task-form'
			onSubmit={onTaskFormSubmit}
		>
			<label>
				Details
				<input
					type='text'
					name='text'
					value={text}
					onChange={onTextChange}
				/>
			</label>
			<label>
				Category
				<select
					name='category'
					value={formCategory}
					onChange={onCategoryChange}
				>
					{/* render <option> elements for each category here */}
					{categories.map((item) => (
						<option
							key={item}
							value={item}
						>
							{item}
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
