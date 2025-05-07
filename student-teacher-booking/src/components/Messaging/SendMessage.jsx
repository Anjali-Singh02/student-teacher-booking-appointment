import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const SendMessage = () => {
	const { teacherId, studentId } = useParams();
	const navigate = useNavigate();
	const { currentUser, addNotification } = useAuth();
	const [message, setMessage] = useState('');
	const [recipientName, setRecipientName] = useState('');

	useEffect(() => {
		if (teacherId) {
			setRecipientName('Teacher ' + teacherId);
		} else if (studentId) {
			setRecipientName('Student ' + studentId);
		}
	}, [teacherId, studentId]);

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			'SEND_MESSAGE: User',
			currentUser?.email,
			'sent message to',
			recipientName,
			':',
			message,
		);
		addNotification({
			type: 'info',
			message: `Message sent to ${recipientName}`,
		});
		navigate(
			'/' +
				(currentUser?.userRole === 'student' ? 'student' : 'teacher') +
				'/view-messages',
		);
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">
					Send Message to {recipientName}
				</h2>
				<form
					onSubmit={handleSubmit}
					className="space-y-4 bg-white p-6 rounded shadow-md"
				>
					<div>
						<label
							htmlFor="message"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={message}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Send Message
					</button>
					<button
						onClick={() => navigate(-1)}
						className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Back
					</button>
				</form>
			</div>
		</div>
	);
};

export default SendMessage;
