import { movieInterface } from "../../../_misc/interfaces"
import BaseModal from "../BaseModal/BaseModal"
import { BsChat } from "react-icons/bs"
import UserComment from "../../UserComment/UserComment"
import styles from "./CommentModal.module.scss"


interface propsIntF {
	movie: movieInterface,
	showModal: boolean,
	setShowModal: (v: boolean) => void,
}
const CommentModal = ({ movie, showModal, setShowModal }: propsIntF) => {

	return (
		<BaseModal heading="Comments" showModal={ showModal } setShowModal={ setShowModal } icon={ <BsChat/> }
		           modalClassName={ styles.longerModal }>
			<div className={ styles.wrapper }>
				<textarea name="add-comment" placeholder="Add Comment..."/>
				<hr/>
				{ movie.comments.map(x => (
					<div className={ styles.commentWrapper } key={ x._id }>
						<UserComment comment={ x }/>
					</div>
				)) }
			</div>
		</BaseModal>
	)
}
export default CommentModal