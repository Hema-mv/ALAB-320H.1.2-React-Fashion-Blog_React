// src/Article.jsx
import React from 'react';
import './Article.css';

function Article({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
      <img src={article.image} alt={article.alt} />
      <p>{article.content} <a href="#readmore">continues...</a></p>
    </article>
  );
}

export default Article;
