import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { skattekartetUrl } from '../../constants'

export const Skipsvraket = () => {
	document.title = 'uu spill - skipsvraket'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="blur-sm">
			<div>
				<h1 tabIndex={-1} ref={headingRef} className="outline-none">
					Skipsvraket
				</h1>
				<Link to={skattekartetUrl}>Gå tilbake</Link>
				<p className="mb-4">
					Her var det bare et skipsvrak, gå tilbake.
				</p>
			</div>
		</div>
	)
}
