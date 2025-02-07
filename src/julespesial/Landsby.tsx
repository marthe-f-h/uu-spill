import { Link } from 'react-router-dom'

function Landsby() {
	document.title = 'uu spill - julenissens landsby'
	return (
		<div>
			<Link to={'/uuSpill'}>Gå tilbake</Link>
			<h1>Julenissens Landsby</h1>
			<h2>Siden er under vedlikehold...</h2>
		</div>
	)
}

export default Landsby
