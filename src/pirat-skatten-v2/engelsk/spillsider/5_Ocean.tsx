import { Link } from 'react-router-dom'
import { skattekartetUrl } from '../../../constants'

export const Ocean = () => {
	document.title = 'uu game - ocean'

	return (
		<div className="sr-only">
			<div>
				<h1 className="text-3xl mb-8">The ocean</h1>
				<p className="mb-4">There's only ocean here, go back.</p>
				<Link to={skattekartetUrl}>Go back</Link>
			</div>
		</div>
	)
}
