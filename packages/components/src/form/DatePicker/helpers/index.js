import { isDate } from 'lodash';

function getDate(date) {
  if (!isDate(date)) {
    return getDate(new Date());
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}

function getTime(date) {
  if (!isDate(date)) {
    return '';
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}

export function updateDate(value, date, setDate) {
  if (!isDate(value)) {
    return setDate(null);
  }
  const year = value.getFullYear();
  const month = value.getMonth() + 1;
  const day = value.getDate();

  const newDate = new Date(`${year}/${month}/${day} ${getTime(date)}`);
  return setDate(newDate);
}

export function updateTime(value, date, setDate) {
  const hours = value.getHours();
  const minutes = value.getMinutes();

  const newDate = new Date(`${getDate(date)} ${hours}:${minutes}`);
  setDate(newDate);
}
