const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "PKR",
  style: "currency"
});
export const formatCurrency = (currency: number) => {
  return CURRENCY_FORMATER.format(currency);
};
