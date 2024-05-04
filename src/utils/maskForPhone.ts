export const maskForPhone = (value: string, hasCountryCode?: string) => {
  const cleaned = value.replace(/\D/g, '');

  const limitedValue = hasCountryCode ? cleaned.slice(3, 12) : cleaned.slice(0, 9);

  const formatted = limitedValue.replace(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/, (_, p1, p2, p3, p4) => {
    let result = '';
    if (p1) result += `(${p1})`;
    if (p2) result += ` ${p2}`;
    if (p3) result += `-${p3}`;
    if (p4) result += `-${p4}`;
    return result;
  });

  const countryCode = hasCountryCode ? '+375 ' : '';
  return countryCode + formatted.trim();
};
