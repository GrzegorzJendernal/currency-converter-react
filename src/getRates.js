import axios from "axios";

const delayTime = 1500;

export const delay = () =>
	new Promise((resolve) => setTimeout(resolve, delayTime));

export const getRates = async ()=> {
	await delay();
	const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&source=ecb");
	return response.data;
};