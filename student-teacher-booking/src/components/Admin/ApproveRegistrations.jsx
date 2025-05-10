import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const RegistrationCard = ({ registration }) => (
	<div className="bg-white rounded shadow-md p-4 mb-2 flex items-center justify-between">
		<div>
			<h3 className="text-lg font-semibold mb-1">{registration.name}</h3>
			<p className="text-gray-600">Email: {registration.email}</p>
		</div>
		<div className="space-x-2">
			<Button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				Approve
			</Button>
			<Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				Reject
			</Button>
		</div>
	</div>
);

const ApproveRegistrations = () => {
	const [registrations, setRegistrations] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const mockRegistrations = [
			{
				id: 'r1',
				name: 'New Student A',
				email: 'new.student.a@example.com',
			},
			{
				id: 'r2',
				name: 'Prospective B',
				email: 'prospective.b@example.com',
			},
		];
		setRegistrations(mockRegistrations);
		console.log(
			'APPROVE_REGISTRATIONS: Fetched pending registrations (simulated)',
		);
	}, []);
	const handleBack = () => {
		navigate('/admin/dashboard');
	};
	return (
		<div
			className="flex justify-center  min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					'url(https://static.vecteezy.com/system/resources/previews/034/052/820/non_2x/interior-of-a-classroom-with-natural-light-ai-generated-photo.jpg)',
			}}
		>
			<div className="container mx-auto bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-full my-5">
				<h2 className="text-2xl font-semibold mb-4">
					Approve Student Registrations
				</h2>
				<Button
					onClick={handleBack}
					className=" rounded-full w-[40px] h-[40px] text-center bg-transparent hover:!bg-transparent"
				>
					<BsArrowLeftCircle className="text-[25px] text-gray-700" />
				</Button>
				<div className="space-y-4">
					{registrations.map((registration) => (
						<RegistrationCard
							key={registration.id}
							registration={registration}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ApproveRegistrations;
