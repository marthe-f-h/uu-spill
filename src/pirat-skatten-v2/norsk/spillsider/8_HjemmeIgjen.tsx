import { useEffect, useRef } from 'react'

function HjemmeIgjen() {
	document.title = 'uu spill - Hjemme igjen'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="sr-only ">
			<h1 tabIndex={-1} ref={headingRef} className="outline-none">
				Hjemme i din egen stue
			</h1>
			<p>
				Du har kommet hjem igjen med skatten! Gratulerer! Rop ut "Jeg er
				hjemme!" for å vinne over de andre.
			</p>
		</div>
	)
}

export default HjemmeIgjen
