import React from "react";

export default function Article(props) {
  const { articleMetadata } = props;
  return (
    <div className="border-2 border-indigo-600">
      <div className="arcile__title">{articleMetadata?.title}</div>
      <div className="article__author">
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
      <div className="article__DOI colors.gray">{articleMetadata.DOI}</div>
    </div>
  );
}
