// react_hooks/task_1/dashboard/src/Login/Login.jsx
import React, { useState, useEffect, useContext } from 'react'; // Import useState, useEffect, useContext
import { StyleSheet, css } from 'aphrodite/no-important';
import { newContext } from '../Context/context'; // Import newContext

function Login() {
	// Use useContext hook to consume the context
	const context = useContext(newContext);

	// Initialize state using useState hook
	const [enableSubmit, setEnableSubmit] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// Combined handleChange for both email and password inputs
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	// useEffect hook to handle validation and update enableSubmit state
	// This hook will run whenever formData.email or formData.password changes
	useEffect(() => {
		const isEmailValid = formData.email !== '';
		const isPasswordValid = formData.password.length >= 8;
		setEnableSubmit(isEmailValid && isPasswordValid);
	}, [formData.email, formData.password]); // Dependencies: re-run effect when these values change

	// handleLoginSubmit function
	const handleLoginSubmit = (e) => {
		e.preventDefault(); // Always prevent default form submission behavior
		// Call the logIn method from the context with current email and password
		context.logIn(formData.email, formData.password);
	};

	return (
		<div className={css(styles.AppBody)}>
			<p>Login to access the full dashboard</p>
			<form
				className={css(styles.AppBodyForm, styles.small)}
				onSubmit={handleLoginSubmit} // Use the functional handleLoginSubmit
			>
				<div>
					<label htmlFor='email' className={css(styles.AppBodyLabel)}>
						Email
					</label>
					<input
						type='email'
						name='email'
						className={css(styles.AppBodyInput)}
						value={formData.email} // Controlled input from formData state
						onChange={handleChange} // Use the combined handleChange
					/>
				</div>
				<div>
					<label htmlFor='password' className={css(styles.AppBodyLabel)}>
						Password
					</label>
					<input
						type='password'
						name='password'
						className={css(styles.AppBodyInput)}
						value={formData.password} // Controlled input from formData state
						onChange={handleChange} // Use the combined handleChange
					/>
				</div>
				<input
					type='submit'
					className={css(styles.AppBodyButton)}
					value='OK'
					disabled={!enableSubmit} // Disabled based on enableSubmit state
				/>
			</form>
		</div>
	);
}

const styles = StyleSheet.create({
	AppBody: {
		padding: '36px 24px',
	},
	AppBodyInput: {
		padding: '0 16px 0 8px',
		border: '1px solid #D3D3D3',
		borderRadius: '3px',
	},
	AppBodyLabel: {
		marginRight: '5px',
	},
	AppBodyForm: {
		display: 'flex',
		gap: '1rem',
	},
	AppBodyButton: {
		border: '1px solid #D3D3D3',
		borderRadius: '3px',
		background: 'transparent',
		width: 50,
	},
	small: {
		'@media (max-width: 900px)': {
			display: 'flex',
			flexDirection: 'column',
		},
	},
});

// No PropTypes or defaultProps needed here as logIn is consumed via context
// and email/password are internal state.
// If WithLogging HOC is to be used, it would wrap the export:
// export default withLogging(Login);
export default Login;
