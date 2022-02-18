import useBreadcrumbs from "use-react-router-breadcrumbs"
import breadcrumbsRoutes from "../../_misc/breadcrumbsRoutes"
import { Link } from "react-router-dom"
import styles from "./Breadcrumbs.module.scss"


const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs(breadcrumbsRoutes)
	const isNotLast = (i: number) => i !== breadcrumbs.length - 1

	return (
		<div className={ styles.wrapper }>
			{ breadcrumbs.map(({ match, breadcrumb }, index) => (
				isNotLast(index)
					? <>
						<Link to={ match.pathname }>
							{ breadcrumb }
						</Link><span> / </span>
					</>
					: <span className={ styles.lastSpan }>{ breadcrumb }</span>
			)) }
		</div>
	)
}

export default Breadcrumbs