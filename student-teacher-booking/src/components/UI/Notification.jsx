import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Notification = () => {
	const { notifications } = useAuth(); // Destructure notifications from the context

	return (
		<div className="fixed top-4 left-4 z-50 space-y-2">
			{notifications.map((notification) => (
				<div
					key={notification.id}
					className={`p-3 rounded shadow-md text-white ${
						notification.type === 'success'
							? 'bg-green-500'
							: notification.type === 'warning'
							? 'bg-yellow-500'
							: 'bg-blue-500'
					}`}
				>
					{notification.message}
				</div>
			))}
		</div>
	);
};
export default Notification;
