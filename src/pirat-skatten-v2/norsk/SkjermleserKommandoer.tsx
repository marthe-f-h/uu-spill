import { FigureIcon, RobotSmileIcon } from "@navikt/aksel-icons"
import { Heading, List, Tabs } from '@navikt/ds-react'
import { SprakVelger } from '../SprakVelger'

export const SkjermleserKommandoer = () => {
	return (
		<div className="h-screen overflow-auto bg-[#FFECCC] border border-[#A86400] p-3 pb-1 text-black">
			<SprakVelger />
			<Heading level="1" size="xsmall">
				Nyttige skjermleserkommandoer
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
								label="Slå på / av"
								value="Cmd + F5 (eller trykk Touch ID 3 ganger rakst)"
							/>
							<ListItem label="Stop lesing" value="Ctrl" />
							<ListItem
								label="Leser neste element"
								value="Ctrl + Option + piltaster"
							/>
							<ListItem
								label="Åpne rotor"
								value="Ctrl + Option + U"
							/>
							<ListItem label="Lukke rotor" value="Esc" />
							<ListItem
								label="Navigere i rotor"
								value="Piltaster navigere og Enter for å velge"
							/>
						</List>
					</Tabs.Panel>
					<Tabs.Panel value="narrator">
						<List size="small">
							<ListItem
								label="Slå på / av"
								value="Ctrl + Windows + Enter"
							/>
							<ListItem label="Stop lesing" value="Ctrl" />
							<ListItem
								label="Lese linje for linje"
								value="Pil opp / ned"
							/>
							<ListItem
								label="Åpne elementliste"
								value="Caps Lock + fn + F5"
							/>
							<ListItem
								label="Gå ut av elementliste"
								value="Esc"
							/>
							<ListItem
								label="Scanne modus på / av"
								value="Caps Lock + Mellomrom"
							/>
							<ListItem
								label="Lese hele siden"
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