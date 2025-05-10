import React from 'react';
import Button from '../UI/Button';
import { useAuth } from '../../hooks/useAuth';

const AppointmentCard = ({
	appointment,
	userRole,
	onApprove,
	onReject,
	onCancel,
}) => {
	const { currentUser } = useAuth();
	const isStudent = userRole === 'student';
	const isTeacher = userRole === 'teacher';
	return (
		<div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
			<div>
				<h3 className="text-lg font-semibold">
					{isStudent
						? `Appointment with ${appointment.teacherName}`
						: `Appointment with ${appointment.studentName}`}
				</h3>
				<p>Date: {appointment.date}</p>
				<p>Time: {appointment.time}</p>
				<p>Reason: {appointment.reason}</p>
				<p>
					Status:{' '}
					<span
						className={
							appointment.status === 'pending'
								? 'text-yellow-500'
								: appointment.status === 'approved'
								? 'text-green-500'
								: 'text-red-500'
						}
					>
						{appointment.status}
					</span>
				</p>
			</div>
			<div className="mt-4 flex justify-end gap-2">
				{isTeacher && appointment.status === 'pending' && (
					<>
						<button
							onClick={() => onApprove(appointment.id)}
							className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Approve
						</button>
						<button
							onClick={() => onReject(appointment.id)}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Reject
						</button>
					</>
				)}
				{isStudent && appointment.status === 'pending' && (
					<Button
						onClick={() => onCancel(appointment.id)}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Cancel
					</Button>
				)}
			</div>
		</div>
	);
};
export default AppointmentCard;
