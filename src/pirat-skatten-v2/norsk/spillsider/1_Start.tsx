import { Alert, Button, Heading, Link, TextField } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { grottensHistorieUrl, skattekartetUrl } from '../../constants'

function Start() {
	document.title = 'uu spill - start'
	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	const brukKode = (testKode: string) => {
		setHarRiktigKode(testKode === '200')
	}

	return (
		<div className="bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<div>
				<Heading
					level="1"
					size="small"
					className="text-3xl mb-4 outline-none"
					tabIndex={-1}
					ref={headingRef}
				>
					Piratenes skatt
				</Heading>
				<p className="mb-4">
					Du har nettopp satt anker ved en øde øy. Du står ved Kaptein
					Grønnskjeggs skipsvrak på stranden. Du vet det finnes en
					skatt her på øya, men lufta på her er giftig, som gjør at du
					holder på å bli blind. Fort deg å finne skatten og kom deg
					hjem før det er for sent!
				</p>
				<Heading level="2" size="xsmall" className="text-2xl mb-2">
					Kaptein Grønnskjeggs grotte
				</Heading>
				<p>
					For lenge siden bodde Kaptein Grønnskjegg i denne grotten.{' '}
				</p>
				<Link as={RouterLink} to={grottensHistorieUrl}>
					Les mer om grottens historie.
				</Link>
				<Heading level="2" size="xsmall" className="mt-6 mb-2 text-2xl">
					Skattekartet
				</Heading>
				<p className="mb-2">
					Du finner en kiste med kodelås. Du må finne koden for å åpne
					kisten.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<TextField
						label="Hvor mange år siden fant Kaptein Grønnskjegg grotten?"
						size="small"
						className="w-[20rem]"
						value={kode}
						onChange={(e) => setKode(e.target.value)}
					/>
					<Button className="mt-4" size="small">
						Prøv koden
					</Button>
				</form>
			</div>

			{harRiktigKode && (
				<Alert
					variant="info"
					size="small"
					className="mt-4"
					role="alert"
				>
					Koden er riktig! Vil du finne skatten?{' '}
					<Link as={RouterLink} to={skattekartetUrl}>
						Da må du lese skattekartet her.
					</Link>
				</Alert>
			)}
			{harRiktigKode === false && (
				<Alert
					variant="error"
					size="small"
					className="mt-4"
					role="alert"
				>
					Koden er feil. Lær mer om grottens historie og prøv igjen.
				</Alert>
			)}
		</div>
	)
}

export default Start
