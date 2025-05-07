import React from 'react';

const AppointmentCard = ({
	appointment,
	userRole,
	onApprove,
	onReject,
	onCancel,
}) => (
	<div className="bg-white rounded shadow-md p-4">
		<h3 className="text-lg font-semibold mb-2">
			Appointment with{' '}
			{appointment.teacherName || appointment.studentName}
		</h3>
		<p className="text-gray-600 mb-1">Date: {appointment.date}</p>
		<p className="text-gray-600 mb-1">Time: {appointment.time}</p>
		<p className="text-gray-600 mb-2">Reason: {appointment.reason}</p>
		<p className="text-gray-700 font-semibold">
			Status: {appointment.status}
		</p>
		{userRole === 'teacher' && appointment.status === 'pending' && (
			<div className="mt-2 space-x-2">
				<button
					onClick={() => onApprove(appointment.id)}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Approve
				</button>
				<button
					onClick={() => onReject(appointment.id)}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Reject
				</button>
			</div>
		)}
		{userRole === 'student' && appointment.status === 'pending' && (
			<button
				onClick={() => onCancel(appointment.id)}
				className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Cancel
			</button>
		)}
	</div>
);

export default AppointmentCard;
