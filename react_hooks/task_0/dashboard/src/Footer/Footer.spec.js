// task_4/dashboard/src/Footer/Footer.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { newContext } from '../Context/context'; // Import the newContext

describe('Footer component', () => {
	it('renders without crashing', () => {
		// When shallow rendering a component that uses useContext,
		// you typically need to wrap it in a Provider or mock the context.
		// For a basic render check, a minimal Provider is sufficient.
		shallow(
			<newContext.Provider value={{ user: { isLoggedIn: false } }}>
				<Footer />
			</newContext.Provider>
		);
	});

	it('renders the text "Copyright"', () => {
		// For shallow tests, you might need to dive into the component rendered by the Provider
		const wrapper = shallow(
			<newContext.Provider value={{ user: { isLoggedIn: false } }}>
				<Footer />
			</newContext.Provider>
		);
		expect(wrapper.find('Footer').dive().text()).toContain('Copyright');
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
