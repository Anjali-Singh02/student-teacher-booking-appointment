import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

const AdminDashboard = () => {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<div
			className="flex py-5 justify-center items-center min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<div className="p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg w-full container mx-auto text-center">
				<div className="container mx-auto">
					<h2 className="text-2xl font-semibold mb-4">
						Admin Dashboard
					</h2>
					{currentUser && (
						<p className="mb-2">
							Welcome, Admin {currentUser.email}
						</p>
					)}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<Link
							to="/admin/add-teacher"
							className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
						>
							<h3 className="text-lg font-semibold mb-2">
								Add Teacher
							</h3>
							<p className="text-gray-600">
								Register new teacher accounts.
							</p>
						</Link>
						<Link
							to="/admin/approve-registrations"
							className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
						>
							<h3 className="text-lg font-semibold mb-2">
								Approve Registrations
							</h3>
							<p className="text-gray-600">
								Approve pending student registrations.
							</p>
						</Link>
						<Link
							to="/admin/edit-teacher"
							className="block p-6 bg-white rounded shadow-md hover:shadow-lg transition duration-300"
						>
							<h3 className="text-lg font-semibold mb-2">
								Manage Teachers
							</h3>
							<p className="text-gray-600">
								Edit or delete existing teacher profiles.
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
		</div>
	);
};

export default AdminDashboard;
