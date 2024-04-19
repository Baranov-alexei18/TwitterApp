import { Option } from '../ui-components/Select/type';

export const getYears = (): Option[] => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = currentYear; i >= currentYear - 100; i -= 1) {
    years.push({ value: i, label: i.toString() });
  }

  return years;
};

export const getMonths = (currentYear: number = new Date().getFullYear()): Option[] => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const months: Option[] = [];

  for (let i = 0; i <= (currentYear === currentDate.getFullYear() ? currentMonth : 11); i += 1) {
    const month = new Date(0, i);
    months.push({ value: i, label: month.toLocaleString('default', { month: 'long' }) });
  }

  return months;
};

export const getDays = (
  year: number = new Date().getFullYear(),
  month: number = new Date().getMonth(),
): Option[] => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const daysInMonth = (year === currentYear && month === currentMonth)
    ? currentDay
    : new Date(year, month + 1, 0).getDate();

  const days: Option[] = [];

  for (let i = 1; i <= daysInMonth; i += 1) {
    days.push({ value: i, label: i.toString() });
  }

  return days;
};
