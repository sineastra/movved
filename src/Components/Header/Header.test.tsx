import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Header from "./Header"
import { Provider } from "react-redux"
import { configureStore, EnhancedStore } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import user from "@testing-library/user-event"
import usersReducer, { signInUser, signOutUser } from "../../_state/features/usersSlice"
import { signedUserInfoInterface } from "../../_misc/interfaces"


const store = configureStore({
	reducer: {
		users: usersReducer,
	},
})

const renderScreen = (store: EnhancedStore) => {
	render(
		<Provider store={ store }>
			<BrowserRouter>
				<Header/>
			</BrowserRouter>,
		</Provider>,
	)
}

const resizeToMobile = () => {
	global = Object.assign(global, { innerWidth: 768 })
	act(() => {
		global.dispatchEvent(new Event('resize'))
	})
}

const loggedInUser: signedUserInfoInterface = {
	name: "a",
	email: 'a@a.a',
	password: 'a',
}

// default testing width of jest-dom is 1024 pixels, so it is not needed to be resized for desktop,
// but for testing the edge point of the design - 769 px this method will exist...
const resizeToMinDesktopWidth = () => {
	global = Object.assign(global, { innerWidth: 769 })
	act(() => {
		global.dispatchEvent(new Event('resize'))
	})
}

const loggingAuthLinksTesting = (screenType: string) => {
	const isMobile = screenType === 'mobile'
	describe(`---> ${ isMobile ? 'MOBILE' : 'DESKTOP' } ---> Testing whether sign in and sign out dispatches change the user auth section`, () => {
		afterEach(() => {
			act(() => {
				store.dispatch(signOutUser(null))
			})
		})

		it("should change from SIGN IN to NAME and PICTURE on completed sign in dispatch", () => {
			if (isMobile) {
				resizeToMobile()
			}
			renderScreen(store)
			const signInLink = screen.getByText(/sign in/i)

			expect(signInLink).toBeVisible()

			act(() => {
				store.dispatch(signInUser(loggedInUser))
			})

			const profileImg = screen.getByAltText('default-profile')
			const userName = screen.getByText(loggedInUser.name)

			expect(signInLink).not.toBeInTheDocument()
			expect(profileImg).toBeVisible()
			expect(userName).toBeVisible()
		})
		it("should change from  NAME and PICTURE to SIGN IN on completed sign out dispatch", () => {
			if (isMobile) {
				resizeToMobile()
			}
			renderScreen(store)
			act(() => {
				store.dispatch(signInUser(loggedInUser))
			})

			const profileImg = screen.getByAltText('default-profile')
			const userName = screen.getByText(loggedInUser.name)

			expect(profileImg).toBeVisible()
			expect(userName).toBeVisible()

			act(() => {
				store.dispatch(signOutUser(null))
			})

			const signInLink = screen.getByText(/sign in/i)

			expect(signInLink).toBeVisible()
		})
	})
}

describe("---> Testing showing of proper header on mobile and on desktop views", () => {
	beforeEach(() => {
		renderScreen(store)
	})

	it("should show only mobile header at mobile width", () => {
		resizeToMobile()

		const desktopHeader = screen.queryByTestId('desktop-header')
		const mobileHeader = screen.getByTestId('mobile-header')

		expect(mobileHeader).toBeInTheDocument()
		expect(desktopHeader).toBeNull()
	})
	it("should show only desktop header at desktop width", () => {
		resizeToMinDesktopWidth()

		const desktopHeader = screen.getByTestId('desktop-header')
		const mobileHeader = screen.queryByTestId('mobile-header')

		expect(mobileHeader).toBeNull()
		expect(desktopHeader).toBeInTheDocument()
	})
})

describe("--> Testing showing of the aside nav on pressing bars icon on mobile view", () => {
	beforeEach(() => {
		renderScreen(store)
		resizeToMobile()
	})

	it("should show aside menu on pressing bars", async () => {
		const barsElement = screen.getByTitle(/open side menu/i)
		const asideNav = screen.getByRole('complementary')

		await user.click(barsElement)

		expect(asideNav).toBeVisible()
		expect(asideNav).not.toHaveClass('hidden')
	})

	it("should hide aside menu when pressing again on the button", async () => {
		const barsElement = screen.getByTitle(/open side menu/i)
		const asideNav = screen.getByRole('complementary')

		await user.click(barsElement)
		await user.click(barsElement)

		expect(asideNav).toHaveClass('hidden')
	})
})

loggingAuthLinksTesting('mobile')
loggingAuthLinksTesting('desktop')