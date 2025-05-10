import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../config/firebase'; // Import the initialized auth and db
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	collection,
	doc,
	setDoc,
	getDoc,
	updateDoc,
	onSnapshot,
} from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userRole, setUserRole] = useState(null);
	const [loading, setLoading] = useState(true);
	const [notifications, setNotifications] = useState([]);
	const [appointments, setAppointments] = useState([]);

	// useEffect hook to listen for changes in the user's authentication state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			try {
				setCurrentUser(user); // Set the current user
				if (user) {
					// Fetch the user's role from Firestore
					const userDoc = await getDoc(doc(db, 'users', user.uid));
					if (userDoc.exists()) {
						setUserRole(userDoc.data().role); // Set the user's role
					} else {
						setUserRole(null);
						// If the user document doesn't exist, create it with a default role
						console.warn('User document not found. Creating...');
						try {
							await setDoc(doc(db, 'users', user.uid), {
								email: user.email,
								role: 'student', // default role
							});
							setUserRole('student');
						} catch (error) {
							console.error(
								'Error creating user document:',
								error,
							);
							addNotification({
								type: 'error',
								message: `Error creating user profile: ${error.message}`,
							});
						}
					}
				} else {
					setUserRole(null); // Clear the user role if no user is logged in
				}
			} catch (error) {
				console.error('Error fetching user data:', error);
				addNotification({
					type: 'error',
					message: `Error fetching user data: ${error.message}`,
				});
				//  Consider logging out the user if there's an issue.
				//  await signOut(auth);
			} finally {
				setLoading(false); // Set loading to false after checking the auth state
			}
		});
		return () => unsubscribe(); // Return the unsubscribe function to prevent memory leaks
	}, []);

	// useEffect hook to listen for changes in the appointments collection in Firestore
	useEffect(() => {
		const appointmentsRef = collection(db, 'appointments');
		const unsubscribe = onSnapshot(
			appointmentsRef,

			(snapshot) => {
				try {
					const appointmentsList = snapshot.docs
						.map((doc) => doc.data())
						.filter(
							(appointItem) =>
								appointItem.studentEmail === currentUser.email,
						);

					setAppointments(appointmentsList);
					console.log(
						'AUTH_CONTEXT: Appointments state updated:',
						appointmentsList,
					); // Add this line
				} catch (error) {
					// ... (your error handling)
					console.log(error);
				}
			},
			(error) => {
				// ... (your error handling)
				console.log(error);
			},
		);
		return () => unsubscribe();
	}, [currentUser]);
	const login = async (email, password, role) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const user = userCredential.user;
			addNotification({
				type: 'success',
				message: `Logged in as ${role}: ${email}`,
			});
			return user;
		} catch (error) {
			console.error('Login error:', error);
			addNotification({
				type: 'error',
				message: `Login failed: ${error.message}`,
			});
			throw error;
		}
	};
	const register = async (email, password, role) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const user = userCredential.user;
			await setDoc(doc(db, 'users', user.uid), { email, role });
			addNotification({
				type: 'success',
				message: `Registered as ${role}: ${email}`,
			});
			return user;
		} catch (error) {
			console.error('Registration error:', error);
			addNotification({
				type: 'error',
				message: `Registration failed: ${error.message}`,
			});
			throw error;
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			setCurrentUser(null);
			setUserRole(null);
			addNotification({
				type: 'warning',
				message: 'Logged out successfully.',
			});
		} catch (error) {
			console.error('Logout error:', error);
			addNotification({
				type: 'error',
				message: `Logout failed: ${error.message}`,
			});
			throw error;
		}
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
	const addAppointment = async (appointment) => {
		try {
			const appointmentsRef = collection(db, 'appointments');
			const newDocRef = await setDoc(doc(appointmentsRef), appointment);
			addNotification({
				type: 'success',
				message: `Appointment created successfully.`,
			});
			return newDocRef;
		} catch (error) {
			console.error('Add appointment error:', error);
			addNotification({
				type: 'error',
				message: `Failed to add appointment: ${error.message}`,
			});
			throw error;
		}
	};

	const cancelAppointment = async (appointmentId) => {
		try {
			const appointmentRef = doc(db, 'appointments', appointmentId);
			await updateDoc(appointmentRef, {
				status: 'cancelled',
			});
			addNotification({
				type: 'warning',
				message: `Appointment ${appointmentId} cancelled.`,
			});
		} catch (error) {
			console.error('Cancel appointment error:', error);
			addNotification({
				type: 'error',
				message: `Failed to cancel appointment: ${error.message}`,
			});
			throw error;
		}
	};

	const contextValue = {
		currentUser,
		userRole,
		loading,
		login,
		register,
		logout,
		notifications,
		addNotification,
		appointments,
		addAppointment,
		cancelAppointment,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{!loading ? children : <div>Loading...</div>}
		</AuthContext.Provider>
	);
};

export default AuthContext;
