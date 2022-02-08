import styles from "./MoviesCategoryCarousel.module.scss"
import { movie } from "../../_misc/interfaces"
import Carousel from 'nuka-carousel'
import SingleGridMovie from "../SingleGridMovie/SingleGridMovie"


interface props {
	movies: movie[]
}

const MoviesCategoryCarousel = ({ movies }: props) => {
	return (
		<div className={ styles.carouselWrapper }>
			<Carousel
				slideWidth={ '200px' }
				cellSpacing={ 20 }
				height={ '370px' }
				width={ '90%' }
				className={ styles.carousel }
				defaultControlsConfig={
					{
						containerClassName: styles.container,
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
				{ movies.map(x => <SingleGridMovie className={ styles.slide } movie={ x } key={ x._id }/>) }
			</Carousel>
		</div>
	)
}

export default MoviesCategoryCarousel