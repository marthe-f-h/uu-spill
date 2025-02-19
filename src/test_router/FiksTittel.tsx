import { Link } from 'react-router-dom'

export const FiksTittel = () => {
	document.title = 'Fiks tittel'
	return (
		<div>
			<Link to={'/uuSpill'}>Gå tilbake til hovedsiden</Link>
			<h1>Bare fiks document.title</h1>
			<p>Denne siden fikser document.title</p>
		</div>
	)
}
