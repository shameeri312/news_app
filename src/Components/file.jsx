import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import bg from "./bg.png";
import Navbar from "./Navbar";

export class News extends Component {
  //------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  componentDidMount() {
    this.updateNews();
  }

  //------------------------------------
  async updateNews() {
    const { page } = this.state;
    const { category, pageSize } = this.props;

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c2f81bf32414416ba24f08887dcaba57&page=${page}&pageSize=${pageSize}`;

    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        const { totalResults, articles } = data;

        this.setState({
          totalResults,
          articles: [...this.state.articles, ...articles],
          loading: false,
          page: page + 1,
        });
      } else {
        console.error("Error fetching news:", data.message || "Unknown error");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching news:", error.message || "Unknown error");
      this.setState({ loading: false });
    }
  }

  //-------------------------------------//
  fetchData() {
    this.updateNews;
  }

  //------------------------------------
  render() {
    const { articles, loading, totalResults } = this.state;

    return (
      <>
        <div className={`w-[100%] lg:px-40 px-2 mx-auto`}>
          <h1
            className={`font-bold text-4xl text-center py-10 text-your-color`}
          >
            Hot News on {this.props.category.toUpperCase()}
          </h1>

          <div className="flex row justify-center flex-wrap gap-10 col-span-4">
            <InfiniteScroll
              dataLength={articles.length}
              next={this.fetchData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
            >
              {articles.map((element) => (
                <Newsitem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  time={element.publishedAt}
                />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </>
    );
  }
}

export default News;
