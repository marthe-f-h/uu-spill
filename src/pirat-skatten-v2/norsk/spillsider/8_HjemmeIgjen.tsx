import { Alert, Button, Table, TextField } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import img from '../../kiste.png'

function HjemmeIgjen() {
	document.title = 'uu spill - Hjemme igjen'
	const headingRef = useRef<HTMLHeadingElement>(null)
	const alphabet = 'abcdefghijklmnopqrstuvwxyzæøå'.toUpperCase().split('')

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		setHarRiktigKode(testKode.toLocaleLowerCase() === 'agms')
	}

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<h1 tabIndex={-1} ref={headingRef} className="outline-none">
				Hjemme i din egen stue
			</h1>
			<p>
				Du har kommet hjem igjen med papegøyen og skatten, men kista er
				låst. Luften er bedre og du har fått øyedråper på apoteket.
				Under kista finner du noe som ser ut som et rutenett med
				bokstaver, men det er nesten uleselig. Du klarer å lese et hint
				som står skrevet over rutene: "Fra nord-vest, gå 4 steg mot
				sør-øst".
			</p>
			<p className="mt-4 mb-4">
				Finn koden på fire bokstaver for å åpne kista.
			</p>
			<Table size="small" className="blur">
				<Table.Body>
					{[0, 5, 10, 15].map((number, i) => (
						<Table.Row key={i + number}>
							<Table.DataCell>{alphabet[number]}</Table.DataCell>
							<Table.DataCell>
								{alphabet[number + 1]}
							</Table.DataCell>
							<Table.DataCell>
								{alphabet[number + 2]}
							</Table.DataCell>
							<Table.DataCell>
								{alphabet[number + 3]}
							</Table.DataCell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>

			<form
				onSubmit={(e) => {
					e.preventDefault()
					brukKode(kode)
				}}
			>
				<TextField
					label="Hva er koden til kista?"
					size="small"
					className="w-[20rem] mt-4"
					value={kode}
					onChange={(e) => setKode(e.target.value)}
				/>
				<Button className="mt-4" size="small">
					Prøv koden
				</Button>
			</form>

			{harRiktigKode && (
				<Alert
					variant="info"
					size="small"
					className="mt-4"
					role="alert"
				>
					Koden er riktig! Sjekk hva som er oppi skattekista og rop
					det ut for å vinne!
				</Alert>
			)}
			{harRiktigKode === false && (
				<Alert
					variant="error"
					size="small"
					className="mt-4"
					role="alert"
				>
					Koden er feil. Prøv igjen.
				</Alert>
			)}

			<img
				src={img}
				alt="3 gullblåbær"
				className={`w-30 h-20 mt-4 ${harRiktigKode ? '' : 'hidden'}`}
			/>
		</div>
	)
}

export default HjemmeIgjen
