import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

const StudentDashboard = () => {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<div
			className="flex justify-center min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://i.pinimg.com/originals/f9/5f/ac/f95facb59d05714ee4fa16cf449083a3.jpg)',
			}}
		>
			<div className="container mx-auto bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-full my-5">
				<h2 className="text-2xl font-semibold mb-4">
					Student Dashboard
				</h2>
				{currentUser && (
					<p className="mb-2">Welcome, {currentUser.email}</p>
				)}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Link
						to="/student/teachers"
						className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
					>
						<h3 className="text-lg font-semibold mb-2">
							Find a Teacher
						</h3>
						<p className="text-gray-600">
							Search for teachers and view their profiles.
						</p>
					</Link>
					<Link
						to="/student/appointments"
						className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
					>
						<h3 className="text-lg font-semibold mb-2">
							My Appointments
						</h3>
						<p className="text-gray-600">
							View your upcoming and past appointments.
						</p>
					</Link>
					<Link
						to="/student/view-messages"
						className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
					>
						<h3 className="text-lg font-semibold mb-2">Messages</h3>
						<p className="text-gray-600">
							View messages from your teachers.
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

export default StudentDashboard;
