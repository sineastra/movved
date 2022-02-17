import { movieCommentIntF, movieInterface } from "../../../_misc/interfaces"
import BaseModal from "../BaseModal/BaseModal"
import { BsChat } from "react-icons/bs"
import UserComment from "../../UserComment/UserComment"
import styles from "./CommentModal.module.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../../_state/app/store"
import { BaseSyntheticEvent, useEffect, useState } from "react"
import movieRequests from "../../../requests/movieRequests"


interface propsIntF {
	movie: movieInterface,
	showModal: boolean,
	setShowModal: (v: boolean) => void,
}
const CommentModal = ({ movie, showModal, setShowModal }: propsIntF) => {
	const user = useSelector((state: RootState) => state.users.loggedUser)
	const [comments, setComments] = useState<movieCommentIntF[]>([])

	const onSubmit = async (e: BaseSyntheticEvent) => {
		e.preventDefault()

		const formData = new FormData(e.target)
		const comment = formData.get('add-comment')

		if (comment && typeof comment === 'string') {
			const newComments = await movieRequests.addComment(movie._id, comment)
			console.log(movieRequests)

			setComments(newComments)
		}
	}

	useEffect(() => {
		if (movie && movie.comments) {
			setComments(movie.comments)
		}
	}, [movie.comments])

	return (
		<BaseModal heading="Comments" showModal={ showModal } setShowModal={ setShowModal } icon={ <BsChat/> }
		           modalClassName={ styles.longerModal }>
			<div className={ styles.wrapper }>
				{ user
					? <form onSubmit={ onSubmit }>
						<textarea name="add-comment" placeholder="Add Comment..." aria-label="add movie comment"/>
						<div className={ styles.submitBtnWrapper }>
							<button aria-label="submit comment">Add comment</button>
						</div>
					</form>
					: <p>Log in to add a comment</p> }
				<hr/>
				{ comments.map((x: movieCommentIntF) => (
					<article className={ styles.commentWrapper } key={ x._id }>
						<UserComment comment={ x }/>
					</article>
				)) }
			</div>
		</BaseModal>
	)
}
export default CommentModal