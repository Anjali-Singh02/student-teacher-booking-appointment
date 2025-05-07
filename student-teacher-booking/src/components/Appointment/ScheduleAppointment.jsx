import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ScheduleAppointment = () => {
	const [availability, setAvailability] = useState({
		date: '',
		startTime: '',
		endTime: '',
	});
	const navigate = useNavigate();
	const { addNotification } = useAuth();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setAvailability((prevAvailability) => ({
			...prevAvailability,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('TEACHER: Scheduled availability:', availability);
		addNotification({
			type: 'success',
			message: `Availability scheduled for ${availability.date} from ${availability.startTime} to ${availability.endTime}`,
		});
		navigate('/teacher/dashboard');
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">
					Schedule Availability
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
							value={availability.date}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="startTime"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Start Time
						</label>
						<input
							type="time"
							id="startTime"
							name="startTime"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={availability.startTime}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="endTime"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							End Time
						</label>
						<input
							type="time"
							id="endTime"
							name="endTime"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={availability.endTime}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Schedule
					</button>
					<button
						onClick={() => navigate('/teacher/dashboard')}
						className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Back to Dashboard
					</button>
				</form>
			</div>
		</div>
	);
};

export default ScheduleAppointment;
