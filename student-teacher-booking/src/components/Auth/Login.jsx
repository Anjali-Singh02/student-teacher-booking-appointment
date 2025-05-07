import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

import { motion } from 'framer-motion'; // Import motion from Framer Motion

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		if (!email || !password) {
			setError('Please enter both email and password.');
			return;
		}
		let role = 'student';
		if (email.includes('teacher')) {
			role = 'teacher';
		} else if (email.includes('admin')) {
			role = 'admin';
		}
		try {
			login(email, password, role);
			console.log('LOGIN: User attempting to log in with', {
				email,
				password,
				role,
			});
			navigate(`/${role}/dashboard`);
		} catch (err) {
			setError(
				'Invalid credentials. Please check your email and password.',
			);
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
			<motion.div // Wrap the main form container with motion.div
				initial={{ opacity: 0, y: 50 }} // Initial animation state
				animate={{ opacity: 1, y: 0 }} // Animation to run when the component mounts
				transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation properties
				className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md"
			>
				<h2 className="text-3xl font-semibold text-cyan-900 mb-6 text-center">
					Login
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
							className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter your password"
							required
						/>
					</div>
					{error && (
						<motion.div // Use motion.div for error message
							initial={{ opacity: 0, x: -20 }} // Initial state
							animate={{ opacity: 1, x: 0 }} // Animate to visible
							transition={{ duration: 0.3 }} // Animation duration
							className="text-red-500 text-sm italic"
						>
							{error}
						</motion.div>
					)}
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
					>
						Log In
					</Button>
				</form>
				<p className="mt-6 text-sm text-gray-300 text-center">
					Don't have an account?{' '}
					<Link
						to="/register"
						className="text-blue-400 hover:underline font-semibold transition-colors duration-200"
					>
						Register
					</Link>
				</p>
			</motion.div>
		</div>
	);
};

export default Login;
