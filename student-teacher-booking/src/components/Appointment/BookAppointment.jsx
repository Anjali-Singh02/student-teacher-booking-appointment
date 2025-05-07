import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const BookAppointment = () => {
	const { teacherId } = useParams();
	const navigate = useNavigate();
	const { currentUser, addNotification } = useAuth();
	const [appointmentDetails, setAppointmentDetails] = useState({
		date: '',
		time: '',
		reason: '',
	});
	const [teacherName, setTeacherName] = useState('');

	useEffect(() => {
		if (teacherId === 't1') {
			setTeacherName('Dr. Smith');
		} else if (teacherId === 't2') {
			setTeacherName('Prof. Jones');
		} else if (teacherId === 't3') {
			setTeacherName('Ms. Brown');
		}
	}, [teacherId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setAppointmentDetails((prevDetails) => ({
			...prevDetails,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			'BOOK_APPOINTMENT: Appointment requested by',
			currentUser?.email,
			'for teacher',
			teacherId,
			'with details:',
			appointmentDetails,
		);
		addNotification({
			type: 'success',
			message: `Appointment requested with ${teacherName} for ${appointmentDetails.date} at ${appointmentDetails.time}`,
		});
		navigate('/student/appointments');
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">
					Book Appointment with {teacherName}
				</h2>
				<form
					onSubmit={handleSubmit}
					className="space-y-4 bg-white p-6 rounded shadow-md"
				>
					<div>
						<label
							htmlFor="date"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Date
						</label>
						<input
							type="date"
							id="date"
							name="date"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={appointmentDetails.date}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="time"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Time
						</label>
						<input
							type="time"
							id="time"
							name="time"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={appointmentDetails.time}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="reason"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Reason for Appointment
						</label>
						<textarea
							id="reason"
							name="reason"
							rows="3"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={appointmentDetails.reason}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Request Appointment
					</button>
					<button
						onClick={() => navigate('/student/teachers')}
						className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Back to Teachers
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookAppointment;
