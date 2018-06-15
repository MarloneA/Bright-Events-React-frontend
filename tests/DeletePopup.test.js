import React from "react"
import Adapter from "enzyme-adapter-react-16"
import Enzyme, { mount } from "enzyme"
import  expect  from "expect"
import DeletePopup from "../src/components/presentation/DeletePopup"

Enzyme.configure({ adapter: new Adapter })

function setup() {
	const props = {

	}
	const enzymeWrapper = mount(<DeletePopup {...props} />)

	return {
		props,
		enzymeWrapper
	}
}
describe("components",() => {
	describe("DeletePopup", () =>{
		it("should render self and subcomponents", () => {
			const { enzymeWrapper } = setup()


			expect(enzymeWrapper.find("button").length).toBe(3)
			expect(enzymeWrapper.find("div").length).toBe(7)

		})
	})
})