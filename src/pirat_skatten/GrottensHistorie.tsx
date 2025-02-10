import { Link } from 'react-router-dom'

function GrottensHistorie() {
	document.title = 'uu spill - grottens historie'
	return (
		<div className="sr-only">
			<Link to={'/uuSpill'}>Gå tilbake til skipsvraket</Link>
			<h1>Grottens historie</h1>
			<p>
				Denne grotten har eksistert siden tidenes morgen. Det sies at
				den store guden Havsuz som hersket over havet bodde her. For 200
				år siden fant Kaptein Grønnskjegg grotten og bosatte seg her.
				Han var en fryktet pirat som herjet havet.
			</p>
		</div>
	)
}

export default GrottensHistorie
