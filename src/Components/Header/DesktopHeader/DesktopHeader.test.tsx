import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DesktopHeader from "./DesktopHeader"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import { runAuthLinksTests, runNavLinksTests } from "../_misc/abstractTests"


const loggedInUser: signedUserInfoInterface = {
	name: 'Pesho',
	email: 'pesho@abv.bg',
	password: 'sasho123',
}

const renderScreen = (loggedUser: signedUserInfoInterface | null) => {
	render(
		<BrowserRouter>
			<DesktopHeader loggedUser={ loggedUser }/>
		</BrowserRouter>,
	)
}

describe("---> testing search input", () => {
	it("search input should be present on the header", () => {
		renderScreen(loggedInUser)
		const searchBar = screen.getByRole('searchbox') as HTMLInputElement

		expect(searchBar).toBeInTheDocument()
	})
})

runAuthLinksTests({ renderScreen, loggedInUser })
runNavLinksTests(
	{
		navLinksTexts: ['movies', 'series', 'actors'],
		navLinksHrefs: ['/movies', '/series', '/actors'],
		container: <DesktopHeader loggedUser={ null }/>,
	},
)
