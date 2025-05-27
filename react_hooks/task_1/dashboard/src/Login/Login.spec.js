// react_hooks/task_1/dashboard/src/Login/Login.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import { newContext } from '../Context/context'; // Import the newContext

describe('Login component', () => {
	let wrapper;

	beforeEach(() => {
		// Mount Login within a context provider to ensure useContext works in tests
		wrapper = mount(
			<newContext.Provider
				value={{
					user: { email: '', password: '', isLoggedIn: false },
					logIn: jest.fn(),
					logOut: jest.fn(),
				}}
			>
				<Login />
			</newContext.Provider>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('renders without crashing', () => {
		// Shallow render for basic component existence check
		// Need to wrap in Provider for useContext to work even in shallow
		shallow(
			<newContext.Provider
				value={{
					user: { email: '', password: '', isLoggedIn: false },
					logIn: jest.fn(),
					logOut: jest.fn(),
				}}
			>
				<Login />
			</newContext.Provider>
		);
	});

	it('renders 2 input tags and 1 submit button', () => {
		expect(wrapper.find('input')).toHaveLength(3); // 2 inputs + 1 submit
		expect(
			wrapper.find('button[type="submit"], input[type="submit"]')
		).toHaveLength(1);
	});

	it('submit button is disabled by default', () => {
		expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
	});

	it('submit button is enabled after changing email and password (8+ chars)', () => {
		// Simulate typing into email and password fields
		wrapper
			.find('input[type="email"]')
			.simulate('change', {
				target: { name: 'email', value: 'test@example.com' },
			});
		wrapper
			.find('input[type="password"]')
			.simulate('change', {
				target: { name: 'password', value: 'password123' },
			});

		// Force update to ensure state changes are reflected
		wrapper.update();

		// Check if the submit button is now enabled
		expect(wrapper.find('input[type="submit"]').props().disabled).toBe(false);
	});

	it('submit button is disabled if password is less than 8 characters', () => {
		wrapper
			.find('input[type="email"]')
			.simulate('change', {
				target: { name: 'email', value: 'test@example.com' },
			});
		wrapper
			.find('input[type="password"]')
			.simulate('change', { target: { name: 'password', value: 'short' } }); // Less than 8 chars

		wrapper.update();

		expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
	});

	it('logIn method is called with correct arguments on form submission', () => {
		// Mock the logIn function that will be passed via context
		const mockLogIn = jest.fn();

		// Re-mount the component with the mocked context value
		const newWrapper = mount(
			<newContext.Provider
				value={{
					user: { email: '', password: '', isLoggedIn: false },
					logIn: mockLogIn,
					logOut: jest.fn(),
				}}
			>
				<Login />
			</newContext.Provider>
		);

		// Simulate typing into email and password fields
		newWrapper
			.find('input[type="email"]')
			.simulate('change', {
				target: { name: 'email', value: 'test@example.com' },
			});
		newWrapper
			.find('input[type="password"]')
			.simulate('change', {
				target: { name: 'password', value: 'password123' },
			});

		// Simulate form submission
		newWrapper.find('form').simulate('submit');

		// Verify that mockLogIn was called
		expect(mockLogIn).toHaveBeenCalled();
		// Verify that mockLogIn was called with the correct email and password
		expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password123');

		newWrapper.unmount();
	});
});
