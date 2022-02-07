import { slideIntF } from "../interfaces"
import { Link } from "react-router-dom"
import styles from "./SingleSlide.module.scss"


const SingleSlide = ({ image, link }: slideIntF) => {
	return (
		<div className={ styles.wrapper }>
			<img src={ image } alt="slide"/>
			<Link to={ link }/>
		</div>
	)
}

export default SingleSlide