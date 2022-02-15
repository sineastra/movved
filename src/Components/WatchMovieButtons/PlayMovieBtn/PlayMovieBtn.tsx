import styles from "./PlayMovieBtn.module.scss"
import { FaPlayCircle } from "react-icons/fa"
import { IconContext } from "react-icons"


const PlayMovieBtn = () => {

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.btnWrapper }>
				<button className={ styles.btn }>
					<IconContext.Provider value={ { className: styles.icon } }>
						<FaPlayCircle/>
					</IconContext.Provider>
					<span>Гледай</span>
				</button>
			</div>
		</div>

	)
}

export default PlayMovieBtn