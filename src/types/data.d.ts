export interface Rates {
	data: {
	motd: {
		msg: string;
		url: string;
	};
	success: boolean;
	base: string;
	date: string;
	rates: {
		[key: string]: number;
	};
	};
}