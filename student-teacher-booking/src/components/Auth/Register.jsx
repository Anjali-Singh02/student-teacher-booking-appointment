import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { motion } from 'framer-motion';
import Button from '../UI/Button';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('student');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { register } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		if (!email || !password) {
			setError('Email and password are required.');
			return;
		}

		try {
			await register(email, password, role);
			navigate(getDashboardRoute(role));
		} catch (err) {
			setError(err.message || 'Failed to register.');
		}
	};

	const getDashboardRoute = (role) => {
		switch (role) {
			case 'student':
				return '/student/dashboard';
			case 'teacher':
				return '/teacher/dashboard';
			case 'admin':
				return '/admin/dashboard';
			default:
				return '/login';
		}
	};

	return (
		<div
			className="flex justify-center items-center min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md"
			>
				<h2 className="text-3xl font-semibold text-cyan-900 mb-6 text-center">
					Register
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-cyan-800 text-sm font-bold mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-cyan-800 text-sm font-bold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80"
							placeholder="Enter your password"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="role"
							className="block text-cyan-800 text-sm font-bold mb-2"
						>
							Role
						</label>
						<select
							id="role"
							value={role}
							onChange={(e) => setRole(e.target.value)}
							className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80"
						>
							<option value="student">Student</option>
							<option value="teacher">Teacher</option>
							<option value="admin">Admin</option>
						</select>
					</div>
					{error && (
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
							className="text-red-500 text-sm italic"
						>
							{error}
						</motion.div>
					)}
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
					>
						Register
					</Button>
				</form>
				<p className="mt-6 text-sm text-gray-300 text-center">
					Already have an account?{' '}
					<Link
						to="/login"
						className="text-blue-400 hover:underline font-semibold transition-colors duration-200"
					>
						Login
					</Link>
				</p>
			</motion.div>
		</div>
	);
};

export default Register;
