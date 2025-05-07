import React, { useState, useEffect } from 'react';

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

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">Messages</h2>
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
