import LandingPageCarousel from "../../Components/LandingPageCarousel/LandingPageCarousel"
import image from "../../assets/tree-736885__480.jpeg"
import { slideIntF } from "../../Components/LandingPageCarousel/_interfaces"


const mockedData: slideIntF[] = [
	{ image, link: '#' },
	{ image, link: '#' },
	{ image, link: '#' },
]

const LandingPage = () => {
	return (
		<LandingPageCarousel slides={ mockedData }/>
	)
}

export default LandingPage