import React, { useContext } from "react";
import { FaBook, FaUser } from "react-icons/fa";
import { ArticleContext } from "./App";

export default function Article(props) {
  const { handleArticleDelete } = useContext(ArticleContext)

  const { id, metadata: articleMetadata } = props;
  console.log(articleMetadata.author);
  if (!articleMetadata.author) return null;



  return (
    <div className="m-2 p-2 bg-yellow-50 rounded hover:bg-yellow-100">
      <div>
      <div id="author" className="font-semibold inline">
        {articleMetadata?.title}
      </div>
        <button
          onClick={() => handleArticleDelete(id)}
          className="inline text-white bg-red-200 hover:bg-red-500 px-2 float-right rounded-full"
        >
          &#215;
        </button>
      </div>
      <div className="article__author ml-2 text-gray-700">
        <FaUser className="inline mr-2" />
        {articleMetadata?.author?.map((author, i, authors) => {
          if (authors.length - 1 === i) {
            /* If last author, do not print the semicolon */
            return `${author.family}, ${author.given}`;
          } else {
            return `${author.family}, ${author.given}; `;
          }
        })}
      </div>
      <div className="article__DOI ml-2 text-gray-700">
        <a href={articleMetadata?.link[0].URL} rel="noreferrer" target="_blank">
          <FaBook className="inline mr-2" />
          {articleMetadata.DOI}
        </a>
      </div>
    </div>
  );
}
