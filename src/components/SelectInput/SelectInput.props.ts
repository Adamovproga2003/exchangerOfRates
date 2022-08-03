import { Data } from '../../interfaces'

export interface SelectInputProps {
	valueInput: number
	onChangeInput: (value: number) => void
	valueSelect: string
	onChangeSelect: (event: React.FormEvent<HTMLSelectElement>) => void
	data: Data | null
	disabledKey: string
}