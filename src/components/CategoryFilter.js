import React from 'react';

function CategoryFilter({ categories, onSelectedCategory, onHandleCategory }) {
	const buttons = categories.map((category) => {
		const className = category === onSelectedCategory ? 'selected' : null;
		return (
			<button
				key={category}
				className={className}
				onClick={() => onHandleCategory(category)}
			>
				{category}
			</button>
		);
	});
	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{buttons}
		</div>
	);
}

export default CategoryFilter;
