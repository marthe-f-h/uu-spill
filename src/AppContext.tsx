import { createContext, useContext, useState } from 'react'

export interface AppContextProps {
	selectedLanguage: 'norsk' | 'engelsk'
	setSelectedLanguge: React.Dispatch<
		React.SetStateAction<'norsk' | 'engelsk'>
	>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

const useAppContext = () => {
	const context = useContext(AppContext)

	if (!context) {
		throw new Error(
			'useAppContext must be used within an AppContextProvider'
		)
	}

	return context
}

const AppContextProvider = ({
	initialSelectedLanguage,
	children
}: {
	initialSelectedLanguage: 'norsk' | 'engelsk'
	children: React.ReactNode
}) => {
	const [selectedLanguage, setSelectedLanguge] = useState(
		initialSelectedLanguage
	)

	const contextValue: AppContextProps = {
		selectedLanguage,
		setSelectedLanguge
	}

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppContextProvider, useAppContext }
