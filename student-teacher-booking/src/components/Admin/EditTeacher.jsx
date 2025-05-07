import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const EditTeacher = () => {
	const { teacherId } = useParams();
	const navigate = useNavigate();
	const { addNotification } = useAuth();
	const [teacherDetails, setTeacherDetails] = useState({
		name: '',
		department: '',
		subject: '',
		email: '',
	});

	useEffect(() => {
		// Simulate fetching teacher data based on teacherId
		if (teacherId === 't1') {
			setTeacherDetails({
				name: 'Dr. Smith',
				department: 'Computer Science',
				subject: 'Data Structures',
				email: 'dr.smith@example.com',
			});
		} else if (teacherId === 't2') {
			setTeacherDetails({
				name: 'Prof. Jones',
				department: 'Mathematics',
				subject: 'Calculus',
				email: 'prof.jones@example.com',
			});
		}
		console.log(
			'EDIT_TEACHER: Fetched teacher data (simulated) for ID:',
			teacherId,
		);
	}, [teacherId]);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTeacherDetails((prevDetails) => ({
			...prevDetails,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			'ADMIN: Updating teacher with ID:',
			teacherId,
			'details:',
			teacherDetails,
		);
		addNotification({
			type: 'success',
			message: `Teacher ${teacherDetails.name} updated successfully.`,
		});
		navigate('/admin/dashboard');
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">Edit Teacher</h2>
				<form
					onSubmit={handleSubmit}
					className="space-y-4 bg-white p-6 rounded shadow-md"
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
					<button
						type="submit"
						className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Update Teacher
					</button>
					<button
						onClick={() => navigate('/admin/dashboard')}
						className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Back to Dashboard
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditTeacher;
