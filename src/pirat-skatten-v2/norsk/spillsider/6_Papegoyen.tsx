import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { skattenUrl } from '../../constants'
import { Alert, Button, TextField } from '@navikt/ds-react'

function Papegoyen() {
	document.title = 'uu spill - grotten'
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
					Grotten
				</h1>
				Etter å ha funnet grotten ser du en gammel papegøye.
				<h2>Papegøyens hemmelighet</h2>
				<p>
					Papegøyen har en hemmelighet. Du prøver å snakke med den,
					men alt den gjør er å synge sine gamle lister om alt den
					vet.
				</p>
				<h3>Papegøyens sang om havet</h3>
				<ul title="Papegøyens sang om havet">
					<li>Anker</li>
					<li>Støvler</li>
					<li>Sverd</li>
				</ul>
				<h3>Papegøyens sang om grotten</h3>
				<ul title="Papegøyens sang om grotten">
					<li>Steiner</li>
					<li>Hemmelig dør: KRAKEN</li>
					<li>Skatten</li>
				</ul>
				<h2>Den hemmelige døren</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<TextField
						label="Hva er koden til den hemmelige døren?"
						value={kode}
						onChange={(e) => setKode(e.target.value)}
					/>
					<Button> Prøv koden </Button>
				</form>
			</div>

			{harRiktigKode && (
				<Alert variant="info" role="alert">
					Koden er riktig! En stor stein i det mørkeste hjørnet
					beveger seg.{' '}
					<Link to={skattenUrl}>Gå gjennom den hemmelige døren.</Link>
				</Alert>
			)}
			{harRiktigKode === false && (
				<Alert variant="error" role="alert">
					Koden er feil. Hør hva papegøyen synger om og prøv igjen.
				</Alert>
			)}
		</div>
	)
}

export default Papegoyen
