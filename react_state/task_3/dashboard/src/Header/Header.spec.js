// task_3/dashboard/src/Header/Header.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { newContext } from '../Context/context';

describe('Header component', () => {
	it('renders without crashing', () => {
		shallow(<Header />);
	});

	it('renders img and h1 tags', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('img').exists()).toBe(true);
		expect(wrapper.find('h1').exists()).toBe(true);
	});

	it('does not render logoutSection with default context value', () => {
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
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
		wrapper.unmount();
	});

	it('renders logoutSection when isLoggedIn is true and email/password are set', () => {
		const userContext = {
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
			logOut: jest.fn(),
			logIn: jest.fn(),
		};
		const wrapper = mount(
			<newContext.Provider value={userContext}>
				<Header />
			</newContext.Provider>
		);
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
		expect(wrapper.find('#logoutSection').text()).toContain(
			'Welcome test@example.com'
		);
		wrapper.unmount();
	});

	it('calls logOut function when "logout" link is clicked', () => {
		const mockLogOut = jest.fn();
		const userContext = {
			user: {
				email: 'test@example.com',
				password: 'password123',
				isLoggedIn: true,
			},
			logOut: mockLogOut,
			logIn: jest.fn(),
		};
		const wrapper = mount(
			<newContext.Provider value={userContext}>
				<Header />
			</newContext.Provider>
		);

		wrapper.find('#logoutSection a').simulate('click');

		expect(mockLogOut).toHaveBeenCalled();
		wrapper.unmount();
	});
});
