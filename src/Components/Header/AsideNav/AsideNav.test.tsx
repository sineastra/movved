import AsideNav from "./AsideNav"
import runNavLinksTests from "../_misc/abstractTests"


runNavLinksTests(
	{
		navLinksTexts: ['movies', 'series', 'actors'],
		navLinksHrefs: ['/movies', '/series', '/actors'],
		container: <AsideNav loggedUser={ null }/>,
	},
)