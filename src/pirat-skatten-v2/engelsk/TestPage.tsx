import {
	Alert,
	BodyShort,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Link,
	TextField
} from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { basePath } from '../constants'

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
			<Link as={RouterLink} to={basePath} className="w-fit">
				Go back
			</Link>

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

			<TextField label="Write something" size="small" className="w-[24rem]" />
		</div>
	)
}
