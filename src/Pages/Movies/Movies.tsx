import FilterSelect from "../../Components/FIlterSelect/FilterSelect"
import filtersData from "../../_misc/misc"
import styles from "./Movies.module.scss"


const Movies = () => {

	return (
		<div className={ styles.wrapper }>
			{ filtersData.map(x =>
				<FilterSelect
					name={ x.name }
					options={ x.options }
					title={ x.title }
					key={ x.name }
					ariaLabel={ x.name }
				/>) }
		</div>
	)
}

export default Movies