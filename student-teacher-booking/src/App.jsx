import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import './styles/global.css';
import Notification from './components/UI/Notification';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TeacherList from './components/Teacher/TeacherList';
import BookAppointment from './components/Appointment/BookAppointment';
import AppointmentList from './components/Appointment/AppointmentList';
import SendMessage from './components/Messaging/SendMessage';
import ViewMessages from './components/Messaging/ViewMessage';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AddTeacher from './components/Admin/AddTeacher';
import EditTeacher from './components/Admin/EditTeacher';
import ApproveRegistrations from './components/Admin/ApproveRegistrations';
import ScheduleAppointment from './components/Appointment/ScheduleAppointment';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import Home from './Home';

const PrivateRoute = ({ children, roles }) => {
	const { currentUser, userRole } = useAuth();

	if (!currentUser) {
		return <Navigate to="/login" />;
	}

	if (roles && !roles.includes(userRole)) {
		return <Navigate to="/unauthorized" />;
	}

	return children;
};

const Unauthorized = () => (
	<div className="flex justify-center items-center h-screen bg-gray-100">
		<div className="bg-white p-8 rounded shadow-md">
			<h2 className="text-2xl font-semibold mb-4">Unauthorized Access</h2>
			<p className="text-gray-600">
				You do not have permission to view this page.
			</p>
		</div>
	</div>
);

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<div className="bg-gray-100 min-h-screen">
					<Notification />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />

						<Route
							path="/student/dashboard"
							element={
								<PrivateRoute roles={['student']}>
									<StudentDashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/student/teachers"
							element={
								<PrivateRoute roles={['student']}>
									<TeacherList />
								</PrivateRoute>
							}
						/>
						<Route
							path="/student/book/:teacherId"
							element={
								<PrivateRoute roles={['student']}>
									<BookAppointment />
								</PrivateRoute>
							}
						/>
						<Route
							path="/student/appointments"
							element={
								<PrivateRoute roles={['student']}>
									<AppointmentList userRole="student" />
								</PrivateRoute>
							}
						/>
						<Route
							path="/student/messages/:teacherId?"
							element={
								<PrivateRoute roles={['student']}>
									<SendMessage />
								</PrivateRoute>
							}
						/>
						<Route
							path="/student/view-messages"
							element={
								<PrivateRoute roles={['student']}>
									<ViewMessages userRole="student" />
								</PrivateRoute>
							}
						/>

						<Route
							path="/teacher/dashboard"
							element={
								<PrivateRoute roles={['teacher']}>
									<TeacherDashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/teacher/schedule"
							element={
								<PrivateRoute roles={['teacher']}>
									<ScheduleAppointment />
								</PrivateRoute>
							}
						/>
						<Route
							path="/teacher/appointments"
							element={
								<PrivateRoute roles={['teacher']}>
									<AppointmentList userRole="teacher" />
								</PrivateRoute>
							}
						/>
						<Route
							path="/teacher/messages/:studentId?"
							element={
								<PrivateRoute roles={['teacher']}>
									<SendMessage />
								</PrivateRoute>
							}
						/>
						<Route
							path="/teacher/view-messages"
							element={
								<PrivateRoute roles={['teacher']}>
									<ViewMessages userRole="teacher" />
								</PrivateRoute>
							}
						/>

						<Route
							path="/admin/dashboard"
							element={
								<PrivateRoute roles={['admin']}>
									<AdminDashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/admin/add-teacher"
							element={
								<PrivateRoute roles={['admin']}>
									<AddTeacher />
								</PrivateRoute>
							}
						/>
						<Route
							path="/admin/edit-teacher"
							element={
								<PrivateRoute roles={['admin']}>
									<EditTeacher />
								</PrivateRoute>
							}
						/>
						<Route
							path="/admin/approve-registrations"
							element={
								<PrivateRoute roles={['admin']}>
									<ApproveRegistrations />
								</PrivateRoute>
							}
						/>

						<Route
							path="/unauthorized"
							element={<Unauthorized />}
						/>
						<Route path="/" element={<Navigate to="/login" />} />
					</Routes>
				</div>
			</Router>
		</AuthProvider>
	);
};

export default App;
