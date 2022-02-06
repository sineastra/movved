import { render, RenderResult, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DesktopHeader from "./DesktopHeader"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import { runAuthLinksTests, runAuthMenuToggleTest, runAuthSubmenuTests, runNavLinksTests } from "../_misc/abstractTests"


const loggedInUser: signedUserInfoInterface = {
	name: 'a',
	email: 'a@a.a',
	password: 'a',
	profilePic: null,
}
const renderScreen = (loggedUser: signedUserInfoInterface | null): RenderResult =>
	render(
		<BrowserRouter>
			<DesktopHeader loggedUser={ loggedUser }/>
		</BrowserRouter>,
	)

describe("---> DESKTOP ---> Testing search input", () => {
	it("search input should be present on the header", () => {
		renderScreen(loggedInUser)
		const searchBar = screen.getByRole('searchbox') as HTMLInputElement

		expect(searchBar).toBeInTheDocument()
	})
})

describe("---> DESKTOP ---> Testing the navigation NavLinks", () => {
	runNavLinksTests(
		{
			navLinksTexts: ['movies', 'series', 'actors'],
			navLinksHrefs: ['/movies', '/series', '/actors'],
			renderScreen,
			loggedInUser: null,
		},
	)
})

describe("---> DESKTOP ---> Testing the auth links section (login, user profile interaction, etc...", () => {
	runAuthLinksTests({ renderScreen, loggedInUser })
})

describe("---> DESKTOP ---> Testing the toggle of the auth submenu", () => {
	runAuthMenuToggleTest({ renderScreen, loggedInUser })
})
