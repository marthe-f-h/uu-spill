import { FigureIcon, RobotSmileIcon } from "@navikt/aksel-icons"
import { Heading, List, Tabs } from "@navikt/ds-react"
import { SprakVelger } from '../SprakVelger'

export const ScreenReaderCommands = () => {
	return (
		<div className="h-screen overflow-auto bg-[#F9FCCC] border-r-2 border-[#474E00] p-3 pb-1 text-black">
			<SprakVelger />
			<Heading level="1" size="xsmall">
				Useful screen reader commands
			</Heading>
			<div className="flex gap-4 mt-1">
				<Tabs defaultValue="voiceover" size="small" className="pt-2">
					<Tabs.List>
						<Tabs.Tab
							value="voiceover"
							label="Voiceover"
							icon={<FigureIcon aria-hidden />}
						/>
						<Tabs.Tab
							value="narrator"
							label="Narrator"
							icon={<RobotSmileIcon aria-hidden />}
						/>
					</Tabs.List>
					<Tabs.Panel value="voiceover">
						<List size="small">
							<ListItem
								label="Turn on / off"
								value="Cmd + F5 (or push Touch ID 3 times fast)"
							/>
							<ListItem label="Stop reading" value="Ctrl" />
							<ListItem
								label="Read next / previous element"
								value="Ctrl + Option + arrow keys"
							/>
							<ListItem
								label="Open rotor"
								value="Ctrl + Option + U"
							/>
							<ListItem label="Close rotor" value="Esc" />
							<ListItem
								label="Navigate in rotor"
								value="Arrow keys navigates and Enter selects"
							/>
						</List>
					</Tabs.Panel>
					<Tabs.Panel value="narrator">
						<List size="small">
							<ListItem
								label="Turn on / off"
								value="Ctrl + Windows + Enter"
							/>
							<ListItem label="Stop reading" value="Ctrl" />
							<ListItem
								label="Read line by line"
								value="Arrow keys up / down"
							/>
							<ListItem
								label="Open list of elements"
								value="Caps Lock + fn + F5"
							/>
							<ListItem
								label="Close list of elements"
								value="Esc"
							/>
							<ListItem
								label="Scan mode on / off"
								value="Caps Lock + Space"
							/>
							<ListItem
								label="Read the entire page"
								value="Caps Lock + M"
							/>
						</List>
					</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	)
}

interface ListItemProps {
	label: string
	value: string
}
const ListItem = ({ label, value }: ListItemProps) => (
	<List.Item>
		<strong className="mr-2">{`${label}:`}</strong>
		{value}
	</List.Item>
)