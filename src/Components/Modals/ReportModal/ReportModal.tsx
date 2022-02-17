import BaseModal from "../BaseModal/BaseModal"
import { movieInterface } from "../../../_misc/interfaces"
import { BsFlag } from "react-icons/bs"
import styles from "./ReportModal.module.scss"
import { BaseSyntheticEvent } from "react"
import movieRequests from "../../../requests/movieRequests"
import { useSelector } from "react-redux"
import { RootState } from "../../../_state/app/store"


interface propsIntF {
	movie: movieInterface,
	showModal: boolean,
	setShowModal: (v: boolean) => void,
}
const ReportModal = ({ movie, setShowModal, showModal }: propsIntF) => {
	const user = useSelector((state: RootState) => state.users.loggedUser)

	const onSubmit = async (e: BaseSyntheticEvent) => {
		e.preventDefault()

		await movieRequests.sendReport('asd', 'asd')

		setShowModal(false)
	}

	return (
		<BaseModal showModal={ showModal } setShowModal={ setShowModal } icon={ <BsFlag/> } heading="Report a problem">
			{ user
				? <form className={ styles.form } onSubmit={ onSubmit } aria-label="report problem form">
					<p>Reports with description are processed slower than others. We are lazy.</p>
					<select name="choose-problem" id="choose-problem">
						<option value="no-subtitles">No subtitles</option>
						<option value="bad-subtitles">Bad subtitles</option>
						<option value="bad-quality">Bad quality</option>
						<option value="no-video">The video is missing</option>
						<option value="wrong-video">It is the wrong video</option>
						<option value="another">Another problem</option>
					</select>
					<textarea name="problem-description"
					          placeholder={ `What is the exact problem with the ${ movie.title }` }/>
					<button>Send the report</button>
				</form>
				: <>
					<div>This feature is accessible only to logged in users</div>
					<button aria-label="register">Register</button>
					<button aria-label="login">Login</button>
				</>
			}
		</BaseModal>
	)
}

export default ReportModal