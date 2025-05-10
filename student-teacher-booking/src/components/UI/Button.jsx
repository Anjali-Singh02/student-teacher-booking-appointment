import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => (
	<button
		onClick={onClick}
		className={`bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
		{...props}
	>
		{children}
	</button>
);

export default Button;
