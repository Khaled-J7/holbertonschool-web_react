// src/Login/Login.jsx
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types'; // Import PropTypes

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// isLoggedIn property is removed as it's now managed by the parent App component
			email: '',
			password: '',
			enableSubmit: false,
		};
	}

	// Modified handleLoginSubmit to call the logIn method from props
	handleLoginSubmit = (e) => {
		e.preventDefault();
		// Call the logIn method passed from the parent component (App.jsx)
		this.props.logIn(this.state.email, this.state.password);
	};

	handleChangeEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	handleChangePassword = (e) => {
		this.setState({ password: e.target.value });
	};

	componentDidUpdate(prevProps, prevState) {
		// Check if email or password state has changed
		if (
			this.state.email !== prevState.email ||
			this.state.password !== prevState.password
		) {
			// Enable submit button only if both email and password fields are not empty
			if (this.state.email !== '' && this.state.password !== '') {
				this.setState({ enableSubmit: true });
			} else {
				// Disable submit button if either field is empty
				if (this.state.enableSubmit !== false) {
					this.setState({ enableSubmit: false });
				}
			}
		}
	}

	render() {
		// Retrieve email and password from props, providing default values
		const { email: propEmail, password: propPassword } = this.props;

		return (
			<div className={css(styles.AppBody)}>
				<p>Login to access the full dashboard</p>
				<form
					className={css(styles.AppBodyForm, styles.small)}
					onSubmit={this.handleLoginSubmit}
				>
					<div>
						<label htmlFor='email' className={css(styles.AppBodyLabel)}>
							Email
						</label>
						<input
							type='email'
							name='email'
							className={css(styles.AppBodyInput)}
							value={this.state.email} // Use local state for controlled input
							onChange={this.handleChangeEmail}
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
							value={this.state.password} // Use local state for controlled input
							onChange={this.handleChangePassword}
						/>
					</div>
					<input
						type='submit'
						className={css(styles.AppBodyButton)}
						value='OK'
						// The disabled attribute should be based on the enableSubmit state
						disabled={!this.state.enableSubmit} // Disable if enableSubmit is false
					/>
				</form>
			</div>
		);
	}
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

// Define propTypes for the component
Login.propTypes = {
	logIn: PropTypes.func,
	email: PropTypes.string,
	password: PropTypes.string,
};

// Define defaultProps for the component
Login.defaultProps = {
	logIn: () => {}, // Provide an empty function as default
	email: '',
	password: '',
};

export default Login;
