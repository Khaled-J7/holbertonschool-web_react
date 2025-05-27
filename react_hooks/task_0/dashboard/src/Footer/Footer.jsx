// react_hooks/task_0/dashboard/src/Footer/Footer.jsx
import React, { useContext } from 'react'; // Import useContext
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import { newContext } from '../Context/context'; // Import the newContext

function Footer() {
	// Use useContext hook to directly access the context value
	const { user } = useContext(newContext); // Destructure 'user' directly

	return (
		<div className='App-footer'>
			<p>
				Copyright {getCurrentYear()} - {getFooterCopy()}
			</p>
			{/* Display "Contact us" link only when user is logged in */}
			{user.isLoggedIn && ( // Access isLoggedIn directly from 'user'
				<p>
					<a href='#'>Contact us</a>
				</p>
			)}
		</div>
	);
}

export default Footer;
