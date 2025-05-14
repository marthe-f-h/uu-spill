import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { hjemmeIgjenUrl } from '../../constants'
import { Alert, Button, Checkbox, CheckboxGroup } from '@navikt/ds-react'

function Skatten() {
	document.title = 'uu spill - skatten'
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
					Skatten
				</h1>
				<p>
					Papegøyen sitter på skulderen din. Den hjelper deg frem til
					en kiste, men den er låst fast til grotten.
				</p>

				<h2>Hulemalerier</h2>
				<p>
					Papegøyen forteller om gamle hulemalerier som er på veggen.
					De viser en skattekiste og en kode.
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
					<CheckboxGroup
						legend="Velg tallene i koden"
						onChange={setKode}
						value={kode}
						size="small"
					>
						<Checkbox value={1}>1</Checkbox>
						<Checkbox value={2}>2</Checkbox>
						<Checkbox value={3}>3</Checkbox>
						<Checkbox value={4}>4</Checkbox>
					</CheckboxGroup>
					<Button>Prøv koden</Button>
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
