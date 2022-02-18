import styles from "./MoviesCategoryCarousel.module.scss"
import { movieInterface } from "../../_misc/interfaces"
import Carousel from 'nuka-carousel'
import SingleGridMovie from "../SingleGridMovie/SingleGridMovie"


interface props {
	movies: movieInterface[]
}

const MoviesCategoryCarousel = ({ movies }: props) => {
	return (
		<div className={ styles.carouselWrapper }>
			<Carousel
				slideWidth={ '200px' }
				cellSpacing={ 20 }
				height={ '370px' }
				width={ '100vw' }
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
				frameOverflow={ "initial" }

			>
				{ movies.map(x => (
					<div className={ styles.slideWrapper }>
						<SingleGridMovie className={ styles.slide } movie={ x } key={ x._id }/>
					</div>
				)) }
			</Carousel>
		</div>
	)
}

export default MoviesCategoryCarousel