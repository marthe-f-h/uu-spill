import { Link } from 'react-router-dom'
import { skattekartetUrl } from '../../constants'
import { useEffect, useRef } from 'react'

export const Havet = () => {
	document.title = 'uu spill - havet'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="blur-sm">
			<div>
				<h1
					tabIndex={-1}
					ref={headingRef}
					className="text-3xl mb-8 outline-none"
				>
					Havet
				</h1>
				<Link to={skattekartetUrl}>Gå tilbake</Link>
				<p className="mb-4">Her var det bare hav, gå tilbake.</p>
			</div>
		</div>
	)
}
