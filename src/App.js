import { useState } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";

function App() {
  const defaultArticleMetadata = {
    title: "[Enter DOI to get the article's title]",
  };
  const defaultDoi = "10.1111/spc3.12497";

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
    })
  }

  return (
    <div className="App">
      <nav>
        <a href="https://github.com/nsunami/doi-resolver" rel="noreferrer" target="_blank">
        GitHub Repo
        </a>
      </nav>

      <div>
        Enter DOI: <input
          type="text"
          name="doi"
          value={doi}
          onChange={(e) => setDoi(e.target.value)}
        ></input>
        <button onClick={getArticleMetadata}>Resolve</button>
      </div>
      <ArticleList articleMetadata={articleMetadata}/>
    </div>
  );
}

export default App;
