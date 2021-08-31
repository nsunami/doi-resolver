import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'
import ArticleList from "./ArticleList";
import { FaGithub } from "react-icons/fa";

export const ArticleContext = React.createContext()
// const LOCAL_STORAGE_KEY = 'doiResolver' // useEffect to update the local stroage

function App() {
  const defaultDoi = "10.3390/publications7020040";

  const [doi, setDoi] = useState(defaultDoi);
  const [articles, setArticles] = useState(defaultArticles);

//   Context Functions to be passed to children

const ArticleContextValue = {
    handleArticleDelete
}

  async function getArticleMetadata() {
    try {
      const doiURL = "https://api.crossref.org/works/" + doi;
      const response = await axios.get(doiURL);
      const newArticleMetadata = response.data.message;
      const newArticle = {
        id: uuidv4(),
        metadata: newArticleMetadata
      }
      setArticles([newArticle, ...articles])
      } catch {
      handleArticleNotFound();
    }
  }

  function handleArticleNotFound() {
    return null
  }

  function handleArticleDelete(id) {
    setArticles(articles.filter(article => article.id !== id))
  }

  return (
    <ArticleContext.Provider value={ArticleContextValue}>
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
        <ArticleList articles={articles} />
      </div>
    </ArticleContext.Provider>
  );
}

const defaultArticles = [{
  id: 1,
  metadata: [
    {
      "indexed": {
          "date-parts": [
              [
                  2021,
                  7,
                  1
              ]
          ],
          "date-time": "2021-07-01T15:06:24Z",
          "timestamp": 1625151984247
      },
      "reference-count": 43,
      "publisher": "MDPI AG",
      "issue": "2",
      "license": [
          {
              "start": {
                  "date-parts": [
                      [
                          2019,
                          6,
                          4
                      ]
                  ],
                  "date-time": "2019-06-04T00:00:00Z",
                  "timestamp": 1559606400000
              },
              "content-version": "unspecified",
              "delay-in-days": 0,
              "URL": "https://creativecommons.org/publicdomain/zero/1.0/"
          }
      ],
      "funder": [
          {
              "name": "Mozilla",
              "award": [
                  "Open Science Fellowship (Cohort 2018)"
              ]
          }
      ],
      "content-domain": {
          "domain": [],
          "crossmark-restriction": false
      },
      "short-container-title": [
          "Publications"
      ],
      "abstract": "<jats:p>A scholarly communication system needs to register, distribute, certify, archive, and incentivize knowledge production. The current article-based system technically fulfills these functions, but suboptimally. I propose a module-based communication infrastructure that attempts to take a wider view of these functions and optimize the fulfillment of the five functions of scholarly communication. Scholarly modules are conceptualized as the constituent parts of a research process as determined by a researcher. These can be text, but also code, data, and any other relevant pieces of information that are produced in the research process. The chronology of these modules is registered by iteratively linking to each other, creating a provenance record of parent and child modules (and a network of modules). These scholarly modules are linked to scholarly profiles, creating a network of profiles, and a network of how profiles relate to their constituent modules. All these scholarly modules would be communicated on the new peer-to-peer Web protocol Dat, which provides a decentralized register that is immutable, facilitates greater content integrity than the current system through verification, and is open-by-design. Open-by-design would also allow diversity in the way content is consumed, discovered, and evaluated to arise. This initial proposal needs to be refined and developed further based on the technical developments of the Dat protocol, its implementations, and discussions within the scholarly community to evaluate the qualities claimed here. Nonetheless, a minimal prototype is available today, and this is technically feasible.</jats:p>",
      "DOI": "10.3390/publications7020040",
      "type": "journal-article",
      "created": {
          "date-parts": [
              [
                  2019,
                  6,
                  5
              ]
          ],
          "date-time": "2019-06-05T13:37:58Z",
          "timestamp": 1559741878000
      },
      "page": "40",
      "source": "Crossref",
      "is-referenced-by-count": 5,
      "title": [
          "Verified, Shared, Modular, and Provenance Based Research Communication with the Dat Protocol"
      ],
      "prefix": "10.3390",
      "volume": "7",
      "author": [
          {
              "ORCID": "http://orcid.org/0000-0003-1050-6809",
              "authenticated-orcid": false,
              "given": "Chris",
              "family": "Hartgerink",
              "sequence": "first",
              "affiliation": []
          }
      ],
      "member": "1968",
      "published-online": {
          "date-parts": [
              [
                  2019,
                  6,
                  4
              ]
          ]
      },
      "reference": [
          {
              "key": "ref1",
              "unstructured": "Forces and Functions in Scientific Communication: An Analysis Of Their Interplayhttps://perma.cc/5HYM-BEKF"
          },
          {
              "key": "ref2",
              "doi-asserted-by": "publisher",
              "DOI": "10.1045/september2004-vandesompel"
          },
          {
              "key": "ref3",
              "doi-asserted-by": "publisher",
              "DOI": "10.3389/fnhum.2018.00037"
          },
          {
              "key": "ref4",
              "doi-asserted-by": "publisher",
              "DOI": "10.1016/0140-6736(91)90201-Y"
          },
          {
              "key": "ref5",
              "doi-asserted-by": "publisher",
              "DOI": "10.1371/journal.pone.0084896"
          },
          {
              "key": "ref6",
              "doi-asserted-by": "publisher",
              "DOI": "10.1038/nature05008"
          },
          {
              "key": "ref7",
              "doi-asserted-by": "publisher",
              "DOI": "10.1007/BF01173636"
          },
          {
              "key": "ref8",
              "doi-asserted-by": "publisher",
              "DOI": "10.1098/rsos.160384"
          },
          {
              "key": "ref9",
              "doi-asserted-by": "publisher",
              "DOI": "10.18352/lq.10280"
          },
          {
              "key": "ref10",
              "doi-asserted-by": "publisher",
              "DOI": "10.1629/uksg.215"
          },
          {
              "key": "ref11",
              "doi-asserted-by": "publisher",
              "DOI": "10.1108/EUM0000000007185"
          },
          {
              "key": "ref12",
              "series-title": "Making Nature: The History of a Scientific Journal",
              "author": "Baldwin",
              "year": "2015"
          },
          {
              "key": "ref13",
              "doi-asserted-by": "publisher",
              "DOI": "10.3389/fncom.2012.00019"
          },
          {
              "key": "ref14",
              "doi-asserted-by": "publisher",
              "DOI": "10.7717/peerj-cs.78"
          },
          {
              "key": "ref15",
              "doi-asserted-by": "publisher",
              "DOI": "10.1186/2041-1480-5-28"
          },
          {
              "key": "ref16",
              "doi-asserted-by": "publisher",
              "DOI": "10.3390/publications6020021"
          },
          {
              "key": "ref17",
              "series-title": "Genesis and Development of a Scientific Fact",
              "author": "Fleck",
              "year": "1981"
          },
          {
              "key": "ref18",
              "doi-asserted-by": "publisher",
              "DOI": "10.31234/osf.io/dt6e8"
          },
          {
              "key": "ref19",
              "doi-asserted-by": "publisher",
              "DOI": "10.1016/j.cortex.2012.12.016"
          },
          {
              "key": "ref20",
              "doi-asserted-by": "publisher",
              "DOI": "10.31219/osf.io/nsv2c"
          },
          {
              "key": "ref21",
              "doi-asserted-by": "publisher",
              "DOI": "10.1038/sdata.2018.221"
          },
          {
              "key": "ref22",
              "doi-asserted-by": "publisher",
              "DOI": "10.1371/journal.pone.0115253"
          },
          {
              "key": "ref23",
              "doi-asserted-by": "publisher",
              "DOI": "10.1371/journal.pone.0167475"
          },
          {
              "key": "ref24",
              "doi-asserted-by": "publisher",
              "DOI": "10.2307/2786545"
          },
          {
              "key": "ref25",
              "series-title": "Methodologie: Grondslagen van onderzoek en denken in de gedragswetenschappen [Methodology: Foundations of Research and Thinking in the Behavioral Sciences]",
              "author": "Groot",
              "year": "1994"
          },
          {
              "key": "ref26",
              "doi-asserted-by": "publisher",
              "DOI": "10.1111/j.1467-954X.1990.tb03347.x"
          },
          {
              "key": "ref27",
              "doi-asserted-by": "publisher",
              "DOI": "10.1037/1089-2680.2.2.175"
          },
          {
              "key": "ref28",
              "doi-asserted-by": "publisher",
              "DOI": "10.1045/june2001-reich"
          },
          {
              "key": "ref29",
              "doi-asserted-by": "publisher",
              "DOI": "10.1103/PhysRevE.95.022313"
          },
          {
              "key": "ref30",
              "doi-asserted-by": "publisher",
              "DOI": "10.7717/peerj.4375"
          },
          {
              "key": "ref31",
              "doi-asserted-by": "publisher",
              "DOI": "10.1016/j.gendis.2015.02.006"
          },
          {
              "key": "ref32",
              "doi-asserted-by": "publisher",
              "DOI": "10.1038/nature.2017.22163"
          },
          {
              "key": "ref33",
              "series-title": "New Dark Age: Technology and the End of the Future",
              "author": "Bridle",
              "year": "2018"
          },
          {
              "key": "ref34",
              "doi-asserted-by": "publisher",
              "DOI": "10.12685/027.7-4-2-157"
          },
          {
              "key": "ref35",
              "doi-asserted-by": "publisher",
              "DOI": "10.1080/1047840X.2012.701161"
          },
          {
              "key": "ref36",
              "series-title": "Journal Article Tag Suite Conference (JATS-Con) Proceedings 2016 [Internet]",
              "article-title": "Jatdown: A markdown language for writing JATS",
              "author": "Johnston",
              "year": "2016"
          },
          {
              "key": "ref37",
              "series-title": "International Conference on Web Engineering",
              "article-title": "Decentralised Authoring, Annotations and Notifications for a Read-Write Web with dokieli",
              "author": "Capadisli",
              "year": "2017"
          },
          {
              "key": "ref38",
              "unstructured": "Publishers Need to Stop Using Insecure HTTPhttps://perma.cc/AX5Z-TALC"
          },
          {
              "key": "ref39",
              "doi-asserted-by": "publisher",
              "DOI": "10.1126/science.352.6285.508"
          },
          {
              "key": "ref40",
              "series-title": "Scholarly Digital Libraries as a Platform for Malware Distribution",
              "first-page": "107",
              "author": "Nissim",
              "year": "2017"
          },
          {
              "key": "ref41",
              "doi-asserted-by": "publisher",
              "DOI": "10.1093/biomet/6.1.1"
          },
          {
              "key": "ref42",
              "series-title": "The Copyright Wars: Three Centuries of Trans-Atlantic Battle",
              "author": "Baldwin",
              "year": "2014"
          },
          {
              "key": "ref43"
          }
      ],
      "container-title": [
          "Publications"
      ],
      "original-title": [],
      "language": "en",
      "link": [
          {
              "URL": "https://www.mdpi.com/2304-6775/7/2/40/pdf",
              "content-type": "unspecified",
              "content-version": "vor",
              "intended-application": "similarity-checking"
          }
      ],
      "deposited": {
          "date-parts": [
              [
                  2019,
                  9,
                  23
              ]
          ],
          "date-time": "2019-09-23T08:44:25Z",
          "timestamp": 1569228265000
      },
      "score": 1,
      "subtitle": [],
      "short-title": [],
      "issued": {
          "date-parts": [
              [
                  2019,
                  6,
                  4
              ]
          ]
      },
      "references-count": 43,
      "journal-issue": {
          "issue": "2",
          "published-online": {
              "date-parts": [
                  [
                      2019,
                      6
                  ]
              ]
          }
      },
      "alternative-id": [
          "publications7020040"
      ],
      "URL": "http://dx.doi.org/10.3390/publications7020040",
      "relation": {},
      "ISSN": [
          "2304-6775"
      ],
      "issn-type": [
          {
              "value": "2304-6775",
              "type": "electronic"
          }
      ],
      "subject": [
          "Computer Science Applications",
          "Media Technology",
          "Communication",
          "Business and International Management",
          "Library and Information Sciences"
      ],
      "published": {
          "date-parts": [
              [
                  2019,
                  6,
                  4
              ]
          ]
      }
  }
  ]
},
{
  id: 2,
  metadata: []
}]

export default App;
