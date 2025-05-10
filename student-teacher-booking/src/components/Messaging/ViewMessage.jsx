import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const MessageCard = ({ message }) => (
	<div className="bg-white rounded shadow-md p-4 mb-2">
		<p className="text-gray-700">
			<span className="font-semibold">{message.sender}:</span>{' '}
			{message.text}
		</p>
		<p className="text-gray-500 text-sm">{message.timestamp}</p>
	</div>
);

const ViewMessages = ({ userRole }) => {
	const [messages, setMessages] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const mockMessages = [
			{
				id: 'm1',
				sender: 'Dr. Smith',
				recipient: 'Student A',
				text: 'Regarding your project...',
				timestamp: '2025-05-09 15:00',
			},
			{
				id: 'm2',
				sender: 'Student A',
				recipient: 'Dr. Smith',
				text: 'Thank you for the update.',
				timestamp: '2025-05-09 15:30',
			},
			{
				id: 'm3',
				sender: 'Prof. Jones',
				recipient: 'Student B',
				text: "Don't forget the assignment deadline.",
				timestamp: '2025-05-11 10:00',
			},
		];
		setMessages(mockMessages);
		console.log(
			'VIEW_MESSAGES (' + userRole + '): Fetched messages (simulated)',
		);
	}, [userRole]);

	const handleBack = () => {
		navigate('/student/dashboard');
	};

	return (
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://i.pinimg.com/originals/f9/5f/ac/f95facb59d05714ee4fa16cf449083a3.jpg)',
			}}
		>
			<div className="container mx-auto my-5 bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full ">
				<h2 className="text-2xl font-semibold mb-4">Messages</h2>
				<Button
					onClick={handleBack}
					className=" rounded-full w-[40px] h-[40px] text-center bg-transparent hover:!bg-transparent"
				>
					<BsArrowLeftCircle className="text-[25px] text-gray-700" />
				</Button>
				<div className="space-y-4">
					{messages.map((message) => (
						<MessageCard key={message.id} message={message} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ViewMessages;
