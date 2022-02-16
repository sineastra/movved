import { movieCommentIntF } from "../../_misc/interfaces"
import ProfilePic from "../ProfilePic/ProfilePic"
import styles from "./UserComment.module.scss"


interface propsIntF {
	comment: movieCommentIntF
}
const UserComment = ({ comment }: propsIntF) => {

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.imageWrapper }>
				<ProfilePic user={ comment.user }/>
			</div>
			<div className={ styles.textWrapper }>
				<div>
					{ comment.user.name }
				</div>
				<p>
					{ comment.comment }
				</p>
			</div>
		</div>
	)
}

export default UserComment