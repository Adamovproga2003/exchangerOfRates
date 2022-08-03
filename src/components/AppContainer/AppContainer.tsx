import { useEffect, useState } from 'react'
import App from '../../App';
import { currencyAPI } from '../api';
import { Data, IDataBase } from '../../interfaces/index';


const AppContainer = () => {

	const [data, setData] = useState<Data | null>(null)



	async function fetchData() {
		const response: IDataBase = await currencyAPI.getDataBaseUAH();
		setData({
			base: response.base,
			date: response.date,
			rates: response.rates
		})
	}

	useEffect(() => {
		fetchData()
	}, [])


	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<App data={data} />
	)
}

export default AppContainer