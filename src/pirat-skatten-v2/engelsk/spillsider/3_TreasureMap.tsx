import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { havetUrl, grottenUrl, skipsvraketUrl } from '../../constants'
import img from '../../map.png'

export const TreasureMap = () => {
	document.title = 'uu game - The treasure map'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="blur-sm">
			<h1 tabIndex={-1} ref={headingRef} className="outline-none">
				The treasure map
			</h1>
			<img
				src={img}
				alt="A treasure map showing the way from the ship, around the palm tree and to the cave where the treasure is."
				width="500"
				className="blur-lg"
			></img>
			<Link to={skipsvraketUrl}>Go to the shipwreck</Link>{' '}
			<Link to={havetUrl}>Go to the ocean</Link>{' '}
			<Link to={grottenUrl}>Go to the cave</Link>
		</div>
	)
}
