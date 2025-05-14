import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { skattenUrl } from '../../constants'
import { Alert, Button, TextField } from '@navikt/ds-react'

export const Parrot = () => {
	document.title = 'uu game - The cave'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		setHarRiktigKode(testKode.toUpperCase() === 'KRAKEN')
	}

	return (
		<div className="sr-only">
			<div>
				<h1 tabIndex={-1} ref={headingRef} className="outline-none">
					The cave
				</h1>
				<p>
					After finding the cave, you find an old parrot. You can no
					longer see anything.
				</p>

				<h2>The Parrot's Secret</h2>
				<p>
					The parrot has a secret. You try to talk to it, but all it
					does is singing its old songs about everything it knows.
				</p>
				<h3>The parrot's song about the ocean</h3>
				<ul title="The parrot's song about the ocean">
					<li>Anchor</li>
					<li>Boot</li>
					<li>Sword</li>
				</ul>
				<h3>The parrot's song about the cave</h3>
				<ul title="The parrot's song about the caven">
					<li>Stones</li>
					<li>Secret door: KRAKEN</li>
					<li>A treasure</li>
				</ul>
				<h2>The secret door</h2>
				<p>
					You feel your way into the cave and find a door. There is a
					combination lock on the door.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<TextField
						label="What is the code to the secret door?"
						value={kode}
						onChange={(e) => setKode(e.target.value)}
					/>
					<Button>Try the code</Button>
				</form>
			</div>

			{harRiktigKode && (
				<Alert variant="info" role="alert">
					The code is correct! You hear the door moving.{' '}
					<Link to={skattenUrl}>Go through the secret door.</Link>
				</Alert>
			)}
			{harRiktigKode === false && (
				<Alert variant="error" role="alert">
					The code is incorrect. Listen to what the parrot is singing
					and try again.
				</Alert>
			)}
		</div>
	)
}
