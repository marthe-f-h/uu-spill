import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const FiksTittelFokusWrapper = () => {
	document.title = 'Fiks tittel og fokus wrappper'
	const linkRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		linkRef.current?.focus()
	}, [])

	return (
		<div ref={linkRef} tabIndex={-1}>
			<Link to={'/uuSpill'}>Gå tilbake til hovedsiden</Link>
			<h1>Fiks document.title og fokus div-wrapper</h1>
			<p>Denne siden fikser document.title og setter fokus på div.</p>
		</div>
	)
}
