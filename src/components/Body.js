import React, { useEffect, useState } from "react";
import NewsCards from "./NewsCards";
import Shimmer from "./Shimmer";

const Body = ({ filter }) => {
  const [news, setNews] = useState([]);
  const [defaultNews, setDefaultNews] = useState([]);

  const BASE_URL = "https://gnews.io/api/v4/search?";
  const API_KEY = "8286829c4614fec7f9251218c2362f36"; // 

  useEffect(() => {
    fetchData();
  }, [filter]); // 🔹 Fetch news when filters change

  const fetchData = async () => {
    // **Default API (when no filter is applied)**
    let apiUrl = `${BASE_URL}q=example&lang=en&country=us&max=10&apikey=${API_KEY}`;

    // **Modify URL if filters are applied**
    if (filter.category || filter.lang || filter.country || filter.sortby) {
      apiUrl = `${BASE_URL}q=${filter.category || "example"}&lang=${filter.lang || "en"}&country=${filter.country || "us"}&max=10&apikey=${API_KEY}`;
      if (filter.sortby) apiUrl += `&sortby=${filter.sortby}`;
    }

    console.log("Fetching API:", apiUrl); // Debugging

    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      console.log("API Response:", json);
      setNews(json?.articles || []);

      if (!defaultNews.length) setDefaultNews(json?.articles || []); // Store default news
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return !news.length ? (
    <Shimmer />
  ) : (
    <div className="m-2 p-2">
      <div className="flex flex-wrap justify-center gap-4">
        {news.map((n) => (
          <NewsCards key={n.url} resData={n} />
        ))}
      </div>
  
      {defaultNews.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => setNews(defaultNews)}
          >
            Reset to Default News
          </button>
        </div>
      )}
    </div>
  )};
  

export default Body;
