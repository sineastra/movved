import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import MobileHeader from "./MobileHeader"
import { MouseEvent } from "react"


const mockedToggleAsideNav = (e: MouseEvent) => {
	return undefined
}

const renderMobileHeader = () =>
	render(
		<BrowserRouter>
			<MobileHeader toggleAsideNav={ mockedToggleAsideNav }/>
		</BrowserRouter>,
	)

describe("---> Testing Mobile Header features", () => {
	it("site logo should be present", () => {
		renderMobileHeader()
		const logo = screen.getByRole('main-logo')

		expect(logo).toBeInTheDocument()
	})

	it("Bars for toggle side menu should be present", () => {
		renderMobileHeader()
		const sideBars = screen.getByTitle(/open side menu/i)

		expect(sideBars).toBeInTheDocument()
	})
	it("search input should be present", () => {
		renderMobileHeader()
		const searchInput = screen.getByRole("search-form")

		expect(searchInput).toBeInTheDocument()
	})
})

