import { Heading, Link } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { startUrl, testUrl } from '../constants'

export const WelcomePage = () => {
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
				size="medium"
				className="mb-4 outline-none"
				tabIndex={-1}
				ref={headingRef}
			>
				Welcome to uuSpillet
			</Heading>

			<Link as={RouterLink} to={testUrl} className="mr-6">
				Test screen reader
			</Link>
			<Link as={RouterLink} to={startUrl}>
				Start the game
			</Link>
		</div>
	)
}
