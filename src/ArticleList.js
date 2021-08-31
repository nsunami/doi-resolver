import React from "react";
import Article from "./Article";


export default function ArticleList(props) {
  const { articles } = props;
  if (!articles) return null
  console.log(articles);
  return (
    <div>
    {articles?.map(article => {
      return(<Article key={article.id} {...article} />
)
    })}
    </div>
  );
}
