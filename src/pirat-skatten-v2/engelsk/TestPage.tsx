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

export const TestPage = () => {
	const [visAlert, setVisAlert] = useState(false)
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="flex flex-col gap-4 bg-white h-screen overflow-auto p-4 text-black">
			<Heading
				level="1"
				size="medium"
				className="outline-none"
				tabIndex={-1}
				ref={headingRef}
			>
				Test page
			</Heading>

			<BodyShort>Try it out with a screen reader</BodyShort>

			<Button
				size="small"
				className="w-fit"
				onClick={() => setVisAlert(!visAlert)}
			>
				Click me
			</Button>

			{visAlert && (
				<Alert size="small" variant="info" role="alert">
					You have clicked the button
				</Alert>
			)}

			<div>
				<CheckboxGroup legend="Checkbox" size="small">
					<Checkbox value="car">1</Checkbox>
					<Checkbox value="taxi">2</Checkbox>
				</CheckboxGroup>
			</div>

			<div className="border border-[#A86400] p-4 w-fit">
				<p aria-hidden>Image</p>
				<img src={img} alt="3 blueberries" className="sr-only"></img>
			</div>

			<TextField
				label="Write something"
				size="small"
				className="w-[24rem]"
			/>

			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell scope="col">Fruit</Table.HeaderCell>
						<Table.HeaderCell scope="col">
							Price per kg
						</Table.HeaderCell>
						<Table.HeaderCell scope="col">
							Inventory
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.HeaderCell scope="row">Banana</Table.HeaderCell>
						<Table.DataCell>16 kr</Table.DataCell>
						<Table.DataCell>0</Table.DataCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell scope="row">Apple</Table.HeaderCell>
						<Table.DataCell>22 kr</Table.DataCell>
						<Table.DataCell>20</Table.DataCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell scope="row">Orange</Table.HeaderCell>
						<Table.DataCell>24 kr</Table.DataCell>
						<Table.DataCell>10</Table.DataCell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	)
}
