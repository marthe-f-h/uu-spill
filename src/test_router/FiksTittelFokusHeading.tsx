import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const FiksTittelFokusHeading = () => {
	document.title = 'Fiks tittel og fokus wrappper'
	const linkRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		linkRef.current?.focus()
	}, [])

	return (
		<div>
			<Link to={'/uu-spill'}>Gå tilbake til hovedsiden</Link>
			<h1 ref={linkRef} tabIndex={-1}>
				Fiks document.title og fokus heading
			</h1>
			<p>Denne siden fikser document.title og setter fokus på h1.</p>
		</div>
	)
}
