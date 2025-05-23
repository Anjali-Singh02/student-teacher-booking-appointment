import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

const TeacherDashboard = () => {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
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
					Teacher Dashboard
				</h2>
				{currentUser && (
					<p className="mb-2">Welcome, Teacher {currentUser.email}</p>
				)}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Link
						to="/teacher/schedule"
						className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
					>
						<h3 className="text-lg font-semibold mb-2">
							Schedule Availability
						</h3>
						<p className="text-gray-600">
							Set your available times for appointments.
						</p>
					</Link>
					<Link
						to="/teacher/appointments"
						className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
					>
						<h3 className="text-lg font-semibold mb-2">
							Appointments
						</h3>
						<p className="text-gray-600">
							View and manage your scheduled appointments.
						</p>
					</Link>
					<Link
						to="/teacher/view-messages"
						className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
					>
						<h3 className="text-lg font-semibold mb-2">Messages</h3>
						<p className="text-gray-600">
							View and respond to messages from students.
						</p>
					</Link>
				</div>
				<Button
					onClick={handleLogout}
					className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default TeacherDashboard;
