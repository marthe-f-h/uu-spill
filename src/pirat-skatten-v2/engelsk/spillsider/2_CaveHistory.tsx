import { Link as RouterLink } from 'react-router-dom'
import { Heading, Link } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'
import { startUrl } from '../../constants'

export const CaveHistory = () => {
	document.title = 'uu game - The history of the cave'
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
				The history of the cave
			</Heading>
			<Link as={RouterLink} to={startUrl} className="mb-2">
				Return to the shipwreck
			</Link>
			<p>
				This cave has existed since dawn of time. It is said that
				the great god Havsuz who ruled the sea lived here. 200 years
				ago, Captain Greenbeard found the cave and settled here. He was
				the most feared pirate to sail the seven seas.
			</p>
		</div>
	)
}
