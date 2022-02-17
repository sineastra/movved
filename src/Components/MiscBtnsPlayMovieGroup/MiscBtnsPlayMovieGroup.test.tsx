import { act, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import MiscBtnsPlayMovieGroup from "./MiscBtnsPlayMovieGroup"
import user from "@testing-library/user-event"
import { configureStore } from "@reduxjs/toolkit"
import UserReducer, { signInUser } from "../../_state/features/usersSlice"
import { movieCommentIntF, signedUserInfoInterface } from "../../_misc/interfaces"
import movieRequests from "../../requests/movieRequests"


const mockedStore = configureStore({
	reducer: {
		users: UserReducer,
	},
})

const mockedMovie = {
	_id: '1',
	title: 'a',
	smallPoster: '',
	bigPoster: 'a',
	isSubbed: true,
	isDubbed: true,
	year: 1,
	watchLink: 'a',
	engTitle: 'a',
	genres: ['a'],
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
}
const mockedUser: signedUserInfoInterface = {
	_id: '2',
	name: 'b',
	email: 'b',
	password: 'b',
	profilePic: 'b',
}

jest.mock("../../requests/movieRequests", () => {
	return {
		addComment: jest.fn((id: string, newComment: movieCommentIntF) => [{
			_id: 'a',
			user: {
				_id: '1',
				name: 'a',
				email: 'a',
				password: 'a',
				profilePic: 'a',
			}, comment: 'comment',
		}, { _id: 'b', user: mockedUser, comment: newComment }]),
		sendReport: jest.fn()
	}
})

const renderScreen = () => render(
	<Provider store={ mockedStore }>
		<BrowserRouter>
			<MiscBtnsPlayMovieGroup movie={ mockedMovie }/>
		</BrowserRouter>
	</Provider>,
)

describe("---> testing MiscBtnsPlayMovieGroup modals on logged OUT user", () => {
	it("should render correctly watch trailer modal", async () => {
		renderScreen()

		const btn = screen.getByTitle(/watch trailer/i)
		let modal = screen.queryAllByRole('dialog')
		expect(modal[0]).toHaveClass('hiddenBackdrop')

		await user.click(btn)

		modal = screen.getAllByRole('dialog')
		const modalText = screen.getByText('Trailer')

		expect(modal[0]).not.toHaveClass('hiddenBackdrop')
		expect(modalText).toBeInTheDocument()
	})
	it("should render correctly comments", async () => {
		renderScreen()

		const btn = screen.getByTitle(/add comment/i)
		let modal = screen.queryAllByRole('dialog')
		expect(modal[1]).toHaveClass('hiddenBackdrop')

		await user.click(btn)

		modal = screen.getAllByRole('dialog')
		const modalText = screen.getByText(/comments/i)
		const textarea = screen.queryByRole("textbox", { name: 'add movie comment' })
		const loggedOffMsg = screen.getByText(/log in to add a comment/i)

		expect(modal[1]).not.toHaveClass('hiddenBackdrop')
		expect(modalText).toBeInTheDocument()
		expect(textarea).toBeNull()
		expect(loggedOffMsg).toBeInTheDocument()
	})
	it("should render correct comments in the comments modal window", () => {
		renderScreen()

		const comments = screen.getAllByRole('article')

		expect(comments.length).toBe(1)
		expect(comments[0]).toHaveTextContent(mockedMovie.comments[0].user.name)
		expect(comments[0]).toHaveTextContent(mockedMovie.comments[0].comment)
	})
	it("should render correctly report modal", async () => {
		renderScreen()

		const btn = screen.getByTitle(/report/i)
		let modal = screen.queryAllByRole('dialog')
		expect(modal[2]).toHaveClass('hiddenBackdrop')

		await user.click(btn)

		modal = screen.getAllByRole('dialog')
		const modalHeader = screen.getByText(/report a problem/i)
		const modalText = screen.getByText(/this feature is accessible only to logged in users/i)
		const form = screen.queryByRole('form', { name: 'report problem role' })

		expect(modal[2]).not.toHaveClass('hiddenBackdrop')
		expect(modalHeader).toBeInTheDocument()
		expect(modalText).toBeInTheDocument()
		expect(form).toBeNull()
	})
})

describe("---> testing MiscBtnsPlayMovieGroup modals on logged IN user", () => {
	beforeAll(() => {
		mockedStore.dispatch(signInUser(mockedUser))
	})

	it("should render correctly comments modal", async () => {
		renderScreen()
		const btn = screen.getByTitle(/add comment/i)

		await user.click(btn)

		const modalText = screen.getByText(/comments/i)
		const textarea = screen.getByRole("textbox", { name: 'add movie comment' })
		const loggedOffMsg = screen.queryByText(/log in to add a comment/i)

		expect(modalText).toBeInTheDocument()
		expect(textarea).toBeInTheDocument()
		expect(loggedOffMsg).toBeNull()
	})
	it("should correctly add a comment when user submits form", async () => {
		await act(async () => {
			await renderScreen()
		})

		const btn = screen.getByTitle(/add comment/i)
		await user.click(btn)

		const textarea = screen.getByRole("textbox", { name: 'add movie comment' })
		const submitBtn = screen.getByRole("button", { name: "submit comment" })
		await user.type(textarea, 'test comment')

		await act(async () => {
			await user.click(submitBtn)
		})
		const comments = screen.getAllByRole('article')

		expect(comments.length).toBe(2)
		expect(comments[1]).toHaveTextContent('test comment')
		expect(comments[1]).toHaveTextContent(mockedUser.name)
		expect(movieRequests.addComment).toHaveBeenCalledTimes(1)
	})
	it("should render correctly report modal", async () => {
		renderScreen()

		const btn = screen.getByTitle(/report/i)
		await user.click(btn)

		const modalHeader = screen.getByText(/report a problem/i)
		const modalText = screen.queryByText(/this feature is accessible only to logged in users/i)
		const form = screen.queryByRole('form', { name: 'report problem form' })

		expect(modalHeader).toBeInTheDocument()
		expect(modalText).toBeNull()
		expect(form).toBeInTheDocument()
	})
	it("correctly closes modal on submit report", async () => {
		renderScreen()

		const btn = screen.getByTitle(/report/i)
		await user.click(btn)
		const backdrops = screen.getAllByRole('dialog')

		expect(backdrops[2]).not.toHaveClass('hiddenBackdrop')

		const submitBtn = screen.getByText(/send the report/i)

		await user.click(submitBtn)

		expect(backdrops[2]).toHaveClass('hiddenBackdrop')
		expect(movieRequests.sendReport).toHaveBeenCalledTimes(1)
	})
})

export {}