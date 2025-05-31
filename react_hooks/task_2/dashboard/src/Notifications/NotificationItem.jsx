// react_hooks/task_2/dashboard/src/Notifications/NotificationItem.jsx
import PropTypes from 'prop-types';
// Removed uuid4 as the id is now passed directly from the parent
import React from 'react'; // Import React for React.memo
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	defaultStyle: {
		color: 'blue',
		'@media (max-width: 900px)': {
			width: '100%',
			padding: '10px 8px',
			borderBottom: '2px solid',
			borderColor: 'black',
		},
	},
	urgentStyle: {
		color: 'red',
		'@media (max-width: 900px)': {
			width: '100%',
			padding: '10px 8px',
			borderBottom: '2px solid',
			borderColor: 'black',
		},
	},
});

// Convert to a functional component
function NotificationItem({ type, html, value, markAsRead, id }) {
	// The onClick handler now directly calls markAsRead with the item's id
	const handleClick = () => {
		if (markAsRead && id) {
			markAsRead(id);
		}
	};

	if (html) {
		// Check for html prop directly
		return (
			<li
				className={css(
					type === 'urgent' ? styles.urgentStyle : styles.defaultStyle
				)}
				dangerouslySetInnerHTML={{ __html: html.__html }} // Access __html property
				role='listitem'
				onClick={handleClick} // Use the new handleClick
			></li>
		);
	} else {
		return (
			<li
				className={css(
					type === 'urgent' ? styles.urgentStyle : styles.defaultStyle
				)}
				role='listitem'
				onClick={handleClick} // Use the new handleClick
			>
				{value}
			</li>
		);
	}
}

NotificationItem.propTypes = {
	type: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	value: PropTypes.string,
	markAsRead: PropTypes.func, // Changed prop name from 'fn' to 'markAsRead'
	id: PropTypes.number, // Added id propType
};

NotificationItem.defaultProps = {
	type: 'default',
	html: null,
	value: '',
	markAsRead: () => {},
	id: 0,
};

// Use React.memo for memoization, replacing PureComponent functionality
export default React.memo(NotificationItem);
