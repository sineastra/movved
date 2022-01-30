import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DesktopHeader from "./DesktopHeader"
import { userInterface } from "../../../_misc/interfaces"


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

describe("---> Testing navigation links", () => {
	const generateData = () => {
		const navLinksTextsTemplate = ['movies', 'series', 'actors']
		const searchRegex = new RegExp(navLinksTextsTemplate.join("|"), "i")
		const { getAllByText } = render(
			<BrowserRouter>
				<DesktopHeader loggedUser={ null }/>
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
		const navLinksHrefsTemplate = ['/movies', '/series', '/actors']

		navLinks.forEach((x, i) => {
			expect(x.closest('a')).toHaveAttribute('href', navLinksHrefsTemplate[i])
		})
	})
})