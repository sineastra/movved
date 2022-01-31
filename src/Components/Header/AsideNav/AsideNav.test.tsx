import AsideNav from "./AsideNav"
import { runAuthLinksTests, runNavLinksTests } from "../_misc/abstractTests"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"


const loggedInUser: signedUserInfoInterface = {
	name: 'Pesho',
	email: 'pesho@abv.bg',
	password: 'sasho123',
}

const renderScreen = (loggedUser: signedUserInfoInterface | null) => {
	render(
		<BrowserRouter>
			<AsideNav loggedUser={ loggedUser }/>
		</BrowserRouter>,
	)
}

runAuthLinksTests({ renderScreen, loggedInUser })
runNavLinksTests(
	{
		navLinksTexts: ['movies', 'series', 'actors'],
		navLinksHrefs: ['/movies', '/series', '/actors'],
		container: <AsideNav loggedUser={ null }/>,
	},
)