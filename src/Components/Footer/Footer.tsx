import styles from "./Footer.module.scss"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Link } from "react-router-dom"
import MainLogoSVG from "../_SVGs/MainLogoSVG"


const Footer = () => {

	return (
		<footer className={ styles.footer }>
			<section className={ styles.socialSection }>
				<h3>Последвайте ни: </h3>
				<IconContext.Provider value={ { className: styles.socialIcons } }>
					<a href="https://facebook.com"><FaFacebook/></a>
					<a href="https://instagram.com"><FaInstagram/></a>
					<a href="https://twitter.com"><FaTwitter/></a>
					<a href="https://linkedin.com"><FaLinkedinIn/></a>
				</IconContext.Provider>
			</section>
			<section>
				<h3>Избрани жанрове</h3>
				<ul>
					<li>
						<Link to="/movies/action">
							Екшън Филми
						</Link>
					</li>
					<li>
						<Link to="/series">
							Сериали
						</Link>
					</li>
					<li>
						<Link to="/movies/animation">
							Анимации
						</Link>
					</li>
					<li>
						<Link to="/movies/family">
							За Семейството
						</Link>
					</li>
					<li>
						<Link to="/movies/horror">
							Страшни Филми
						</Link>
					</li>
					<li>
						<Link to="/movies/documentary">
							Документални
						</Link>
					</li>
				</ul>
			</section>
			<section>
				<h3>Още раздели</h3>
				<ul>
					<li>
						<Link to="/movies">
							Всички филми
						</Link>
					</li>
					<li>
						<Link to={ "/movies/random" }>
							Случаен филм
						</Link>
					</li>
					<li>
						<Link to={ "/movies/popular" }>
							Популярни филми
						</Link>
					</li>
					<li>
						<Link to={ "/movies/bg-audio" }>
							Филми с БГ аудио
						</Link>
					</li>
					<li>
						<Link to="/">
							Lorem ipsum dolor sit amet.
						</Link>
					</li>
					<li>
						<Link to="/">
							Lorem ipsum dolor sit amet.
						</Link>
					</li>
				</ul>
			</section>
			<section>
				<h3>За нас</h3>
				<ul>
					<li>
						<a href="https://facebook.com">Facebook</a>
					</li>
					<li>
						<a href="https://instagram.com">Instagram</a>
					</li>
					<li>
						<a href="https://twitter.com">Twitter</a>
					</li>
					<li>
						<a href="https://linkedin.com">LinkedIn</a>
					</li>
					<li>
						<a href="https://zamunda.net">Zamunda</a>
					</li>
					<li>
						<a href="https://apogee99.com/index.php?main_page=index&cPath=6_324">Щепсели (Контакти)</a>
					</li>
				</ul>
			</section>
			<section className={ styles.mainLogoSection }>
				<div className={ styles.mainLogoWrapper }>
					<Link to="/">
						<MainLogoSVG/>
					</Link>
				</div>
				<span>
				Този сайт не съхранява никакви физически видео файлове на сървъра си. Всички видеа са прикачени от други
				уебсайтове, с които не сме обвързани.
				</span>
			</section>
		</footer>
	)
}

export default Footer