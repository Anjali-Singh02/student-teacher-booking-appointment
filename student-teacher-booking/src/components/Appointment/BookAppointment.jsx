import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';
import { BsArrowLeftCircle } from 'react-icons/bs';

const BookAppointment = () => {
	const { teacherId } = useParams();
	const navigate = useNavigate();
	const { currentUser, addNotification, addAppointment } = useAuth(); // Add addAppointment
	const [appointmentDetails, setAppointmentDetails] = useState({
		date: '',
		time: '',
		reason: '',
	});
	const [teacherName, setTeacherName] = useState('');
	const [teacherEmail, setTeacherEmail] = useState(''); // Add state for teacher email

	useEffect(() => {
		if (teacherId === 't1') {
			setTeacherName('Dr. Smith');
			setTeacherEmail('dr.smith@example.com'); // Set teacher email
		} else if (teacherId === 't2') {
			setTeacherName('Prof. Jones');
			setTeacherEmail('prof.jones@example.com'); // Set teacher email
		} else if (teacherId === 't3') {
			setTeacherName('Ms. Brown');
			setTeacherEmail('ms.brown@example.com'); // Set teacher email
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

		const newAppointment = {
			id: Date.now(), // Generate unique ID
			studentName: currentUser?.email, // Use email as student name for simplicity
			studentEmail: currentUser?.email,
			teacherName: teacherName,
			teacherEmail: teacherEmail, // Include teacher email
			date: appointmentDetails.date,
			time: appointmentDetails.time,
			reason: appointmentDetails.reason,
			status: 'pending', // Initial status
		};

		addAppointment(newAppointment); // Add to global state
		addNotification({
			type: 'success',
			message: `Appointment requested with ${teacherName} for ${appointmentDetails.date} at ${appointmentDetails.time}`,
		});
		navigate('/student/appointments');
	};
	const handleBack = () => {
		navigate('/student/dashboard');
	};
	return (
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center "
			style={{
				backgroundImage:
					'url(https://i.pinimg.com/originals/f9/5f/ac/f95facb59d05714ee4fa16cf449083a3.jpg)',
			}}
		>
			<div className="container mx-auto my-5 bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full ">
				<h2 className="text-2xl font-semibold mb-4 ">
					Book Appointment with {teacherName}
				</h2>
				<Button
					onClick={handleBack}
					className=" rounded-full w-[40px] h-[40px] text-center bg-transparent hover:!bg-transparent"
				>
					<BsArrowLeftCircle className="text-[25px] text-gray-700" />
				</Button>
				<div className="flex flex-col items-center">
					<form
						onSubmit={handleSubmit}
						className="space-y-4 bg-white p-6 rounded shadow-md w-1/2"
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
						<Button
							type="submit"
							className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Request Appointment
						</Button>
						<Button
							onClick={() => navigate('/student/teachers')}
							className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Back to Teachers
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookAppointment;
