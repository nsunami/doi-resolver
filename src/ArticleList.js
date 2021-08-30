import React from "react";
import Article from "./Article";


export default function ArticleList(props) {
  const { articleMetadata } = props;
  if (!articleMetadata.author) return null;
  console.log(articleMetadata);
  return (
    <div>
    <Article articleMetadata={articleMetadata}/>
    </div>
  );
}
