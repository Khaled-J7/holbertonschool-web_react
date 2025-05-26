// task_3/dashboard/src/Header/Header.jsx
import React from 'react';
import holberton_logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { newContext } from '../Context/context';

const cssVars = {
	mainColor: '#e01d3f',
};

class Header extends React.Component {
	static contextType = newContext;

	render() {
		const { user, logOut } = this.context;

		return (
			<header className={css(styles.header)}>
				<img
					src={holberton_logo}
					className={css(styles.headerImg)}
					alt='logo'
				/>
				<h1>School dashboard</h1>
				{user.isLoggedIn && (
					<section className={css(styles.logoutSection)} id='logoutSection'>
						Welcome <b>{user.email}</b> (
						<a href='#' onClick={logOut} className={css(styles.logoutLink)}>
							logout
						</a>
						)
					</section>
				)}
			</header>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		color: cssVars.mainColor,
		fontSize: '20px',
		borderBottom: '4px solid #e0354b',
		padding: '10px 20px',
	},

	headerImg: {
		width: '200px',
		height: '200px',
	},
	logoutSection: {
		marginLeft: 'auto',
		fontSize: '1.2rem',
		fontWeight: 'normal',
		color: 'black',
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
	},
	logoutLink: {
		cursor: 'pointer',
		color: cssVars.mainColor,
		textDecoration: 'underline',
		marginLeft: '5px',
	},
});

export default Header;
