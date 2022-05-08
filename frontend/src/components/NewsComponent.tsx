import React from "react";
import { useFetch } from "../customHooks/useFetch";
import { News } from "../types/fetch";
import { Link } from "react-router-dom";
import "../style/news.css";

export default function NewsComponent() {
  const { loading, error, data } = useFetch(
    "https://darkhandeed.herokuapp.com/api/posts"
  );
  console.log(data);
  return (
    <div>
      {data?.data.map((news: News) => (
        <div key={news.id} className="news-card">
          <h2>{news.attributes.title}</h2>
          <div className="newsBody">
            <img src={news.attributes.imageUrl} alt="" />

            <p>{news.attributes.body.substring(0, 300)} ...</p>
          </div>

          <Link to={`/news/${news.id}`} className="test">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
