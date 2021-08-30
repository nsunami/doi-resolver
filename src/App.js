import { useState } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";
import { FaGithub } from "react-icons/fa";

function App() {
  const defaultArticleMetadata = {
    title: "[Enter DOI to get the article's title]",
  };
  const defaultDoi = "10.3390/publications7020040";

  const [doi, setDoi] = useState(defaultDoi);
  const [articleMetadata, setArticleMetadata] = useState(
    defaultArticleMetadata
  );

  async function getArticleMetadata() {
    try {
      const doiURL = "https://api.crossref.org/works/" + doi;
      const response = await axios.get(doiURL);
      const message = response.data.message;
      setArticleMetadata(message);
    } catch {
      handleArticleNotFound();
    }
  }

  function handleArticleNotFound() {
    setArticleMetadata({
      title: "[ERROR: Article Not Found]",
    });
  }

  return (
    <div>
      <header className="bg-gray-50 p-6">
        <nav className="">
          <ul className="">
            <li className="mr-6 inline hover:underline"><a href="/">DOI Resolver</a></li>
            <li className="mr-6 inline hover:underline">
              <a
                href="https://github.com/nsunami/doi-resolver"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub className="inline" /> GitHub Repo
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="m-6">
        <div className="m-1 p-6 bg-green-50 rounded-md">
          <input
            placeholder="Enter DOI"
            className="border border-transparent focus:outline-none focus:ring-2 rounded-md shadow-md w-60"
            type="text"
            name="doi"
            value={doi}
            onChange={(e) => setDoi(e.target.value)}
          ></input>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 mx-2 px-2 border rounded-md"
            onClick={getArticleMetadata}
          >
            Resolve
          </button>
        </div>
        <ArticleList articleMetadata={articleMetadata} />
      </div>
    </div>
  );
}

export default App;
