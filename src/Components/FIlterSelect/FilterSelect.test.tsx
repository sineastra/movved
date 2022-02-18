import { filterIntF } from "../../_misc/interfaces"
import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import FilterSelect from "./FilterSelect"
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import mock = jest.mock


const mockedFilterData: filterIntF = {
	name: "name",
	title: "title",
	options: [{
		optionTitle: 'optionTitle',
		optionQuery: 'optionQuery',
	}, {
		optionTitle: 'optionTitle1',
		optionQuery: 'optionQuery1',
	}],
}

describe("---> Testing FilterSelect component", () => {
	beforeAll(() => {
		global.history.pushState({}, 'title', '/movies')
	})

	const renderScreen = () =>
		render(
			<BrowserRouter>
				<FilterSelect name={ mockedFilterData.name } title={ mockedFilterData.title }
				              options={ mockedFilterData.options }/>
			</BrowserRouter>,
		)
	it("snapshot test", () => {
		const tree = renderer.create(
			<BrowserRouter>
				<FilterSelect name={ mockedFilterData.name } title={ mockedFilterData.title }
				              options={ mockedFilterData.options }/>
			</BrowserRouter>,
		).toJSON()

		expect(tree).toMatchSnapshot()
	})
	it("should correctly add search query", async () => {
		renderScreen()

		const select = screen.getByRole("combobox")
		const option = screen.getByText<HTMLOptionElement>("optionTitle")

		await user.selectOptions(select, option)
		const search = new URLSearchParams(global.location.search)

		expect(search.get(mockedFilterData.name)).toBe("optionQuery")
	})
	it("should correctly remove search query", async () => {
		renderScreen()

		const select = screen.getByRole("combobox")
		const option = screen.getByText<HTMLOptionElement>("optionTitle")
		const resetOption = screen.getByText<HTMLOptionElement>("All")

		await user.selectOptions(select, option)
		await user.selectOptions(select, resetOption)
		const search = new URLSearchParams(global.location.search)

		expect(search.get(mockedFilterData.name)).toBe(null)
	})
	it("should not add but replace queries with the same name", async () => {
		renderScreen()

		const select = screen.getByRole("combobox")
		const option = screen.getByText<HTMLOptionElement>("optionTitle")
		const option1 = screen.getByText<HTMLOptionElement>("optionTitle1")

		await user.selectOptions(select, option)
		await user.selectOptions(select, option1)
		const search = new URLSearchParams(global.location.search)

		expect(search.get(mockedFilterData.name)).toBe("optionQuery1")
		expect(Array.from(search.entries()).length).toBe(1)
	})
})