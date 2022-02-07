import { slideIntF } from "./_interfaces"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import LandingPageCarousel from "./LandingPageCarousel"


describe("---> Testing the landing page carousel", () => {
	const mockedSlidesData: slideIntF[] = [
		{ image: 'a', link: 'a' },
		{ image: 'a', link: 'a' },
	]

	const renderScreen = () =>
		render(
			<BrowserRouter>
				<LandingPageCarousel slides={ mockedSlidesData }/>
			</BrowserRouter>,
		)

	it("should display proper slides number", () => {
		renderScreen()

		const slideImages = screen.getAllByRole('img')
		const slideLinks = screen.getAllByRole('link')

		// The Property Infinite Scrolling on the Carousel doubles the number of the slides.
		// So for this test they must be 2 (mockedSlidesData length), but doubled === 4

		expect(slideImages.length).toBe(4)
		expect(slideLinks.length).toBe(4)
	})
})