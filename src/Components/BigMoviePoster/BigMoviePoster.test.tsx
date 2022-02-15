import renderer from "react-test-renderer"
import BigMoviePoster from "./BigMoviePoster"
import { movie } from "../../_misc/interfaces"


const mockedMovie: movie = {
	_id: '0',
	title: 'a',
	smallPoster: 'b',
	bigPoster: 'c',
	isSubbed: true,
	isDubbed: true,
	year: 0,
	watchLink: 'd',
	engTitle: 'e',
	genres: ['f'],
	trailerLink: 'a',
	comments: {
		user: {
			name: 'a',
			email: 'a',
			password: 'a',
			profilePic: 'a',
		}, comment: 'comment',
	},
	actors: ['a', 'b'],
	director: 'a',
}

describe("---> Snapshot test of BigMoviePoster", () => {
	it("should render properly", () => {
		const tree = renderer.create(<BigMoviePoster movie={ mockedMovie }/>).toJSON()

		expect(tree).toMatchSnapshot()
	})
})