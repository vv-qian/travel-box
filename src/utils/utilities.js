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

export { numberWithCommas, range, shortenYear };
