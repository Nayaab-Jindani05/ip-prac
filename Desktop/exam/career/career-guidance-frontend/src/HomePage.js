import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [articles, setArticles] = useState([]); // State to hold articles

  useEffect(() => {
    // Fetch articles from the backend
    axios.get('http://localhost:3000/api/articles')
      .then(response => {
        console.log(response.data); // Log fetched data
        setArticles(response.data);   // Set articles state
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Career Development Articles</h1>
      {articles.length > 0 ? (
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))
      ) : (
        <p>Loading articles...</p> // Display until articles are loaded
      )}
    </div>
  );
};

export default HomePage;
