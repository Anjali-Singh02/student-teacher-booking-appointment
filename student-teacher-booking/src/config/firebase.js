import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import auth
import { getFirestore } from 'firebase/firestore'; // Import firestore

const firebaseConfig = {
	apiKey: 'AIzaSyA7Vj4w5-K6dHwAVGjumaXzXdLnu3NYY8w',
	authDomain: 'booking-system-5c8dc.firebaseapp.com',
	projectId: 'booking-system-5c8dc',
	storageBucket: 'booking-system-5c8dc.firebasestorage.app',
	messagingSenderId: '343758379907',
	appId: '1:343758379907:web:4fc3140079366b56c234b6',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth
const db = getFirestore(app); // Initialize firestore
export { auth, db }; // Export auth and db
