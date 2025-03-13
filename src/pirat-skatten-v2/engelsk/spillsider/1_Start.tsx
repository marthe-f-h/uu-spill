import { Alert, Button, Heading, Link, TextField } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { grottensHistorieUrl, skattekartetUrl } from '../../../constants'

export const Beginning = () => {
	document.title = 'uu game - start'
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
		<div className="bg-white h-screen overflow-auto p-4 text-black">
			<div>
				<Heading
					level="1"
					size="small"
					className="text-3xl mb-4 outline-none"
					tabIndex={-1}
					ref={headingRef}
				>
					Pirates' treasure
				</Heading>
				<p className="mb-4">
					You have just anchored off a deserted island. You are
					standing by Captain Greenbeard's shipwreck on the beach. You
					know there is a treasure here on the island, but you must
					find it before the island disappears into the sea.
				</p>
				<Heading level="2" size="xsmall" className="text-2xl mb-2">
					The cave of Captain Greenbeard
				</Heading>
				<p>Long ago, Captain Greenbeard lived in this cave. </p>
				<Link as={RouterLink} to={grottensHistorieUrl}>
					Read more about the history of the cave.
				</Link>
				<Heading level="2" size="xsmall" className="mt-6 mb-2 text-2xl">
					The treasure map
				</Heading>
				<p className="mb-2">
					You find a chest with a combination lock. You must find the
					code to open the chest.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<TextField
						label="How many years ago did Captain Greenbeard find the cave?"
						size="small"
						className="w-[20rem]"
						value={kode}
						onChange={(e) => setKode(e.target.value)}
					/>
					<Button className="mt-4" size="small">
						Try the code
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
					The code is correct! Do you want to find the treasure?{' '}
					<Link as={RouterLink} to={skattekartetUrl}>
						Then you need to read the treasure map here.
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
					The code is incorrect. Learn more about the cave's history
					and try again.
				</Alert>
			)}
		</div>
	)
}
