// task_4/dashboard/src/Notifications/Notifications.jsx
/* eslint-disable eqeqeq */
import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

// Convert to PureComponent for automatic prop and state comparison
class Notifications extends React.PureComponent {
	constructor(props) {
		super(props);
		// No need to bind markAsRead here, as it's passed as a prop
	}

	// shouldComponentUpdate is removed as PureComponent handles it
	// markAsRead method is replaced by markNotificationAsRead prop

	render() {
		const {
			displayDrawer,
			listNotifications,
			handleDisplayDrawer,
			handleHideDrawer,
			markNotificationAsRead,
		} = this.props;

		return (
			<>
				{!displayDrawer ? (
					<div
						className={css(notificationStyles.menuItem)}
						onClick={handleDisplayDrawer}
					>
						Your notifications
					</div>
				) : (
					<div className={css(notificationStyles.notifications)}>
						<button
							style={{
								color: '#3a3a3a',
								fontWeight: 'bold',
								background: 'none',
								border: 'none',
								fontSize: '15px',
								position: 'absolute',
								right: '3px',
								top: '3px',
								cursor: 'pointer',
								outline: 'none',
							}}
							aria-label='Close'
							className={css(notificationStyles.button)}
							onClick={handleHideDrawer} // Call handleHideDrawer from props
						>
							<img src={closeIcon} alt='close icon' width='15px' />
						</button>
						{listNotifications.length !== 0 ? (
							<p>Here is the list of notifications</p>
						) : null}
						<ul className={css(notificationStyles.ul)}>
							{listNotifications.length === 0 ? (
								<NotificationItem
									type='default'
									value='No new notification for now'
								/>
							) : null}
							{listNotifications.map((val) => {
								// Removed idx as it's not used
								return (
									<NotificationItem
										type={val.type}
										value={val.value}
										html={val.html}
										key={val.id}
										markAsRead={markNotificationAsRead} // Use the prop markNotificationAsRead
										id={val.id}
									/>
								);
							})}
						</ul>
					</div>
				)}
			</>
		);
	}
}

const opacityAnim = {
	'0%': { opacity: 0.5 },
	'100%': { opacity: 1 },
};

const bounceAnim = {
	'0%': { transform: 'translateY(0px)' },
	'33%': { transform: 'translateY(-5px)' },
	'66%': { transform: 'translateY(5px)' },
	'100%': { transform: 'translateY(0px)' },
};

const notificationStyles = StyleSheet.create({
	notifications: {
		border: '3px dotted var(--holberton-red)',
		padding: '6px 12px',
		position: 'absolute',
		top: '21px',
		right: '7px',
		marginTop: '12px',
		zIndex: '100',
		'@media (max-width: 900px)': {
			width: '100%',
			padding: '0px',
			fontSize: 20,
			position: 'relative',
			right: 0,
			left: 0,
			border: 'none',
		},
	},
	menuItem: {
		position: 'relative',
		zIndex: 100,
		float: 'right',
		backgroundColor: '#fff8f8',
		':hover': {
			cursor: 'pointer',
			animationName: [opacityAnim, bounceAnim],
			animationDuration: '1s, 0.5s',
			animationIterationCount: '3',
		},
	},
	ul: {
		'@media (max-width: 900px)': {
			padding: 0,
		},
	},
	button: {
		'@media (max-width: 900px)': {
			position: 'relative',
			float: 'right',
		},
	},
});

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleHideDrawer: () => {},
	handleDisplayDrawer: () => {},
	markNotificationAsRead: () => {}, // Add default prop for the new method
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleHideDrawer: PropTypes.func,
	handleDisplayDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func, // Add propType for the new method
};

export default Notifications;
