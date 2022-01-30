import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DesktopHeader from "./DesktopHeader"
import { userInterface } from "../../../_misc/interfaces"
import runNavLinksTests from "../_misc/abstractTests"


describe("---> Testing auth links/section", () => {
	const { loggedUser }: userInterface = {
		loggedUser: {
			name: 'Pesho',
			email: 'pesho@abv.bg',
			password: 'sasho123',
		},
	}

	it('should SHOW sign in link when user is SIGNED OUT', () => {
		render(
			<BrowserRouter>
				<DesktopHeader loggedUser={ null }/>
			</BrowserRouter>,
		)
		const signInLink = screen.getByText(/sign in/i, { exact: true })

		expect(signInLink).toBeVisible()
	})

	it('should HIDE sign in link when user is SIGNED IN ', () => {
		render(
			<BrowserRouter>
				<DesktopHeader loggedUser={ loggedUser }/>
			</BrowserRouter>,
		)
		const signInLink = screen.queryByText(/sign in/i)

		expect(signInLink).toBeNull()
	})

	it("should show IMAGE and NAME when the user is SIGNED IN", () => {
		render(
			<BrowserRouter>
				<DesktopHeader loggedUser={ loggedUser }/>
			</BrowserRouter>,
		)
		const profileImg = screen.getByAltText('default-profile')
		const userName = screen.getByText(loggedUser.name)

		expect(profileImg).toBeInTheDocument()
		expect(userName).toBeInTheDocument()
	})
})

runNavLinksTests(
	{
		navLinksTexts: ['movies', 'series', 'actors'],
		navLinksHrefs: ['/movies', '/series', '/actors'],
		container: <DesktopHeader loggedUser={ null }/>,
	},
)
