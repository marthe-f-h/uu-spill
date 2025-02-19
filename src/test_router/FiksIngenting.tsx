import { Link } from 'react-router-dom'

export const FiksIngenting = () => {
	return (
		<div>
			<Link to={'/uuSpill'}>Gå tilbake til hovedsiden</Link>
			<h1>Fikser ingenting</h1>
			<p>Denne siden gjør ingenting.</p>
		</div>
	)
}
