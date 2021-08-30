import React from "react";
import { FaBook, FaUser } from 'react-icons/fa';


export default function Article(props) {
  const { articleMetadata } = props;
  return (
    <div className="m-2 p-2 bg-yellow-50 rounded">
      <div
       id="author"
       className="font-semibold">{articleMetadata?.title}</div>
      <div className="article__author ml-2 text-gray-700">
      <FaUser className="inline mr-2" /> 
        {articleMetadata.author.map(
            (author, i, authors) => {
                if (authors.length - 1 === i) {
                    /* If last author, do not print the semicolon */
                    return `${author.family}, ${author.given}`
                } else {
                    return `${author.family}, ${author.given}; `
                }
            }
        )}
      </div>
      <div className="article__DOI ml-2 text-gray-700">
      <a 
        href={articleMetadata?.link[0].URL}
        rel="noreferrer" target="_blank">
        <FaBook className="inline mr-2"/>
        {articleMetadata.DOI}
      </a>
      </div>
    </div>
  );
}
