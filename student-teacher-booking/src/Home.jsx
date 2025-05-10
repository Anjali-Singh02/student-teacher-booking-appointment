import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/UI/Button';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-pink-500">
			<div className="text-center space-y-6">
				<h1 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg">
					Welcome to Our Platform
				</h1>
				<p className="text-lg text-gray-200 max-w-xl">
					Connect with teachers, students, and expand your knowledge.
					Join our community today!
				</p>
				<div className="flex justify-center space-x-4">
					<Button
						onClick={() => navigate('/login')}
						className="!bg-white !text-purple-600 font-semibold py-3 px-8 rounded-full hover:!bg-purple-100 transition-colors duration-300 shadow-lg"
					>
						Login
					</Button>
					<Button
						onClick={() => navigate('/register')}
						className="!bg-pink-600 !text-white font-semibold py-3 px-8 rounded-full hover:!bg-pink-700 transition-colors duration-300 shadow-lg"
					>
						Register
					</Button>
				</div>
				<div className="mt-12">
					<p className="text-sm text-white/80">
						&copy; {new Date().getFullYear()} Our Platform. All
						rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
