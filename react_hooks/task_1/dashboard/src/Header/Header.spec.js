import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { newContext } from '../Context/context';

describe('Header component', () => {
	it('renders without crashing', () => {
		// For shallow rendering, we still need a Provider if the component consumes context
		// or provide a mock context value if it's not strictly necessary for the shallow test itself.
		// For basic render check, a minimal provider is sufficient.
		shallow(
			<newContext.Provider
				value={{
					user: { isLoggedIn: false },
					logOut: () => {},
					logIn: () => {},
				}}
			>
				<Header />
			</newContext.Provider>
		);
	});

	it('renders img and h1 tags', () => {
		// For this test, we can use shallow as it doesn't deeply interact with context logic
		const wrapper = shallow(
			<newContext.Provider
				value={{
					user: { isLoggedIn: false },
					logOut: () => {},
					logIn: () => {},
				}}
			>
				<Header />
			</newContext.Provider>
		);
		// Find the actual Header component rendered by the Provider
		expect(wrapper.find('Header').dive().find('img').exists()).toBe(true);
		expect(wrapper.find('Header').dive().find('h1').exists()).toBe(true);
	});

	// Verify that the logoutSection is not rendered with default context
	it('does not render logoutSection with default context value', () => {
		// Mount Header inside a Provider with default (logged out) context
		const wrapper = mount(
			<newContext.Provider
				value={{
					user: { email: '', password: '', isLoggedIn: false },
					logOut: jest.fn(),
					logIn: jest.fn(),
				}}
			>
				<Header />
			</newContext.Provider>
		);
		// Expect the logoutSection element not to exist
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
		wrapper.unmount(); // Clean up the mounted component
	});

	// Verify that the logoutSection is rendered when isLoggedIn is true
	it('renders logoutSection when isLoggedIn is true and email/password are set', () => {
		// Define a user context where isLoggedIn is true and email is set
		const userContext = {
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
			logOut: jest.fn(), // Provide a mock logOut function
			logIn: jest.fn(),
		};
		// Mount Header inside a Provider with the logged-in user context
		const wrapper = mount(
			<newContext.Provider value={userContext}>
				<Header />
			</newContext.Provider>
		);
		// Expect the logoutSection element to exist
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
		// Expect the text content of logoutSection to contain the user's email
		expect(wrapper.find('#logoutSection').text()).toContain(
			'Welcome test@example.com'
		);
		wrapper.unmount(); // Clean up the mounted component
	});

	// Verify that clicking the "logout" link calls the logOut function
	it('calls logOut function when "logout" link is clicked', () => {
		const mockLogOut = jest.fn(); // Create a Jest spy for the logOut function
		// Define a user context with a logged-in user and the mock logOut function
		const userContext = {
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
			logOut: mockLogOut, // Pass the spy as the logOut function in the context
			logIn: jest.fn(),
		};
		// Mount Header inside a Provider with the logged-in user context
		const wrapper = mount(
			<newContext.Provider value={userContext}>
				<Header />
			</newContext.Provider>
		);

		// Find the logout link within the logoutSection and simulate a click event
		wrapper.find('#logoutSection a').simulate('click');

		// Verify that the mockLogOut function (spy) was called
		expect(mockLogOut).toHaveBeenCalled();
		wrapper.unmount(); // Clean up the mounted component
	});
});
