import React, { useState, useEffect } from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentList = ({ userRole }) => {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		// Simulate fetching appointments from Firebase
		const mockAppointments = [
			{
				id: 'a1',
				studentName: 'Student A',
				teacherName: 'Dr. Smith',
				date: '2025-05-10',
				time: '10:00',
				reason: 'Project discussion',
				status: 'pending',
			},
			{
				id: 'a2',
				studentName: 'Student B',
				teacherName: 'Prof. Jones',
				date: '2025-05-12',
				time: '14:30',
				reason: 'Assignment help',
				status: 'approved',
			},
			{
				id: 'a3',
				studentName: 'Student A',
				teacherName: 'Ms. Brown',
				date: '2025-05-15',
				time: '11:00',
				reason: 'Lab doubts',
				status: 'cancelled',
			},
			{
				id: 'a4',
				studentName: 'Student C',
				teacherName: 'Dr. Smith',
				date: '2025-05-18',
				time: '16:00',
				reason: 'Exam preparation',
				status: 'pending',
			},
		];
		setAppointments(mockAppointments);
		console.log(
			'APPOINTMENT_LIST (' +
				userRole +
				'): Fetched appointments (simulated)',
		);
	}, [userRole]);

	const handleApprove = (appointmentId) => {
		console.log('APPOINTMENT_LIST: Approved appointment', appointmentId);
		setAppointments((prevAppointments) =>
			prevAppointments.map((appt) =>
				appt.id === appointmentId
					? { ...appt, status: 'approved' }
					: appt,
			),
		);
	};

	const handleReject = (appointmentId) => {
		console.log('APPOINTMENT_LIST: Rejected appointment', appointmentId);
		setAppointments((prevAppointments) =>
			prevAppointments.map((appt) =>
				appt.id === appointmentId
					? { ...appt, status: 'rejected' }
					: appt,
			),
		);
	};

	const handleCancel = (appointmentId) => {
		console.log('APPOINTMENT_LIST: Cancelled appointment', appointmentId);
		setAppointments((prevAppointments) =>
			prevAppointments.map((appt) =>
				appt.id === appointmentId
					? { ...appt, status: 'cancelled' }
					: appt,
			),
		);
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{appointments.map((appointment) => (
						<AppointmentCard
							key={appointment.id}
							appointment={appointment}
							userRole={userRole}
							onApprove={handleApprove}
							onReject={handleReject}
							onCancel={handleCancel}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppointmentList;
