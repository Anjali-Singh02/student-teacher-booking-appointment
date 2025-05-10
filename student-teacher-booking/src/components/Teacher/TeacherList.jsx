import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

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
	const navigate = useNavigate();

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
	const handleBack = () => {
		navigate('/student/dashboard');
	};
	return (
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://i.pinimg.com/originals/f9/5f/ac/f95facb59d05714ee4fa16cf449083a3.jpg)',
			}}
		>
			<div className="container mx-auto my-5 bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full ">
				<h2 className="text-2xl font-semibold mb-4">
					Available Teachers
				</h2>
				<Button
					onClick={handleBack}
					className=" rounded-full w-[40px] h-[40px] text-center bg-transparent hover:!bg-transparent"
				>
					<BsArrowLeftCircle className="text-[25px] text-gray-700" />
				</Button>
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
