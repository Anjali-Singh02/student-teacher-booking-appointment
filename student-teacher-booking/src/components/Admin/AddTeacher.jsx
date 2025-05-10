import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

const AddTeacher = () => {
	const [teacherDetails, setTeacherDetails] = useState({
		name: '',
		department: '',
		subject: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const { addNotification } = useAuth();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTeacherDetails((prevDetails) => ({
			...prevDetails,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('ADMIN: Adding new teacher:', teacherDetails);
		addNotification({
			type: 'success',
			message: `Teacher ${teacherDetails.name} added successfully.`,
		});
		navigate('/admin/dashboard');
	};

	return (
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<div className="container mx-auto bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg w-full my-5 ">
				<h2 className="text-2xl text-center font-semibold mb-4">
					Add New Teacher
				</h2>
				<div className="flex justify-center items-center">
					<form
						onSubmit={handleSubmit}
						className="space-y-4 bg-white p-6 rounded w-1/2 shadow-md"
					>
						<div>
							<label
								htmlFor="name"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={teacherDetails.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="department"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Department
							</label>
							<input
								type="text"
								id="department"
								name="department"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={teacherDetails.department}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={teacherDetails.subject}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={teacherDetails.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={teacherDetails.password}
								onChange={handleChange}
								required
							/>
						</div>
						<Button
							type="submit"
							className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Add Teacher
						</Button>
						<Button
							onClick={() => navigate('/admin/dashboard')}
							className="ml-5 bg-gray-300 hover:bg-gray-400 !text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Cancel
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddTeacher;
