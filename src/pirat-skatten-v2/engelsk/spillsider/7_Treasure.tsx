import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { hjemmeIgjenUrl } from '../../../constants'
import { Alert, Button } from '@navikt/ds-react'

export const Treasure = () => {
	document.title = 'uu game - treasure'
	const [kode, setKode] = useState<boolean[]>([false, false, false, false])
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	const oppdaterKode = (index: number) => {
		const nyKode = [...kode]
		nyKode[index] = !nyKode[index]
		setKode(nyKode)
	}

	const brukKode = () => {
		setHarRiktigKode(kode[1] && kode[3])
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
					<fieldset>
						<legend>Select the numbers in the code</legend>
						<div>
							<input
								type="checkbox"
								id="c1"
								name="1"
								checked={kode[0]}
								onChange={() => oppdaterKode(0)}
							/>
							<label htmlFor="c1">1</label>
						</div>

						<div>
							<input
								type="checkbox"
								id="c2"
								name="2"
								checked={kode[1]}
								onChange={() => oppdaterKode(1)}
							/>
							<label htmlFor="c2">2</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="c3"
								name="3"
								checked={kode[2]}
								onChange={() => oppdaterKode(2)}
							/>
							<label htmlFor="c3">3</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="c4"
								name="4"
								checked={kode[3]}
								onChange={() => oppdaterKode(3)}
							/>
							<label htmlFor="c4">4</label>
						</div>
					</fieldset>
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
