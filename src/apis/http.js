import axios from "axios";

const forexHttp = axios.create({
  baseURL: "http://api.currencylayer.com",
  params: {
    access_key: "2be2df7519e3d3b50214076fe8ad1d76",
  },
});

const holidayHttp = axios.create({
  baseURL: "https://calendarific.com/api/v2",
  params: {
    api_key: "ff630bf799ff0a562551a78bfe962dd8c6e00d69",
  },
});

const wikiHttp = axios.create({
  baseURL: "https://en.wikipedia.org/w",
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
  },
});

export { forexHttp, holidayHttp, wikiHttp };
