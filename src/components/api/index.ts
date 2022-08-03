import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.exchangerate.host/",
});

export const currencyAPI = {
	async getDataBaseUAH() {
		const BASE = 'UAH'
		const response = await instance.get(`latest?base=${BASE}&symbols=USD,EUR,UAH`);
		return response.data;
	},
	async getConvertCurrency(from: string, to: string, amount: number) {
		const response = await instance.get(`convert?from=${from}&to=${to}&amount=${amount}`);
		return response.data;
	}
}