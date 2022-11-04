export const API_KEY = "361fed5ef6374dce8ad2ca80ff4b16c9";
export const GET_NEWS_URL = `https://newsapi.org/v2/everything?q=tesla&from=2022-10-04&sortBy=publishedAt&apiKey=${API_KEY}`;

export const getNews = async () => {
  const response = await fetch(GET_NEWS_URL)
    .then((response) => response.json())
    .then((news) => news.articles[0].content);

  return response;
};
