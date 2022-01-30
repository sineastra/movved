import { act, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DesktopHeader from "../Header/DesktopHeader/DesktopHeader"
import userEvent from "@testing-library/user-event"


describe("Testing search input", () => {
	const generateData = () => {
		const { getByRole } = render(
			<BrowserRouter>
				<DesktopHeader loggedUser={ null }/>
			</BrowserRouter>,
		)

		const searchBar = getByRole('searchbox') as HTMLInputElement

		return searchBar
	}

	const simulateInputSubmit = async (keyboardSubmit: boolean) => {
		const user = userEvent.setup()
		const searchInput = generateData()
		const searchIcon = screen.getByTitle('Search')

		await user.type(searchInput, 'a')
		await act(() => {
			return keyboardSubmit ? user.keyboard('{Enter}') : user.click(searchIcon)
		})

		const searchParam = window.location.search

		return { searchParam, searchInput }
	}

	it("search input should be present on the header", () => {
		const searchBar = generateData()

		expect(searchBar).toBeInTheDocument()
	})

	it("should change value on user input", async () => {
		const user = userEvent.setup()
		const searchBar = generateData()

		await user.type(searchBar, 'a')

		expect(searchBar.value).toEqual('a')
	})

	it("should navigate to the proper URL on submit with Enter", async () => {
		const { searchParam } = await simulateInputSubmit(true)

		expect(searchParam).toEqual('?search=a')
	})

	it("should navigate to the proper URL on submit with Click on the Search Icon", async () => {
		const { searchParam } = await simulateInputSubmit(false)

		expect(searchParam).toEqual('?search=a')
	})
	it("should clear input on submit with Enter", async () => {
		const { searchInput } = await simulateInputSubmit(true)

		expect(searchInput.value).toEqual('')
	})
	it("should clear input on submit with Enter", async () => {
		const { searchInput } = await simulateInputSubmit(false)

		expect(searchInput.value).toEqual('')
	})
})