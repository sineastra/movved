import { runAuthSubmenuTests } from "../_misc/abstractTests"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import UserSubmenu from "./UserSubmenu"

const loggedInUser: signedUserInfoInterface = {
	name: 'Pesho',
	email: 'pesho@abv.bg',
	password: 'sasho123',
	profilePic: null,
}

const renderScreen = () =>
	render(
		<BrowserRouter>
			<UserSubmenu/>
		</BrowserRouter>,
	)


describe("---> Testing the auth submenu", () => {
	runAuthSubmenuTests({
		navLinksTexts: ['profile', 'my collection', 'settings', 'logout'],
		navLinksHrefs: ['/profile', '/my-collection', '/settings'],
		renderScreen,
		loggedInUser,
	})
})