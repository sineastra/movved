import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import BaseModal from "./BaseModal"


describe("--> Testing BaseModal", () => {
	it("renders correctly (snapshot test)", () => {
		const tree = renderer.create(
			<BrowserRouter>
				<BaseModal heading="a" showModal={ true } setShowModal={ () => {} }>
					<div>a</div>
				</BaseModal>
			</BrowserRouter>,
		).toJSON()

		expect(tree).toMatchSnapshot()
	})
})