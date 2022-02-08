import styles from "./Footer.module.scss"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IconContext } from "react-icons"


const Footer = () => {

	return (
		<footer className={ styles.footer }>
			<section className={ styles.socialSection }>
				<h3>Последвайте ни: </h3>
				<IconContext.Provider value={ { className: styles.socialIcons } }>
					<FaFacebook/>
					<FaInstagram/>
					<FaTwitter/>
					<FaLinkedinIn/>
				</IconContext.Provider>
			</section>
			<section>
				<h3>Избрани жанрове</h3>
				<ul>
					<li>Екшън Филми</li>
					<li>ТВ-Сериали</li>
					<li>Анимации</li>
					<li>За Семейството</li>
					<li>Страшни Филми</li>
					<li>Документални</li>
				</ul>
			</section>
			<section>
				<h3>Още раздели</h3>
				<ul>
					<li>Всички филми</li>
					<li>Случаен филм</li>
					<li>Популярни филми</li>
					<li>Филми с БГ аудио</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</section>
			<section>
				<h3>За нас</h3>
				<ul>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Twitter</li>
					<li>LinkedIn</li>
					<li>Zamunda</li>
					<li>Щепсели (Контакти)</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer