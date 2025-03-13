import { Link as RouterLink } from 'react-router-dom'
import { startUrl } from '../constants'
import { Heading, Link } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'

function GrottensHistorie() {
	document.title = 'uu spill - grottens historie'
	const headingRef = useRef<HTMLHeadingElement>(null)

		useEffect(() => {
			if (headingRef.current) {
				headingRef.current.focus()
			}
		}, [])
	return (
		<div className="bg-white h-screen overflow-auto p-4 text-black">
			<Heading
				level="1"
				size="small"
				tabIndex={-1}
				ref={headingRef}
				className="outline-none mb-2"
			>
				Grottens historie
			</Heading>
			<Link as={RouterLink} to={startUrl} className="mb-2">
				Gå tilbake til skipsvraket
			</Link>
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
