
//Importing relevant libraries
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

//Importing CSS
import "./News.css";

const NewsBoard = () => {
  const [news, setNews] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const newsBoardRef = useRef(null);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        //The news API which fetches news related to natural farming in India
        "https://newsapi.org/v2/everything?q=natural%20farming%20India&sortBy=recent&apiKey=e904cce74eba48d9a0688f83deb1a734"
      );
      setNews(response.data.articles.slice(0, 10));
    };

    getNews();
  }, []);

  useEffect(() => {
    const newsBoardElement = newsBoardRef.current;
    if (newsBoardElement) {
      const intervalId = setInterval(() => {
        if (currentArticleIndex < news.length - 1) {
          setCurrentArticleIndex(currentArticleIndex + 1);
          newsBoardElement.scrollTop += 70;
        } else {
          setCurrentArticleIndex(0);
          newsBoardElement.scrollTop = 0;
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [currentArticleIndex, news]);

  return (
    <div className="news-board" ref={newsBoardRef}>
      <ul>
        {news.map((article, index) => (
          <li key={article.title}>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className={currentArticleIndex === index ? "active" : ""}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsBoard;
