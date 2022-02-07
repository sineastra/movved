import styles from "./LandingPageCarousel.module.scss"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { slideIntF } from "./interfaces"
import SingleSlide from "./SingleSlide/SingleSlide"


const LandingPageCarousel = () => {
	const slides: slideIntF[] = [
		{ image: 'a', link: 'b' },
		{ image: 'a', link: 'b' },
		{ image: 'a', link: 'b' },
	]

	return (
		<div>
			<Carousel>
				{ slides.map(x => <SingleSlide image={ x.image } link={ x.link }/>) }
			</Carousel>
		</div>
	)
}

export default LandingPageCarousel