import { shallow } from 'enzyme';
import React from "react";
import Notifications from './Notifications';

describe("test Notificacions", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  const wrapper = shallow(<Notifications />);

  it("verify that Notifications renders three list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(3);
  });

  it("verify that Notifications renders the text Here is the list of notifications", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toEqual(true);
  });
});