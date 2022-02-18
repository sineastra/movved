import styles from "./FilterSelect.module.scss"
import { useLocation, useNavigate } from "react-router-dom"
import { BaseSyntheticEvent } from "react"
import { filterIntF } from "../../_misc/interfaces"


interface propsIntF extends filterIntF {
	ariaLabel?: string
}
const FilterSelect = ({ name, title, options, ariaLabel = '' }: propsIntF) => {
	const navigate = useNavigate()
	const queries = useLocation()

	// TODO: extract query parser if needed.
	const onChange = (e: BaseSyntheticEvent) => {
		const query = e.target.value
		const urlSearchParams = new URLSearchParams(queries.search)

		if (query) {
			urlSearchParams.set(name, query)
		} else if (name) {
			urlSearchParams.delete(name)
		}

		const areThereQueries = Array.from(urlSearchParams.entries()).length > 0

		navigate({
			search: areThereQueries ? `?${ urlSearchParams.toString() }` : '',
		})
	}

	return (
		<select name={ name } defaultValue={ title } className={ styles.select } onChange={ onChange }
		        aria-label={ ariaLabel }>
			<option value={ title } disabled>-- { title } --</option>
			<option value="">All</option>
			{ options.map(x => (
				<option value={ x.optionQuery } key={ x.optionTitle }>{ x.optionTitle }</option>
			)) }
		</select>
	)
}

export default FilterSelect