import { Alert, Button, Table, TextField } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import img from '../../kiste.png'

export const HomeAtLast = () => {
	document.title = 'uu game - Home at last'
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
				Home at last
			</h1>
			<p>
				You have returned home with the parrot and the treasure, but the
				chest is locked. The air is better and you have gotten eye drops
				from the pharmacy. Under the chest you find what looks like a
				grid of letters, but it is almost unreadable. You manage to read
				a hint written above the squares: "From the northwest, walk 4
				steps to the southeast".
			</p>
			<p className="mt-4 mb-4">
				Find the four-letter code to open the chest.
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
				className="flex gap-6 items-end"
				onSubmit={(e) => {
					e.preventDefault()
					brukKode(kode)
				}}
			>
				<TextField
					label="What is the code for the chest?"
					size="small"
					className="w-[20rem] mt-4"
					value={kode}
					onChange={(e) => setKode(e.target.value)}
				/>
				<Button className="h-fit" size="small">
					Try the code
				</Button>
			</form>

			{harRiktigKode && (
				<>
					<Alert
						variant="info"
						size="small"
						className="mt-4"
						role="alert"
					>
						The code is correct! Check out what's in the treasure
						chest and shout it out to win!
					</Alert>
					<img
						src={img}
						alt="3 golden blueberries"
						className="w-30 h-20 mt-4"
					/>
				</>
			)}
			{harRiktigKode === false && (
				<Alert
					variant="error"
					size="small"
					className="mt-4"
					role="alert"
				>
					The code is incorrect. Try again.
				</Alert>
			)}
		</div>
	)
}
