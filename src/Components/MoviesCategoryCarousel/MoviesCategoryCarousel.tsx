import styles from "./MoviesCategoryCarousel.module.scss"
import { movie } from "../../_misc/interfaces"
import Carousel from 'nuka-carousel'


interface props {
	movies: movie[]
}

const MoviesCategoryCarousel = ({ movies }: props) => {
	return (
		<div className={ styles.carouselWrapper }>
			<Carousel
				slideWidth={ '200px' }
				cellSpacing={ 20 }
				height={ '300px' }
				width={ '90%' }
				className={ styles.carousel }
				defaultControlsConfig={
					{
						nextButtonText: ">",
						nextButtonStyle: { marginRight: '5px' },
						prevButtonText: "<",
						prevButtonStyle: { marginLeft: '5px' },
					}
				}
				slidesToScroll={ "auto" }
			>
				{ movies.map(x => <img className={ styles.image } src={ x.poster } alt=""/>) }
			</Carousel>
		</div>
	)
}

export default MoviesCategoryCarousel