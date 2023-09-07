import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentNews, setCurrentNews] = useState({})
  const [newsPage, setNewsPage] = useState(0)
  const [newsList, setNewsList]= useState([])

  useEffect(() => {
   const newsItems = [
    {
      title: "CNN",
      desc: "Latest news from CNN"
    }, {
      title: "BBC",
      desc: "Latest news from BBC"
    }, {
      title: "ARISE",
      desc: "Latest news from Arise"
    }, {
      title: "Sky Sport",
      desc: "Latest sport news from Sky Sport"
    }
  ]
   
  const item = newsItems[newsPage]
  setNewsList(newsItems)
  setCurrentNews(item)
  setLoading(false)
  }, [newsPage])

  

  const nextPage = (event) => {
    event.preventDefault()
    if(newsPage < newsList.length - 1){
      setNewsPage(current => current += 1)
    }
  }

  const prevPage = (event) => {
    event.preventDefault()
    if(newsPage > 0){
      setNewsPage(current => current -= 1)
    }
  }
  
  return (
    <div className='container'>
        <section className='newsContainer'>
           {
           loading ? 
           <h1>Loading</h1> :
           <div key={currentNews.title}>
            <h1>{currentNews.title}</h1>
            <p>{currentNews.desc}</p>
          </div>
          }
        </section> 
        <div className="buttons">
          <button onClick={nextPage}>
            Next
          </button>
          <button onClick={prevPage}>
            Prev
          </button>
        </div>
    </div>
  )
}

export default App
