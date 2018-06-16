import React from "react"
import Adapter from "enzyme-adapter-react-16"
import Enzyme, { shallow } from "enzyme"
import  expect  from "expect"
import { Register } from "../src/components/pages/Register"

Enzyme.configure({ adapter: new Adapter })

describe("Register", () => {
	it("renders four inputs", () => {
		expect().toBe()
	})
})
