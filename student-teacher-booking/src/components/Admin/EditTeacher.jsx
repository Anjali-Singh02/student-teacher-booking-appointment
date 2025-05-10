import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

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
		setTeacherDetails((prev) => ({ ...prev, [name]: value }));
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
		<div
			className="flex justify-center items-center min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
					Edit Teacher
				</h2>
				<form onSubmit={handleSubmit} className="space-y-5">
					{['name', 'department', 'subject', 'email'].map((field) => (
						<div key={field}>
							<label
								htmlFor={field}
								className="block text-sm font-medium text-gray-700 capitalize"
							>
								{field}
							</label>
							<input
								type={field === 'email' ? 'email' : 'text'}
								id={field}
								name={field}
								value={teacherDetails[field]}
								onChange={handleChange}
								required
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
							/>
						</div>
					))}
					<div className="flex justify-between pt-4 space-x-3">
						<Button
							type="button"
							onClick={() => navigate('/admin/dashboard')}
							className="w-1/4 bg-transparent !text-gray-800 font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out hover:bg-transparent hover:underline hover:!text-blue-400 "
						>
							Cancel
						</Button>
						<Button
							type="submit"
							className="w-1/2 bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out  "
						>
							Update
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditTeacher;
