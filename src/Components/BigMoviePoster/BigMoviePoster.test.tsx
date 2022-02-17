import renderer from "react-test-renderer"
import BigMoviePoster from "./BigMoviePoster"
import { movieInterface } from "../../_misc/interfaces"


const mockedMovie: movieInterface = {
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
	comments: [{
		_id: 'a',
		user: {
			_id: '1',
			name: 'a',
			email: 'a',
			password: 'a',
			profilePic: 'a',
		}, comment: 'comment',
	}],
	actors: ['a', 'b'],
	director: 'a',
}

describe("---> Snapshot test of BigMoviePoster", () => {
	it("should render properly", () => {
		const tree = renderer.create(<BigMoviePoster movie={ mockedMovie }/>).toJSON()

		expect(tree).toMatchSnapshot()
	})
})