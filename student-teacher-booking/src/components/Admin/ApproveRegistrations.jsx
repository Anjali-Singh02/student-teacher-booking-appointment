import React, { useState, useEffect } from 'react';

const RegistrationCard = ({ registration }) => (
	<div className="bg-white rounded shadow-md p-4 mb-2 flex items-center justify-between">
		<div>
			<h3 className="text-lg font-semibold mb-1">{registration.name}</h3>
			<p className="text-gray-600">Email: {registration.email}</p>
		</div>
		<div className="space-x-2">
			<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				Approve
			</button>
			<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				Reject
			</button>
		</div>
	</div>
);

const ApproveRegistrations = () => {
	const [registrations, setRegistrations] = useState([]);

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

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-4">
					Approve Student Registrations
				</h2>
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
