// src/App/App.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { newContext } from '../Context/context'; // Import the newContext

describe('App component', () => {
	let wrapper;

	// Before each test, mount the App component
	beforeEach(() => {
		// We need to mount App to test state changes and interactions with children
		// Ensure the context provider is available for Login to consume
		wrapper = mount(<App />);
	});

	// After each test, unmount the component to clean up
	afterEach(() => {
		wrapper.unmount();
		// Reset any mocks if necessary (e.g., for window.alert if it were used)
		jest.restoreAllMocks();
	});

	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('renders CourseList when isLoggedIn is true', () => {
		// Set the state to simulate a logged-in user
		wrapper.setState({
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
		});
		wrapper.update(); // Force update to re-render with new state

		// Expect CourseList to be rendered and Login not to be
		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	});

	it('renders Login when isLoggedIn is false (default state)', () => {
		// By default, isLoggedIn is false, so Login should be rendered
		expect(wrapper.find(Login).exists()).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(false);
	});

	it('verifies that the logIn method updates the state correctly', () => {
		// Check initial state
		expect(wrapper.state().user.isLoggedIn).toBe(false);

		// Call the logIn method directly on the instance
		wrapper.instance().logIn('user@example.com', 'password123');
		wrapper.update(); // Force update

		// Verify the state has been updated
		expect(wrapper.state().user.isLoggedIn).toBe(true);
		expect(wrapper.state().user.email).toBe('user@example.com');
		expect(wrapper.state().user.password).toBe('password123');

		// Verify conditional rendering changed
		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	});

	it('verifies that the logOut method updates the state correctly', () => {
		// First, log in a user
		wrapper.setState({
			user: {
				email: 'user@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
		});
		wrapper.update();
		expect(wrapper.state().user.isLoggedIn).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(true);

		// Call the logOut method directly on the instance
		wrapper.instance().logOut();
		wrapper.update(); // Force update

		// Verify the state has been reset
		expect(wrapper.state().user.isLoggedIn).toBe(false);
		expect(wrapper.state().user.email).toBe('');
		expect(wrapper.state().user.password).toBe('');

		// Verify conditional rendering changed back
		expect(wrapper.find(Login).exists()).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(false);
	});

	it('calls logOut function when Ctrl+h is pressed', () => {
		// Mock the logOut method to spy on its calls
		const logOutSpy = jest.spyOn(wrapper.instance(), 'logOut');

		// Simulate a logged-in state
		wrapper.setState({
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
		});
		wrapper.update();

		// Simulate the keydown event (Ctrl+h) on the window
		const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
		window.dispatchEvent(event);

		// Verify that logOut was called
		expect(logOutSpy).toHaveBeenCalled();
		// Verify that the state reflects logout
		expect(wrapper.state().user.isLoggedIn).toBe(false);
	});

	it('Notifications panel show/hide works correctly', () => {
		const notificationsWrapper = wrapper.find(Notifications);

		// Initially, displayDrawer should be false
		expect(wrapper.state().displayDrawer).toBe(false);
		expect(notificationsWrapper.props().displayDrawer).toBe(false);

		// Simulate clicking the "Your notifications" text (which triggers handleDisplayDrawer)
		// You might need to find the specific element that triggers this.
		// Assuming 'Notifications' component has a clickable area or a prop for this.
		// For now, we'll directly call the method on the App instance.
		wrapper.instance().handleDisplayDrawer();
		wrapper.update();
		expect(wrapper.state().displayDrawer).toBe(true);
		expect(wrapper.find(Notifications).props().displayDrawer).toBe(true);

		// Simulate clicking the close button (which triggers handleHideDrawer)
		// Again, directly calling the method for simplicity in App.spec.js.
		wrapper.instance().handleHideDrawer();
		wrapper.update();
		expect(wrapper.state().displayDrawer).toBe(false);
		expect(wrapper.find(Notifications).props().displayDrawer).toBe(false);
	});

	// Test for the overall login flow through the Login component
	it('Login component submission updates App state and renders CourseList', () => {
		// Ensure we start with Login rendered
		expect(wrapper.find(Login).exists()).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(false);

		// Find the Login component rendered by App
		const loginComponent = wrapper.find(Login);

		// Simulate typing into email and password fields within the Login component
		loginComponent
			.find('input[type="email"]')
			.simulate('change', { target: { value: 'test@example.com' } });
		loginComponent
			.find('input[type="password"]')
			.simulate('change', { target: { value: 'password123' } });

		// Simulate form submission on the Login component's form
		loginComponent.find('form').simulate('submit');

		// Force App to re-render after Login's form submission has updated App's state
		wrapper.update();

		// Verify App's state reflects login
		expect(wrapper.state().user.isLoggedIn).toBe(true);
		expect(wrapper.state().user.email).toBe('test@example.com');
		expect(wrapper.state().user.password).toBe('password123');

		// Verify that CourseList is now rendered and Login is unmounted
		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	});
});
