import { shallow } from 'enzyme';
import React from "react";
import Header from './Header';

describe("test Header", () => {
    it("renders without crashing", () => {
        shallow(<Header />);
    });
    const wrapper = shallow(<Header />);
    xit("verify that App renders a div with the class App-header", () => {
        expect(wrapper.find('div.App-header').exists()).toEqual(true);
    });
    xit("verify that App renders a div with the class App-body", () => {
        expect(wrapper.find('div.App-body').exists()).toEqual(true);
    });
    xit("verify that App renders a div with the class App-footer", () => {
        expect(wrapper.find('div.App-footer').exists()).toEqual(true);
    });
});