import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Start() {
	document.title = 'uu spill - Start'
	const linkRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		linkRef.current?.focus()
	}, [])

	return (
		<div>
			<h1 ref={linkRef} className="text-3xl mb-6">
				Test routing
			</h1>
			<p>
				Sammenlikne linker, prøv linken til ekstern side (nav) først, så
				test linker i intern flate. Test flere nettlesere.
			</p>

			<h2 className="mt-4">Link til ekstern side</h2>
			<a href={'https://www.nav.no'}>Naviger til nav.no.</a>

			<h2 className="mt-4">Link til intern side</h2>
			<p>
				<Link to={'/uu-spill/fiks-ingenting'}>
					Naviger til siden som ikke gjør noenting.
				</Link>
			</p>
			<p>
				<Link to={'/uu-spill/fiks-tittel'}>
					Naviger til siden som bare fikser document.title.
				</Link>
			</p>
			<p>
				<Link to={'/uu-spill/fiks-tittel-fokusw'}>
					Naviger til siden som fikser document.title og fokus på
					wrapper.
				</Link>
			</p>
			<p>
				<Link to={'/uu-spill/fiks-tittel-fokush1'}>
					Naviger til siden som fikser document.title og fokus på h1.
				</Link>
			</p>
		</div>
	)
}

export default Start
