import { useEffect, useRef } from 'react'

export const HomeAtLast = () => {
	document.title = 'uu game - Home at last'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div>
			<h1 tabIndex={-1} ref={headingRef} className="outline-none">
				Home at last
			</h1>
			<p>
				You've returned home with the treasure! Congratulations! Shout
				out "I'm home!" to win over the others. ("Jeg er hjemme!" in
				norwegian)
			</p>
		</div>
	)
}
