import Pagination from "react-js-pagination"
import styles from "./StyledPagination.module.scss"


interface propsIntF {
	activePage: number,
	itemsCountPerPage: number,
	totalItemsCount: number,
	pageRangeDisplayed: number,
	onChange: (n: number) => void
}
const StyledPagination = ({
	                          activePage,
	                          itemsCountPerPage,
	                          totalItemsCount,
	                          pageRangeDisplayed,
	                          onChange,
                          }: propsIntF) => {

	return (
		<Pagination
			activePage={ activePage || 1 }
			itemsCountPerPage={ itemsCountPerPage }
			totalItemsCount={ totalItemsCount }
			pageRangeDisplayed={ pageRangeDisplayed }
			onChange={ onChange }
			innerClass={ styles.ulClass }
			linkClass={ styles.linkClass }
			itemClass={ styles.itemClass }
			activeClass={ styles.activeLi }
		/>
	)
}

export default StyledPagination