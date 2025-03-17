import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { havetUrl, grottenUrl, skipsvraketUrl } from '../../constants'
import img from '../../map.png'

function Skattekartet() {
	document.title = 'uu spill - skattekartet'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="sr-only">
			<h1 tabIndex={-1} ref={headingRef} className="outline-none">
				Skattekartet
			</h1>
			<img
				src={img}
				alt="Skattekart som viser veien fra skuta, rundt palmetreet og frem til grotten der skatten er."
				width="500"
			></img>
			<Link to={skipsvraketUrl}>Gå til skipsvraket</Link>{' '}
			<Link to={havetUrl}>Gå til havet</Link>{' '}
			<Link to={grottenUrl}>Gå til grotten</Link>
		</div>
	)
}

export default Skattekartet
