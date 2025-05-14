import { Link } from 'react-router-dom'
import { skattekartetUrl } from '../../constants'
import { useEffect, useRef } from 'react'

export const Ocean = () => {
	document.title = 'uu game - ocean'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="blur-sm bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<div>
				<h1
					tabIndex={-1}
					ref={headingRef}
					className="text-3xl mb-8 outline-none"
				>
					The ocean
				</h1>
				<Link to={skattekartetUrl}>Go back</Link>
				<p className="mb-4">There's only ocean here, go back.</p>
			</div>
		</div>
	)
}
