// task_4/dashboard/src/App/App.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { newContext } from '../Context/context';

describe('App component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<App />);
	});

	afterEach(() => {
		wrapper.unmount();
		jest.restoreAllMocks();
	});

	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('renders CourseList when isLoggedIn is true', () => {
		wrapper.setState({
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
		});
		wrapper.update();

		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	});

	it('renders Login when isLoggedIn is false (default state)', () => {
		expect(wrapper.find(Login).exists()).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(false);
	});

	it('verifies that the logIn method updates the state correctly', () => {
		expect(wrapper.state().user.isLoggedIn).toBe(false);

		wrapper.instance().logIn('user@example.com', 'password123');
		wrapper.update();

		expect(wrapper.state().user.isLoggedIn).toBe(true);
		expect(wrapper.state().user.email).toBe('user@example.com');
		expect(wrapper.state().user.password).toBe('password123');

		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	});

	it('verifies that the logOut method updates the state correctly', () => {
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

		wrapper.instance().logOut();
		wrapper.update();

		expect(wrapper.state().user.isLoggedIn).toBe(false);
		expect(wrapper.state().user.email).toBe('');
		expect(wrapper.state().user.password).toBe('');

		expect(wrapper.find(Login).exists()).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(false);
	});

	it('calls logOut function when Ctrl+h is pressed', () => {
		const logOutSpy = jest.spyOn(wrapper.instance(), 'logOut');

		wrapper.setState({
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
		});
		wrapper.update();

		const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
		window.dispatchEvent(event);

		expect(logOutSpy).toHaveBeenCalled();
		expect(wrapper.state().user.isLoggedIn).toBe(false);
	});

	it('Notifications panel show/hide works correctly', () => {
		const notificationsWrapper = wrapper.find(Notifications);

		expect(wrapper.state().displayDrawer).toBe(false);
		expect(notificationsWrapper.props().displayDrawer).toBe(false);

		wrapper.instance().handleDisplayDrawer();
		wrapper.update();
		expect(wrapper.state().displayDrawer).toBe(true);
		expect(wrapper.find(Notifications).props().displayDrawer).toBe(true);

		wrapper.instance().handleHideDrawer();
		wrapper.update();
		expect(wrapper.state().displayDrawer).toBe(false);
		expect(wrapper.find(Notifications).props().displayDrawer).toBe(false);
	});

	it('Login component submission updates App state and renders CourseList', () => {
		expect(wrapper.find(Login).exists()).toBe(true);
		expect(wrapper.find(CourseList).exists()).toBe(false);

		const loginComponent = wrapper.find(Login);

		loginComponent
			.find('input[type="email"]')
			.simulate('change', { target: { value: 'test@example.com' } });
		loginComponent
			.find('input[type="password"]')
			.simulate('change', { target: { value: 'password123' } });

		loginComponent.find('form').simulate('submit');

		wrapper.update();

		expect(wrapper.state().user.isLoggedIn).toBe(true);
		expect(wrapper.state().user.email).toBe('test@example.com');
		expect(wrapper.state().user.password).toBe('password123');

		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	});

	it('clicking on a notification item removes it and logs to console', () => {
		const initialNotifications = [
			{ id: 1, value: 'Notification 1', type: 'default' },
			{ id: 2, value: 'Notification 2', type: 'urgent' },
		];
		wrapper.setState({
			notifications: initialNotifications,
			displayDrawer: true,
		});
		wrapper.update();

		const consoleSpy = jest.spyOn(console, 'log');

		// Simulate the markAsRead call on the NotificationItem, which is passed down from App
		wrapper
			.find(Notifications)
			.find('NotificationItem')
			.first()
			.prop('markAsRead')(1);

		expect(consoleSpy).toHaveBeenCalledWith(
			'Notification 1 has been marked as read'
		);

		expect(wrapper.state().notifications).toHaveLength(1);
		expect(wrapper.state().notifications).toEqual([
			{ id: 2, value: 'Notification 2', type: 'urgent' },
		]);

		consoleSpy.mockRestore();
	});
});
