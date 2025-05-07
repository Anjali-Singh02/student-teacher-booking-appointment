import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userRole, setUserRole] = useState(null);
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		const storedUser = sessionStorage.getItem('currentUser');
		const storedRole = sessionStorage.getItem('userRole');
		if (storedUser) {
			setCurrentUser(JSON.parse(storedUser));
			setUserRole(storedRole);
		}
	}, []);

	const login = (email, password, role) => {
		console.log('AUTH (Simulated): Logging in user with', email, role);
		const userData = { email };
		setCurrentUser(userData);
		setUserRole(role);
		sessionStorage.setItem('currentUser', JSON.stringify(userData));
		sessionStorage.setItem('userRole', role);
		addNotification({
			type: 'success',
			message: `Logged in as ${role}: ${email}`,
		});
	};

	const register = (email, password, role) => {
		console.log(
			'AUTH (Simulated): Registering user with',
			email,
			'and role',
			role,
		);
		const userData = { email };
		setCurrentUser(userData);
		setUserRole(role);
		sessionStorage.setItem('currentUser', JSON.stringify(userData));
		sessionStorage.setItem('userRole', role);
		addNotification({
			type: 'info',
			message: `Registered as ${role}: ${email}`,
		});
	};

	const logout = () => {
		console.log('AUTH (Simulated): Logging out user');
		setCurrentUser(null);
		setUserRole(null);
		sessionStorage.removeItem('currentUser');
		sessionStorage.removeItem('userRole');
		addNotification({
			type: 'warning',
			message: 'Logged out successfully.',
		});
	};

	const addNotification = (notification) => {
		const id = Date.now();
		setNotifications((prevNotifications) => [
			...prevNotifications,
			{ ...notification, id },
		]);
		setTimeout(() => {
			setNotifications((prevNotifications) =>
				prevNotifications.filter((n) => n.id !== id),
			);
		}, 5000);
	};

	const contextValue = {
		currentUser,
		userRole,
		login,
		register,
		logout,
		notifications,
		addNotification,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
