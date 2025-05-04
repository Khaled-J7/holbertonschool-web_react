import { shallow } from 'enzyme';
import React from "react";
import App from './App';

describe("test App", () => {
    //test that App renders without crashing
    it("renders without crashing", () => {
        shallow(<App />);
    });
    const wrapper = shallow(<App />);
    //verify that App renders a div with the class App-header
    xit("verify that App renders a div with the class App-header", () => {
        expect(wrapper.find('div.App-header').exists()).toEqual(true);
    });
    //verify that App renders a div with the class App-body
    xit("verify that App renders a div with the class App-body", () => {
        expect(wrapper.find('div.App-body').exists()).toEqual(true);
    });
    //verify that App renders a div with the class App-footer
    xit("verify that App renders a div with the class App-footer", () => {
        expect(wrapper.find('div.App-footer').exists()).toEqual(true);
    });
});
