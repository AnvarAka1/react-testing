import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../../Utils";
import Headline from "./index";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
	return shallow(<Headline {...props} />);
};
describe("Headline", () => {
	describe("Have props", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				header: "Test Header",
				desc: "Test Desc"
			};
			wrapper = setUp(props);
		});
		it("Should render without errors", () => {
			const component = findByTestAttr(wrapper, "HeadlineComponent");
			expect(component.length).toBe(1);
		});
	});
	describe("Have NO props", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				header: null,
				desc: "Test desc"
			};
			wrapper = setUp(props);
		});
		it("Should not render", () => {
			const component = findByTestAttr(wrapper, "HeadlineComponent");
			expect(component.length).toBe(0);
		});
	});
});
