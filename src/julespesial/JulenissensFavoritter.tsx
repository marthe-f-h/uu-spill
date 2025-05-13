import { Link } from 'react-router-dom'

function JulenissensFavoritter() {
	document.title = 'uu spill - julenissens favoritter'
	return (
		<div>
			<Link to={'/uu-spill'}>Gå tilbake</Link>
			<h1>Julenissens favoritter</h1>
			<h2>Favoritt mat</h2>
			<ol title="Favoritt mat">
				<li>Grøt</li>
				<li>Pepperkaker</li>
				<li>Ribbe</li>
			</ol>
			<h2>Favoritt luer</h2>
			<ol title="Favoritt luer">
				<li>Den røde</li>
				<li>Den gammel-røde</li>
				<li>Den lyse-røde</li>
				<li>Den gule</li>
			</ol>
			<h2>Favoritt sokker</h2>
			<ol title="Favoritt sokker">
				<li>Røde med hvit snø-mønster</li>
				<li>Grønne med julekuler</li>
			</ol>
			<h2>Favoritt snø</h2>
			<ul title="Favoritt snø">
				<li>Kram</li>
				<li>Lett</li>
				<li>Skare</li>
			</ul>
		</div>
	)
}

export default JulenissensFavoritter
