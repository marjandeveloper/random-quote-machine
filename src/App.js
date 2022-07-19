import './App.scss'
import React, { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    randomQuote()
  }, [])
  const randomQuote = () => {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then((response) => response.json())
      .then((result) =>
        setQuote(
          result.quotes[Math.floor(Math.random() * result.quotes.length)]
        )
      )
  }

  return (
    <div id='quote-box'>
      <header>Quote of the Day</header>
      <div className='content'>
        <div className='quote-area'>
          <i className='fas fa-quote-left'></i>
          <div id='text'>{quote.quote}</div>
          <i className='fas fa-quote-right'></i>
        </div>
        <div id='author'>
          <span>__</span>
          <span className='name'>{quote.author}</span>
        </div>
      </div>
      <div className='buttons'>
        <div className='features'>
          <ul>
            <a
              id='tweet-quote'
              href={`https://twitter.com/intent/tweet?url=${quote.quote}`}
              target='_blank'
              rel='noreferrer'
            >
              <li className='twitter'>
                <i className='fab fa-twitter'></i>
              </li>
            </a>
          </ul>

          <button id='new-quote' onClick={randomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
