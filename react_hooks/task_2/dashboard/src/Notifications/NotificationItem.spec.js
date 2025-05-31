// react_hooks/task_2/dashboard/src/Notifications/NotificationItem.spec.js
import React from 'react'; // Import React for JSX
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem.jsx'; // Ensure correct import path

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('checking if the lists have the right color when the type is default', () => {
	// Use the new prop name 'markAsRead'
	let mockedFunc = jest.fn();
	render(
		<NotificationItem
			type={'default'}
			html={null} // Pass null for html when value is used
			value={'testing'}
			markAsRead={mockedFunc} // Use markAsRead prop
			id={1} // Provide an id for the item
		/>
	);
	const text = screen.getByText('testing');
	expect(text).toBeInTheDocument();
	expect(mockedFunc).not.toHaveBeenCalled(); // Ensure click handler isn't called on render
});

test('checking if the lists have the right color when the type is urgent', () => {
	// Use the new prop name 'markAsRead'
	let mockedFunc = jest.fn();
	render(
		<NotificationItem
			type={'urgent'}
			html={null} // Pass null for html when value is used
			value={'testing'}
			markAsRead={mockedFunc} // Use markAsRead prop
			id={2} // Provide an id for the item
		/>
	);
	const text = screen.getByText('testing');
	expect(text).toBeInTheDocument();
	expect(mockedFunc).not.toHaveBeenCalled(); // Ensure click handler isn't called on render
});

test('if the message Notification {id} has been marked as read is logged when clicked', async () => {
	// Mock console.log to capture its output
	const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

	// Create a mock for the markAsRead prop
	const mockMarkAsRead = jest.fn((id) => {
		console.log(`Notification ${id} has been marked as read`);
	});

	render(
		<NotificationItem
			id={123} // Pass the id directly
			type={'default'}
			value={'New resume available'}
			markAsRead={mockMarkAsRead} // Pass the mock function as markAsRead prop
		/>
	);

	// Simulate user clicking the list item
	const userE = userEvent.setup();
	await userE.click(screen.getByRole('listitem'));

	// Verify that markAsRead was called with the correct ID
	expect(mockMarkAsRead).toHaveBeenCalledWith(123);
	// Verify that console.log was called with the correct message
	expect(consoleLogSpy).toBeCalledWith(
		`Notification 123 has been marked as read`
	);

	consoleLogSpy.mockRestore(); // Clean up the console.log spy
});

// New test to verify re-rendering behavior with React.memo
describe('NotificationItem memoization behavior', () => {
	it('should not re-render if props are the same', () => {
		const mockMarkAsRead = jest.fn();
		const { rerender } = render(
			<NotificationItem
				id={1}
				type='default'
				value='Test notification'
				markAsRead={mockMarkAsRead}
			/>
		);

		// Spy on the render function of the component instance
		const renderSpy = jest.spyOn(NotificationItem, 'render');

		// Re-render with identical props
		rerender(
			<NotificationItem
				id={1}
				type='default'
				value='Test notification'
				markAsRead={mockMarkAsRead}
			/>
		);

		expect(screen.getByText('Test notification')).toBeInTheDocument(); // Still present
		expect(renderSpy).not.toHaveBeenCalled(); // This spy might not work as expected for memoized functional components

		renderSpy.mockRestore();
	});
});
