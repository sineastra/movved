import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ReactElement } from "react"


interface navLinksTestsIntF {
	navLinksTexts: string[],
	navLinksHrefs: string[],
	container: ReactElement
}

const runNavLinksTests = ({ navLinksTexts, navLinksHrefs, container }: navLinksTestsIntF) => {
	describe("---> Testing navigation links", () => {
		const generateData = () => {
			const searchRegex = new RegExp(navLinksTexts.join("|"), "i")
			const { getAllByText } = render(
				<BrowserRouter>
					{ container }
				</BrowserRouter>,
			)
			const navLinks = getAllByText(searchRegex)

			return navLinks
		}

		it("should show proper navigation links texts", () => {
			const navLinks = generateData()

			expect(navLinks.length).toBe(3)
		})

		it("nav links should lead to proper pages", () => {
			const navLinks = generateData()

			navLinks.forEach((x, i) => {
				expect(x.closest('a')).toHaveAttribute('href', navLinksHrefs[i])
			})
		})
	})
}

export default runNavLinksTests