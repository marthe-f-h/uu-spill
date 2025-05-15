import {
	Alert,
	BodyShort,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Table,
	TextField
} from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import img from '../blueberry.png'

export const TestSide = () => {
	const [visAlert, setVisAlert] = useState(false)
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="flex flex-col gap-4 bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<Heading
				level="1"
				size="medium"
				className="outline-none"
				tabIndex={-1}
				ref={headingRef}
			>
				Testside
			</Heading>

			<BodyShort>Prøv deg frem med skjermleser</BodyShort>

			<Button
				size="small"
				className="w-fit"
				onClick={() => setVisAlert(!visAlert)}
			>
				Trykk på meg
			</Button>

			{visAlert && (
				<Alert size="small" variant="info" role="alert">
					Du har trykket på knappen!
				</Alert>
			)}

			<div>
				<CheckboxGroup legend="Checkbox" size="small">
					<Checkbox value="car">1</Checkbox>
					<Checkbox value="taxi">2</Checkbox>
				</CheckboxGroup>
			</div>

			<div className="border border-[#A86400] p-4 w-fit">
				<p aria-hidden>Bilde</p>
				<img src={img} alt="3 blåbær" className="sr-only"></img>
			</div>

			<TextField label="Skriv noe" size="small" className="w-[24rem]" />

			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell scope="col">Frukt</Table.HeaderCell>
						<Table.HeaderCell scope="col">
							Pris per kg
						</Table.HeaderCell>
						<Table.HeaderCell scope="col">
							Beholdning
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.HeaderCell scope="row">Banan</Table.HeaderCell>
						<Table.DataCell>16 kr</Table.DataCell>
						<Table.DataCell>0</Table.DataCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell scope="row">Eple</Table.HeaderCell>
						<Table.DataCell>22 kr</Table.DataCell>
						<Table.DataCell>20</Table.DataCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell scope="row">
							Appelsin
						</Table.HeaderCell>
						<Table.DataCell>24 kr</Table.DataCell>
						<Table.DataCell>10</Table.DataCell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	)
}
