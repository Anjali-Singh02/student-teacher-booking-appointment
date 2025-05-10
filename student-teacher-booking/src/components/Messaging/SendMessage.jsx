import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

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
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<div className="container mx-auto bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full my-5">
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
					<Button
						type="submit"
						className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Send Message
					</Button>
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
