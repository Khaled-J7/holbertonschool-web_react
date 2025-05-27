// task_4/dashboard/src/App/App.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { newContext } from '../Context/context';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);

		this.state = {
			displayDrawer: false,
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			},
			// New state properties for notifications and courses
			notifications: [
				{ id: 1, value: 'New course available', type: 'default' },
				{ id: 2, value: 'New resume available', type: 'urgent' },
				{ id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
			],
			courses: [
				{ id: 1, name: 'ES6', credit: 60 },
				{ id: 2, name: 'Webpack', credit: 20 },
				{ id: 3, name: 'React', credit: 40 },
			],
		};

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this); // Bind the new method
	}

	logIn(email, password) {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true,
			},
		});
	}

	logOut() {
		this.setState({
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			},
		});
	}

	handleDisplayDrawer() {
		this.setState({
			displayDrawer: true,
		});
	}

	handleHideDrawer() {
		this.setState({
			displayDrawer: false,
		});
	}

	// New method to mark a notification as read and remove it from state
	markNotificationAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
		this.setState((prevState) => ({
			notifications: prevState.notifications.filter(
				(notification) => notification.id !== id
			),
		}));
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', this.handleKeyDown);
		}
	}

	componentWillUnmount() {
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', this.handleKeyDown);
		}
	}

	handleKeyDown(event) {
		event.preventDefault();
		if (event.key === 'h' && event.ctrlKey) {
			console.log('Logging you out');
			this.logOut();
		}
	}

	render() {
		const { user, displayDrawer, notifications, courses } = this.state;

		const contextValue = {
			user: user,
			logOut: this.logOut,
			logIn: this.logIn,
		};

		return (
			<newContext.Provider value={contextValue}>
				<Notifications
					listNotifications={notifications} // Pass notifications from state
					displayDrawer={displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
					markNotificationAsRead={this.markNotificationAsRead} // Pass the new method
				/>
				<div className={css(styles.App)}>
					<Header />
					<main className={css(styles.Main)}>
						{user.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={courses} />{' '}
								{/* Pass courses from state */}
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title='News from the School'>
							<p>
								A town hall different from bala blu, blue blu bulaba. broom
								broom broom brooooooooom. Bala blu blue blu bulaba. The farmers
								will make more money. Your lunch will not be imported, cassava
								garri ewa and ehhh ehhhhnn. The farmer will make money, the
								dinner would be cassava, eba, ewa and everything.
							</p>
						</BodySection>
					</main>
					<Footer />
				</div>
			</newContext.Provider>
		);
	}
}

const styles = StyleSheet.create({
	App: {
		margin: 0,
		padding: 0,
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
	Main: {
		flex: 1,
	},
});

App.defaultProps = {};
App.propTypes = {};

export default App;
