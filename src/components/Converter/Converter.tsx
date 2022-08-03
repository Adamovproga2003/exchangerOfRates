import { ConverterProps } from './Converter.props';
import styles from './Converter.module.css';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import SelectInput from '../SelectInput/SelectInput';
import { currencyAPI } from '../api/index';
import { IConvertCurrency } from '../../interfaces';
import { IoIosSwap } from 'react-icons/io';

const Converter = ({ data }: ConverterProps): JSX.Element => {

	const [from, setFrom] = useState('')
	const [countFrom, setCountFrom] = useState<number>(0)

	const [to, setTo] = useState('')
	const [countTo, setCountTo] = useState<number>(0)

	useEffect(() => {
		if (data) {
			setFrom(Object.keys(data.rates)[0])
			setTo(Object.keys(data.rates)[1])
		}
	}, [data])


	const onChangeFrom = (event: React.FormEvent<HTMLSelectElement>) => {
		if (from !== event.currentTarget.value) setFrom(event.currentTarget.value)
		onChangeCountFrom(countFrom, event.currentTarget.value, to)
	}

	const onChangeTo = (event: React.FormEvent<HTMLSelectElement>) => {
		if (to !== event.currentTarget.value) setTo(event.currentTarget.value)
		onChangeCountTo(countTo, from, event.currentTarget.value)
	}

	const onChangeCountFrom = async (amount: number, from_?: string, to_?: string) => {

		if (amount) {
			setCountFrom(amount)
			if (amount !== 0) {
				const response: IConvertCurrency = await currencyAPI
					.getConvertCurrency(
						from_ ? from_ : from,
						to_ ? to_ : to,
						amount
					)
				setCountTo(+response.result.toFixed(2))
			} else {
				setCountTo(0)
			}

		}
	}

	const onChangeCountTo = async (amount: number, from_?: string, to_?: string) => {

		if (amount) {
			setCountTo(amount)
			if (amount !== 0) {
				const response: IConvertCurrency = await currencyAPI
					.getConvertCurrency(
						to_ ? to_ : to,
						from_ ? from_ : from,
						amount
					)
				setCountFrom(+response.result.toFixed(2))
			} else {
				setCountFrom(0)
			}

		}
	}

	const onReplace = () => {
		setFrom(to)
		setTo(from)
		setCountFrom(countTo)
		setCountTo(countFrom)
	}

	return (
		<main className={cn(styles.main, styles.flex, styles.flexCenter)}>
			<div className='container'>
				<div className={cn(styles.flex, styles.exchangeForm)}>
					<SelectInput
						valueInput={countFrom}
						onChangeInput={onChangeCountFrom}
						valueSelect={from}
						onChangeSelect={onChangeFrom}
						data={data}
						disabledKey={to}
					/>
					<div>
						<button
							className={cn(styles.swap, "btn btn-outline-light")}
							onClick={onReplace}
						>
							<IoIosSwap />
						</button>
					</div>
					<SelectInput
						valueInput={countTo}
						onChangeInput={onChangeCountTo}
						valueSelect={to}
						onChangeSelect={onChangeTo}
						data={data}
						disabledKey={from}
					/>
				</div>
			</div>
		</main>
	)
}

export default Converter