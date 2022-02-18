import { filterIntF } from "./interfaces"


const filtersData: filterIntF[] = [{
	name: 'genre',
	title: 'Genre',
	options: [{
		optionTitle: 'Animation',
		optionQuery: 'stickers',
	}, {
		optionTitle: 'Biography',
		optionQuery: 'boring',
	}, {
		optionTitle: 'Drama',
		optionQuery: 'crying',
	}, {
		optionTitle: 'Action',
		optionQuery: 'tupa-lupa',
	}, {
		optionTitle: 'Comedy',
		optionQuery: 'haha',
	}, {
		optionTitle: 'Fantasy',
		optionQuery: 'fanta',
	}],
}, {
	name: "orderby",
	title: "Sorting",
	options: [{
		optionTitle: 'Date (oldest first)',
		optionQuery: 'date-asc',
	}, {
		optionTitle: 'Date (newest first)',
		optionQuery: 'date-desc',
	}, {
		optionTitle: 'Popularity',
		optionQuery: 'popularity',
	}],
}, {
	name: "audio",
	title: "Audio",
	options: [{
		optionTitle: 'BG Audio',
		optionQuery: 'dubbed',
	}, {
		optionTitle: 'Subtitles',
		optionQuery: 'subbed',
	}],
}, {
	name: "year",
	title: "Year",
	options: [{
		optionTitle: '2000-2012',
		optionQuery: '2000-2012',
	}, {
		optionTitle: '2013-2022',
		optionQuery: '2013-2022',
	}],
}]

export default filtersData