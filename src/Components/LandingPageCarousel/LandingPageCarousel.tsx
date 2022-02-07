import styles from "./LandingPageCarousel.module.scss"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { slideIntF } from "./_interfaces"
import SingleSlide from "./SingleSlide/SingleSlide"


interface propsIntF {
	slides: slideIntF[]
}

const LandingPageCarousel = ({ slides }: propsIntF) => {

	return (
		<div >
			<Carousel
				autoPlay={ true }
				interval={ 4000 }
				infiniteLoop={ true }
				labels={ { leftArrow: 'Previous Movie', rightArrow: 'Next Movie', item: 'Watch' } }
				showThumbs={ false }
				dynamicHeight={ true }
			>
				{ slides.map(x => <SingleSlide image={ x.image } link={ x.link } key={ x.image }/>) }
			</Carousel>
		</div>
	)
}

export default LandingPageCarousel