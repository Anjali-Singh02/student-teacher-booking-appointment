import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const StudentDashboard = () => {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
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
				<button
					onClick={handleLogout}
					className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default StudentDashboard;
