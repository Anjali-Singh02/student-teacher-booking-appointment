import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import AppointmentCard from './AppointmentCard'; // Import AppointmentCard
import Button from '../UI/Button';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // Import useParams

const AppointmentList = ({ userRole }) => {
	const { appointments, currentUser, cancelAppointment } = useAuth(); // Get cancelAppointment
	const [filteredAppointments, setFilteredAppointments] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		console.log('APPOINTMENT_LIST: All appointments:', appointments); // Add this
		if (userRole === 'student') {
			const studentAppointments = appointments.filter(
				(appointment) =>
					appointment.studentEmail === currentUser?.email,
			);
			setFilteredAppointments(studentAppointments);
			console.log(
				'APPOINTMENT_LIST: Student appointments:',
				studentAppointments,
			); // Add this
		} else if (userRole === 'teacher') {
			const teacherAppointments = appointments.filter(
				(appointment) =>
					appointment.teacherEmail === currentUser?.email,
			);
			setFilteredAppointments(teacherAppointments);
			console.log(
				'APPOINTMENT_LIST: Teacher appointments:',
				teacherAppointments,
			); // Add this
		} else {
			setFilteredAppointments(appointments);
			console.log(
				'APPOINTMENT_LIST: All appointments (admin):',
				appointments,
			); //add this
		}
	}, [appointments, userRole, currentUser?.email]);

	const handleBack = () => {
		if (userRole === 'student') {
			navigate('/student/dashboard');
		} else if (userRole === 'teacher') {
			navigate('/teacher/dashboard');
		} else if (userRole === 'admin') {
			navigate('/admin/dashboard');
		} else {
			navigate('/');
		}
	};
	const handleCancel = (appointmentId) => {
		cancelAppointment(appointmentId);
	};

	return (
		<div
			className="flex justify-center min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://i.pinimg.com/originals/f9/5f/ac/f95facb59d05714ee4fa16cf449083a3.jpg)',
			}}
		>
			<div className="container mx-auto bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-full my-5">
				<h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
				<Button
					onClick={handleBack}
					className=" rounded-full w-[40px] h-[40px] text-center bg-transparent hover:!bg-transparent"
				>
					<BsArrowLeftCircle className="text-[25px] text-gray-700" />
				</Button>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{filteredAppointments.length > 0 ? (
						filteredAppointments.map((appointment) => (
							<AppointmentCard
								key={appointment.id}
								appointment={appointment}
								userRole={userRole}
								onCancel={handleCancel} // Pass handleCancel
							/>
						))
					) : (
						<div className="text-gray-800 text-center">
							No appointments found.
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AppointmentList;
