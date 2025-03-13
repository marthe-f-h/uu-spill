import { Select } from '@navikt/ds-react'
import { useAppContext } from './AppContext'

export const SprakVelger = () => {
	const { selectedLanguage, setSelectedLanguge } = useAppContext()

	return (
		<Select
			label="Velg språk"
			size="small"
			className='mb-6'
			value={selectedLanguage}
			onChange={(v) => {
				setSelectedLanguge(
					v.target.value === 'engelsk' ? 'engelsk' : 'norsk'
				)
				document.documentElement.lang =
					v.target.value === 'engelsk' ? 'en' : 'no'
			}}
		>
			<option value="norsk">Norsk</option>
			<option value="engelsk">English</option>
		</Select>
	)
}
