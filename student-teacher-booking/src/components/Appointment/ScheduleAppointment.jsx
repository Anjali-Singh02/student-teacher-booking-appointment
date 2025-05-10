import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

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
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<div className="container mx-auto  bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg  my-5">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					Schedule Availability
				</h2>
				<div className="flex  justify-center items-center  ">
					<form
						onSubmit={handleSubmit}
						className="space-y-4 bg-white p-6 rounded w-1/2 shadow-md"
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
						<Button
							type="submit"
							className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Schedule
						</Button>
						<Button
							onClick={() => navigate('/teacher/dashboard')}
							className="ml-2 bg-gray-300 hover:bg-gray-400 !text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Cancel
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ScheduleAppointment;
