import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { hjemmeIgjenUrl } from '../../constants'
import { Alert, Button, Checkbox, CheckboxGroup } from '@navikt/ds-react'

export const Treasure = () => {
	document.title = 'uu game - treasure'
	const [kode, setKode] = useState<number[]>([])
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	const brukKode = () => {
		if (kode.includes(1) || kode.includes(3)) setHarRiktigKode(false)
		else if (kode.includes(2) && kode.includes(4)) setHarRiktigKode(true)
		else setHarRiktigKode(false)
	}

	return (
		<div className="sr-only">
			<div>
				<h1 tabIndex={-1} ref={headingRef} className="outline-none">
					The treasure
				</h1>
				<p>You see a large chest, but it is locked to a large rock.</p>
				<h2>Cave paintings</h2>
				<p>
					On the wall you see old cave paintings. They show a treasure
					chest and a code.
				</p>
				<ul title="Hulemalerier">
					<li>Treasure chest</li>
					<li>24</li>
				</ul>

				<h2>The treasure chest</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode()
					}}
				>
					<CheckboxGroup
						legend="Select the numbers in the code"
						onChange={setKode}
						value={kode}
						size="small"
					>
						<Checkbox value={1}>1</Checkbox>
						<Checkbox value={2}>2</Checkbox>
						<Checkbox value={3}>3</Checkbox>
						<Checkbox value={4}>4</Checkbox>
					</CheckboxGroup>
					<Button>Try the code</Button>
				</form>
			</div>

			{harRiktigKode && (
				<Alert variant="info" role="alert">
					The code is correct and the treasure chest is free!{' '}
					<Link to={hjemmeIgjenUrl}>Go home with the treasure.</Link>
				</Alert>
			)}
			{harRiktigKode === false && (
				<Alert variant="error" role="alert">
					The code is incorrect. Find out what the cave painting shows
					and try again.
				</Alert>
			)}
		</div>
	)
}
