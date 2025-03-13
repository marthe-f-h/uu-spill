import { Link } from 'react-router-dom'
import { skattekartetUrl } from '../constants'

export const Havet = () => {
	document.title = 'uu spill - havet'

	return (
		<div className="sr-only">
			<div>
				<h1 className="text-3xl mb-8">Havet</h1>
				<p className="mb-4">Her var det bare hav, gå tilbake.</p>
				<Link to={skattekartetUrl}>Gå tilbake</Link>
			</div>
		</div>
	)
}
