const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const range = (start, end) => {
  let list = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};

const shortenYear = (fullYear) => {
  return `'${fullYear.toString().slice(2)}`;
};

const max = (data, value) => Math.max(...data.map(value));
const min = (data, value) => Math.min(...data.map(value));

const getStepGap = (num) => {
  for (let i = Math.floor(num / 2) - (num > 10 ? 1 : 0); i > 1; i--) {
    if (num % i === 0) {
      return i;
    }
  }
  return num;
};

export { numberWithCommas, range, shortenYear, max, min, getStepGap };
