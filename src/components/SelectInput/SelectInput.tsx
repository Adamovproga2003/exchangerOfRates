import { SelectInputProps } from './SelectInput.props';

const SelectInput = ({
	valueInput,
	onChangeInput,
	valueSelect,
	onChangeSelect,
	data,
	disabledKey }: SelectInputProps) => {

	return (
		<div className="d-flex">
			<input
				type="number"
				value={valueInput}
				onChange={(e) => onChangeInput(+e.target.value)}
				min={0}
				step={0.01}
				className="form-control flex-grow-1 mx-2"
			/>
			<select
				className="form-select w-auto mx-2"
				value={valueSelect}
				onChange={onChangeSelect}
			>
				{data && Object.entries(data.rates).map(([key, value], index) => (
					<option
						key={index}
						value={key}
						disabled={key === disabledKey}
					>
						{key}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectInput