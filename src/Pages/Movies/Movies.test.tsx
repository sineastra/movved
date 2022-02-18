import { act, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Movies from "./Movies"
import user from "@testing-library/user-event"
import { filterIntF } from "../../_misc/interfaces"
import renderer from "react-test-renderer"


jest.mock("../../_misc/misc", () => {
	return [{
		name: 'name',
		title: 'title',
		options: [{
			optionTitle: 'optionTitle',
			optionQuery: 'optionQuery',
		}],
	}, {
		name: 'name1',
		title: 'title1',
		options: [{
			optionTitle: 'optionTitle1',
			optionQuery: 'optionQuery1',
		}],
	}]
})
jest.mock("../../requests/movieRequests", () => {
	return {
		getSearchMovies: jest.fn(() => ([{
			_id: '0',
			title: 'Pesho',
			smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
			bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
			isSubbed: true,
			isDubbed: true,
			year: 1992,
			watchLink: 'a',
			engTitle: 'eng',
			genres: ['film'],
			trailerLink: 'a',
			comments: [{
				_id: 'a',
				user: {
					_id: '1',
					name: 'a',
					email: 'a',
					password: 'a',
					profilePic: 'a',
				}, comment: 'comment',
			}],
			actors: ['a', 'b'],
			director: 'a',
		}])),
	}
})

describe("---> Testing Movie Page", () => {
	const renderScreen = () => render(
		<BrowserRouter>
			<Movies/>
		</BrowserRouter>,
	)
	it("should add, but not replace search queries when they are with different name", async () => {
		renderScreen()

		const firstSelect = screen.getByRole("combobox", { name: 'name' })
		const secondSelect = screen.getByRole("combobox", { name: 'name1' })
		const firstOption = screen.getByText("optionTitle")
		const secondOption = screen.getByText("optionTitle1")

		await user.selectOptions(firstSelect, firstOption)
		await user.selectOptions(secondSelect, secondOption)
		const search = new URLSearchParams(global.location.search)

		expect(search.get('name')).toBe("optionQuery")
		expect(search.get('name1')).toBe('optionQuery1')
	})
	it("renders correctly", async () => {
		await act(async () => {
			await renderScreen()
		})

		const slides = screen.getAllByRole("img")

		expect(slides.length).toBe(1)
	})
})