// task_4/dashboard/src/Footer/Footer.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { newContext } from '../Context/context'; // Import the newContext

describe('Footer component', () => {
	it('renders without crashing', () => {
		shallow(<Footer />);
	});

	it('renders the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toContain('Copyright');
	});

	// New test: Verify that "Contact us" link is NOT displayed when logged out
	it('does not display "Contact us" link when user is logged out', () => {
		// Mount Footer within a context provider where user is logged out
		const wrapper = mount(
			<newContext.Provider value={{ user: { isLoggedIn: false } }}>
				<Footer />
			</newContext.Provider>
		);
		// Expect the "Contact us" link not to be found
		expect(
			wrapper
				.find('a')
				.filterWhere((n) => n.text() === 'Contact us')
				.exists()
		).toBe(false);
		wrapper.unmount();
	});

	// New test: Verify that "Contact us" link IS displayed when logged in
	it('displays "Contact us" link when user is logged in', () => {
		// Mount Footer within a context provider where user is logged in
		const wrapper = mount(
			<newContext.Provider
				value={{ user: { isLoggedIn: true, email: 'test@example.com' } }}
			>
				<Footer />
			</newContext.Provider>
		);
		// Expect the "Contact us" link to be found
		expect(
			wrapper
				.find('a')
				.filterWhere((n) => n.text() === 'Contact us')
				.exists()
		).toBe(true);
		wrapper.unmount();
	});
});
