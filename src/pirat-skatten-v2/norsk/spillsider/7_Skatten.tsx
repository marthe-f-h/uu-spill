import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { hjemmeIgjenUrl } from '../constants'
import { Alert, Button } from '@navikt/ds-react'

function Skatten() {
	document.title = 'uu spill - skatten'
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
					Skatten
				</h1>
				Du ser en stor kiste, men den er låst fast til en stor stein.
				<h2>Hulemalerier</h2>
				<p>
					På veggen ser du gamle hulemalerier. De viser en skattekiste
					og en kode.
				</p>
				<ul title="Hulemalerier">
					<li>Skattekiste</li>
					<li>24</li>
				</ul>
				<h2>Skattekisten</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode()
					}}
				>
					<fieldset>
						<legend>Velg tallene i koden</legend>
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
					<Button> Prøv koden </Button>
				</form>
			</div>

			{harRiktigKode && (
				<Alert variant="info" role="alert">
					Koden er riktig og skattekisten er fri!{' '}
					<Link to={hjemmeIgjenUrl}>Dra hjem med skatten.</Link>
				</Alert>
			)}
			{harRiktigKode === false && (
				<Alert variant="error" role="alert">
					Koden er feil. Finn ut hva hulemaleriet viser og prøv igjen.
				</Alert>
			)}
		</div>
	)
}

export default Skatten
