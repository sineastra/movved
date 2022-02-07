import { slideIntF } from "../interfaces"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import SingleSlide from "./SingleSlide"


const renderScreen = ({ image, link }: slideIntF) => render(
	<BrowserRouter>
		<SingleSlide image={ image } link={ link }/>
	</BrowserRouter>,
)

describe("---> Testing the single slide Components/LandingPageCarouser/SingleSlide", () => {
	const mockedSlideData: slideIntF = { image: 'a', link: 'b' }

	beforeEach(() => {
		renderScreen(mockedSlideData)
	})

	it("should show image element with a proper link", () => {
		const image = screen.getByRole('img')

		expect(image.getAttribute('src')).toBe('a')
	})

	it("should show image element with a proper link", () => {
		const image = screen.getByRole('link')

		expect(image.getAttribute('href')).toBe('/b')
	})
})

export {}