import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher }) => (
	<div className="bg-white rounded shadow-md p-4">
		<h3 className="text-lg font-semibold mb-2">{teacher.name}</h3>
		<p className="text-gray-600 mb-1">Department: {teacher.department}</p>
		<p className="text-gray-600 mb-2">Subject: {teacher.subject}</p>
		<Link
			to={`/student/book/${teacher.id}`}
			className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>
			Book Appointment
		</Link>
		<Link
			to={`/student/messages/${teacher.id}`}
			className="inline-block mt-2 ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>
			Send Message
		</Link>
	</div>
);

const TeacherList = () => {
	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		const mockTeachers = [
			{
				id: 't1',
				name: 'Dr. Smith',
				department: 'Computer Science',
				subject: 'Data Structures',
			},
			{
				id: 't2',
				name: 'Prof. Jones',
				department: 'Mathematics',
				subject: 'Calculus',
			},
			{
				id: 't3',
				name: 'Ms. Brown',
				department: 'Physics',
				subject: 'Thermodynamics',
			},
		];
		setTeachers(mockTeachers);
		console.log('TEACHER_LIST: Fetched teachers (simulated)');
	}, []);

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">
					Available Teachers
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{teachers.map((teacher) => (
						<TeacherCard key={teacher.id} teacher={teacher} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TeacherList;
