import { Rates } from "../types/data";

type UseRate = (data: Rates, originalCurrency: string, targetCurrency: string) => number;

export const useRate: UseRate = ({data}, originalCurrency, targetCurrency) => {
	const originalRate = data.rates[originalCurrency]
	const targetRate = data.rates[targetCurrency];

	if (originalCurrency === "PLN") return targetRate;
	if (originalRate === targetRate) return 1;

	return (1 / originalRate) * targetRate;
};