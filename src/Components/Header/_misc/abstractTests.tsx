import { act, render, RenderResult, screen } from "@testing-library/react"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import user from "@testing-library/user-event"

// These tests are used in both DesktopHeader.test.tsx and in AsideNav.test.tsx, because they test the navigation
// and the authorization results, which are the same in the aside navigation and in the desktop header
// which holds the navigation for the desktop part. I just couldn't copy and paste the tests. I felt sharp pain inside.

interface navLinksTestsIntF {
	navLinksTexts: string[],
	navLinksHrefs: string[],
	renderScreen: (loggedUser: signedUserInfoInterface | null) => RenderResult,
	loggedInUser: signedUserInfoInterface | null,
}

const runNavLinksTests = ({ navLinksTexts, navLinksHrefs, renderScreen, loggedInUser }: navLinksTestsIntF) => {
	const searchRegex = new RegExp(navLinksTexts.join("|"), "i")

	it("should show proper navigation links texts", () => {
		renderScreen(loggedInUser)
		const navLinks = screen.getAllByText(searchRegex)

		expect(navLinks.length).toBe(navLinks.length)
	})

	it("nav links should lead to proper pages", () => {
		renderScreen(loggedInUser)
		const navLinks = screen.getAllByText(searchRegex)

		navLinks.forEach((x, i) => {
			expect(x.closest('a')).toHaveAttribute('href', navLinksHrefs[i])
		})
	})
}

interface authLinksTestsIntF {
	renderScreen: (loggedUser: signedUserInfoInterface | null) => RenderResult,
	loggedInUser: signedUserInfoInterface,
}
const runAuthLinksTests = ({ renderScreen, loggedInUser }: authLinksTestsIntF) => {
	it('should SHOW sign in link when user is SIGNED OUT', () => {
		renderScreen(null)
		const signInLink = screen.getByText(/sign in/i)

		expect(signInLink).toBeVisible()
	})

	it('should HIDE sign in link when user is SIGNED IN ', () => {
		renderScreen(loggedInUser)
		const signInLink = screen.queryByText(/sign in/i)

		expect(signInLink).toBeNull()
	})

	it("should show IMAGE and NAME when the user is SIGNED IN", () => {
		renderScreen(loggedInUser)
		const profileImg = screen.getByAltText('default-profile')
		const userName = screen.getByText(loggedInUser.name)

		expect(profileImg).toBeInTheDocument()
		expect(profileImg).toBeVisible()

		expect(userName).toBeInTheDocument()
		expect(userName).toBeVisible()
	})
}

interface authMenuToggleTestIntF {
	renderScreen: (loggedUser: signedUserInfoInterface) => RenderResult,
	loggedInUser: signedUserInfoInterface,
}
const runAuthMenuToggleTest = ({ renderScreen, loggedInUser }: authMenuToggleTestIntF) => {
	it("should correctly toggle submenu on pressing the submenu toggle element", async () => {
		renderScreen(loggedInUser)
		const submenuToggleElement = screen.getByRole("submenu-toggle")

		await act(async () => {
			await user.click(submenuToggleElement)
		})

		const submenu = screen.getByRole("auth-submenu")
		expect(submenu).toBeInTheDocument()

		await act(async () => {
			await user.click(submenuToggleElement)
		})

		expect(submenu).not.toBeInTheDocument()
	})
}

interface authSubmenuTestsIntF {
	navLinksTexts: string[],
	navLinksHrefs: string[],
	renderScreen: (loggedUser: signedUserInfoInterface | null) => RenderResult,
	loggedInUser: signedUserInfoInterface | null,
}
const runAuthSubmenuTests = ({ navLinksTexts, navLinksHrefs, renderScreen, loggedInUser }: authSubmenuTestsIntF) => {
	const searchRegex = new RegExp(navLinksTexts.join("|"), "i")

	it("should show proper navigation links texts", async () => {
		renderScreen(loggedInUser)

		const navLinks = screen.getAllByText(searchRegex)

		expect(navLinks.length).toBe(navLinks.length)
	})

	it("nav links should lead to proper pages", async () => {
		renderScreen(loggedInUser)
		const navLinks = screen.getAllByText(searchRegex)

		// The logout element is not really a link but rather a div with an onClick.
		navLinks.pop()

		navLinks.forEach((x, i) => {
			expect(x.closest('a')).toHaveAttribute('href', navLinksHrefs[i])
		})
	})
}

export { runNavLinksTests, runAuthLinksTests, runAuthSubmenuTests, runAuthMenuToggleTest }