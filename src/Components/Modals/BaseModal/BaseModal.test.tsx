import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import BaseModal from "./BaseModal"
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"


const setShowModal = jest.fn()

describe("--> Testing BaseModal", () => {
	const renderScreen = () =>
		render(
			<BrowserRouter>
				<BaseModal heading="a" showModal={ true } setShowModal={ setShowModal } icon={ <div></div> }>
					<div>a</div>
				</BaseModal>
			</BrowserRouter>,
		)
	it("renders correctly (snapshot test)", () => {
		const tree = renderer.create(
			<BrowserRouter>
				<BaseModal heading="a" showModal={ true } setShowModal={ () => {} } icon={ <div></div> }>
					<div>a</div>
				</BaseModal>
			</BrowserRouter>,
		).toJSON()

		expect(tree).toMatchSnapshot()
	})
	it("correctly calls close modal callback on press on backdrop", async () => {
		renderScreen()
		const backdrop = screen.getByRole('dialog')

		await user.click(backdrop)

		expect(setShowModal).toHaveBeenCalledTimes(1)
	})
	it("does not call close modal callback on pressing the dialog window", async () => {
		renderScreen()
		const dialogWindow = screen.getByTitle(/dialog window/i)

		await user.click(dialogWindow)

		expect(setShowModal).toHaveBeenCalledTimes(0)
	})
	it("does call close modal callback when pressing the close icon", async () => {
		renderScreen()
		const closeIcon = screen.getByRole("graphics-document", { name: 'close-modal' })

		await user.click(closeIcon)

		expect(setShowModal).toHaveBeenCalledTimes(1)
	})
})