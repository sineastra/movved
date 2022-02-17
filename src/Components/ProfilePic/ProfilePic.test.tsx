import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import ProfilePic from "./ProfilePic"
import { signedUserInfoInterface } from "../../_misc/interfaces"


const renderScreen = (user: signedUserInfoInterface | null) =>
	render(
		<BrowserRouter>
			<ProfilePic user={ user }/>
		</BrowserRouter>,
	)

const getLoggedUser = (profilePic: string | null): signedUserInfoInterface | null => {
	return {
		_id: '1',
		name: 'a',
		email: 'a@a.a',
		password: 'a',
		profilePic: profilePic,
	}
}

describe("Testing Profile Pic Picker Component", () => {
	it("should pick default img on user with no profile img", () => {
		renderScreen(getLoggedUser(null))
		const renderResult = screen.getByRole('profile-img')

		expect(renderResult.tagName.toLocaleLowerCase()).toBe('svg')
	})
	it("should pick default img on no logged in user", () => {
		renderScreen(null)
		const renderResult = screen.getByRole('profile-img')

		expect(renderResult.tagName.toLocaleLowerCase()).toBe('svg')
	})
	it("should pick user img on logged in user", () => {
		renderScreen(getLoggedUser('a'))
		const renderResult = screen.getByRole('profile-img')

		expect(renderResult.tagName.toLocaleLowerCase()).toBe('img')
	})
})