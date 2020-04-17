import React from "react";
import { findByTestAttr } from "../../Utils";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./index";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
	return shallow(<Header {...props} />);
};
describe("Header Component", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});
	it("should contain one 'headerComponent'", () => {
		const wrapper = findByTestAttr(component, "headerComponent");
		expect(wrapper.length).toBe(1);
	});
	it('should contain one "logoIMG"', () => {
		const wrapper = findByTestAttr(component, "logoIMG");
		expect(wrapper.length).toBe(1);
	});
});
