import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"


describe("---> Testing the footer (it is static, so only a snapshot test", () => {
	it("snapshots should match", () => {
		const tree = renderer.create(
			<BrowserRouter>
				<Footer/>
			</BrowserRouter>,
		).toJSON()

		expect(tree).toMatchSnapshot()
	})
})