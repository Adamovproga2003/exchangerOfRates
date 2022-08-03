export interface Motd {
	msg: string;
	url: string;
}

export interface Rates {
	EUR: number;
	USD: number;
	UAH: number;
}

export interface IDataBase {
	motd: Motd;
	success: boolean;
	base: string;
	date: string;
	rates: Rates;
}

export interface Data {
	base: string;
	date: string;
	rates: Rates;
}

export interface Query {
	from: string;
	to: string;
	amount: number;
}

export interface Info {
	rate: number;
}

export interface IConvertCurrency {
	motd: Motd;
	success: boolean;
	query: Query;
	info: Info;
	historical: boolean;
	date: string;
	result: number;
}