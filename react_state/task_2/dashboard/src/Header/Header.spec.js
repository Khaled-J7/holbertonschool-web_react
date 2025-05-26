// task_3/dashboard/src/Header/Header.spec.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { newContext } from '../Context/context'; // Import the newContext

describe('Header component', () => {
  it('renders without crashing', () => {
    // Shallow render for basic component existence check
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    // Shallow render to check for direct children
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  // New test: Verify that the logoutSection is not rendered with default context
  it('does not render logoutSection with default context value', () => {
    // Mount Header inside a Provider with default (logged out) context
    const wrapper = mount(
      <newContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false }, logOut: jest.fn(), logIn: jest.fn() }}>
        <Header />
      </newContext.Provider>
    );
    // Expect the logoutSection element not to exist
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
    wrapper.unmount(); // Clean up the mounted component
  });

  // New test: Verify that the logoutSection is rendered when isLoggedIn is true
  it('renders logoutSection when isLoggedIn is true and email/password are set', () => {
    // Define a user context where isLoggedIn is true and email is set
    const userContext = {
      user: { email: 'test@example.com', password: 'password123', isLoggedIn: true },
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
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
    wrapper.unmount(); // Clean up the mounted component
  });

  // New test: Verify that clicking the "logout" link calls the logOut function
  it('calls logOut function when "logout" link is clicked', () => {
    const mockLogOut = jest.fn(); // Create a Jest spy for the logOut function
    // Define a user context with a logged-in user and the mock logOut function
    const userContext = {
      user: { email: 'test@example.com', password: 'password123', isLoggedIn: true },
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
