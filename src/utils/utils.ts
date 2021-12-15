export const convertKwToKm = (kW: number): number => Math.round(kW * 1.36);

export const formatToCurrency = (amount: number): string => {
  return `${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} zł`;
};

export const replaceDotWithComma = (number: number): number | string => {
  if (number % 1 !== 0) {
    return number.toString().replace(".", ",");
  }
  return number;
};

export const getEngineCapacity = (capacity: string): number | null => {
  if (capacity.match(/\d/g)) {
    return Number(`${capacity.match(/\d/g)!.join("")}e-3`);
  }
  return null;
};
