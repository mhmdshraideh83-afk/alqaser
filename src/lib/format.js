export const CURRENCY = 'د.أ';

/** Preis wie im Original: "3.00 د.أ", bei Preis 0 "حسب الكمية". */
export function formatPrice(price) {
  return price > 0 ? `${price.toFixed(2)} ${CURRENCY}` : 'حسب الكمية';
}

export function formatTotal(total) {
  return `${total.toFixed(2)} ${CURRENCY}`;
}
