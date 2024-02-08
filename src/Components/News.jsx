import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [newsState, setNewsState] = useState({
    articles: [],
    loading: false,
    totalResults: 0,
  });
  const [page, setPage] = useState(1);
  const { category, pageSize, apiKey, setProgress } = props;

  useEffect(() => {
    document.title = `${category.toUpperCase()} - NewsApp`;
    updateNews();
  }, []);

  let { mode, color } = props;
  const updateNews = async () => {
    props.setProgress(0);

    props.setProgress(50);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page + 1
      }&pageSize=${pageSize}`;
    setPage(page + 1);
    props.setProgress(70);

    const response = await fetch(url);
    const data = await response.json();

    setNewsState((prevNewsState) => ({
      totalResults: data.totalResults,
      articles: [...prevNewsState.articles, ...data.articles],
    }));

    props.setProgress(100);
  };

  const fetchData = () => {
    updateNews();
  };

  const { articles, totalResults } = newsState;

  return (
    <>

      <div className={`w-[100%] lg:px-40 px-2 mx-auto`}>
        <h1
          className={`font-bold text-4xl text-center py-10 text-${color} mt-28`}
        >
          Hot News on {props.category.toUpperCase()}
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={articles.length !== totalResults}
        >
          <div className="flex row justify-center flex-wrap gap-10 col-span-4">
            {articles.map((element) => (
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                time={element.publishedAt}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
