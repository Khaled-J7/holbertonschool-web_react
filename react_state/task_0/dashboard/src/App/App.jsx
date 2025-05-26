import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'default', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const styles = StyleSheet.create({
	app: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		backgroundColor: 'rgb(255, 255, 255)',
		justifyContent: 'space-between',
		minHeight: '100vh',
		fontFamily: 'sans-serif',
	},
	body: {
		flexGrow: 1,
		padding: '20px',
	},
	footer: {
		alignSelf: 'stretch',
		borderTopStyle: 'solid',
		borderColor: '#e62d2d',
		fontStyle: 'italic',
	},
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDrawer: false,
		};
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
	}
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}
	handleKeyDown = (event) => {
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			this.props.logOut();
		}
	};
	handleDisplayDrawer = () => {
		this.setState({ displayDrawer: true });
	};
	handleHideDrawer = () => {
		this.setState({ displayDrawer: false });
	};

	render() {
		const { isLoggedIn } = this.props;
		const { displayDrawer } = this.state;

		return (
			<>
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
				/>
				<div className={css(styles.app)}>
					<Header />
					<div className={css(styles.body)}>
						{isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom
								title='
            Log in to continue'
							>
								<Login />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title='News from the School'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</BodySection>
					</div>
					<div className={css(styles.footer)}>
						<Footer />
					</div>
				</div>
			</>
		);
	}
}
App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};
App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {},
};

export default App;
