import React from "react"
import Adapter from "enzyme-adapter-react-16"
import Enzyme, { mount } from "enzyme"
import sinon from "sinon"
import  expect  from "expect"
import CreateEvent from "../src/components/presentation/CreateEvent"

Enzyme.configure({ adapter: new Adapter })

function setup() {
	const props = {
		onCreate: sinon.spy()
	}
	const enzymeWrapper = mount(<CreateEvent {...props} />)

	return {
		props,
		enzymeWrapper
	}
}
describe("components",() => {
	describe("CreateEvent", () =>{
		it("should render self and subcomponents", () => {
			const { enzymeWrapper } = setup()

			expect(enzymeWrapper.find("form").hasClass("custom-create-events")).toBe(true)
			expect(enzymeWrapper.find("input").length).toBe(2)
			expect(enzymeWrapper.find("button").length).toBe(1)
			expect(enzymeWrapper.find("option").length).toBe(10)
			expect(enzymeWrapper.find("div").length).toBe(9)
			expect(enzymeWrapper.find("select").length).toBe(2)

			// const InputProps = enzymeWrapper.find("CreateEvent").props()
			// expect(InputProps.onCreate).toBe(false)
		})
	})
})

