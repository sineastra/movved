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
	genre: 'f',
}

describe("---> Snapshot test of BigMoviePoster", () => {
	it("should render properly", () => {
		const tree = renderer.create(<BigMoviePoster movie={ mockedMovie }/>).toJSON()

		expect(tree).toMatchSnapshot()
	})
})