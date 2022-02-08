import styles from "./MoviesCategoryCarousel.module.scss"
import { movie } from "../../_misc/interfaces"
import Carousel from 'nuka-carousel'
import SingleSlide from "./SingleSlide/SingleSlide"


interface props {
	movies: movie[]
}

const MoviesCategoryCarousel = ({ movies }: props) => {
	return (
		<div className={ styles.carouselWrapper }>
			<Carousel
				slideWidth={ '200px' }
				cellSpacing={ 10 }
				height={ '370px' }
				width={ '90%' }
				className={ styles.carousel }
				defaultControlsConfig={
					{
						nextButtonText: ">",
						nextButtonStyle: { marginRight: '5px' },
						prevButtonText: "<",
						prevButtonStyle: { marginLeft: '5px' },
						pagingDotsStyle: { display: "none" },
					}
				}
				easing={ "easeBackOut" }
				slidesToScroll={ "auto" }

			>
				{ movies.map(x => <SingleSlide className={ styles.slide } movie={ x } key={ x._id }/>) }
			</Carousel>
		</div>
	)
}

export default MoviesCategoryCarousel