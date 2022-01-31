import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ReactElement } from "react"
import { signedUserInfoInterface, userInterface } from "../../../_misc/interfaces"


interface navLinksTestsIntF {
	navLinksTexts: string[],
	navLinksHrefs: string[],
	container: ReactElement
}

interface authLinksTestsIntF {
	renderScreen: (loggedUser: signedUserInfoInterface | null) => void,
	loggedInUser: signedUserInfoInterface,
}

const runNavLinksTests = ({ navLinksTexts, navLinksHrefs, container }: navLinksTestsIntF) => {
	describe("---> Testing navigation links", () => {
		const generateData = () => {
			const searchRegex = new RegExp(navLinksTexts.join("|"), "i")
			const { getAllByText } = render(
				<BrowserRouter>
					{ container }
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

			navLinks.forEach((x, i) => {
				expect(x.closest('a')).toHaveAttribute('href', navLinksHrefs[i])
			})
		})
	})
}

const runAuthLinksTests = ({ renderScreen, loggedInUser }: authLinksTestsIntF) => {
	describe("---> Testing auth links/section", () => {
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
	})
}

export { runNavLinksTests, runAuthLinksTests }