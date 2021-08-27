import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const defaultArticleMetadata = {
    title: "UNDEFINED",
  };
  const defaultDoi = "10.1111/spc3.12497";

  const [doi, setDoi] = useState(defaultDoi);
  const [articleMetadata, setArticleMetadata] = useState(defaultArticleMetadata);

async function getArticleMetadata() {
    const doiURL = "https://api.crossref.org/works/" + doi;
    const response = await axios.get(doiURL);
    const message = response.data.message 
    setArticleMetadata(message)
  }

  useEffect(() => {
    getArticleMetadata()
  }, [doi]);


  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="doi"
          onChange={(e) => setDoi(e.target.value)}
        ></input>
        <button
         onClick={null}>
         Resolve [Not Working...]
         </button>
      </div>
      <div>
        {/* Show the results */} Title:
        <strong>{articleMetadata.title}</strong>
        <div></div>
      </div>
      <div>For Testing: 10.1037/0003-066X.59.1.29/</div>
    </div>
  );
}

export default App;
