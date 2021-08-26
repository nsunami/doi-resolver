import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [articleMetadata, setArticleMetadata] = useState("")
  const [doi, setDoi] = useState("")
  // const defaultDoi = "10.1037/0003-066X.59.1.29/"

  // const fetchData = (doi = "10.1037/0003-066X.59.1.29/") => {
  //   const doiURL = "https://api.crossref.org/works/" + doi
  //   axios.get(doiURL)
  //   .then(res => {
  //       const newArticleMetadata = res.data.message
  //       setArticleMetadata(newArticleMetadata)
  //       console.log(articleMetadata)
  //   })

  useEffect(() => {
    const doiURL = "https://api.crossref.org/works/" + doi
    axios.get(doiURL)
    .then(res => {
        const newArticleMetadata = res.data.message
        setArticleMetadata(newArticleMetadata)
  })
    return () => {
      // cleanup
    }
  }, [doi])

  return (
    <div className="App">
      <div>
      <input type="text" 
      name="doi"
      onChange={e => setDoi(e.target.value)}
       ></input>
        <button
         >Resolve [Not Working...]</button>
      </div>
      <div>
        {/* Show the results */} Title:
        <strong>{articleMetadata.title}</strong> 
        <div></div>
      </div>
      <div>
      For Testing: 10.1037/0003-066X.59.1.29/
      </div>
    </div>
  );
}

export default App;
