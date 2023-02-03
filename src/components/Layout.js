import Link from 'next/link'
import Navigation from './Navigation'

export default function Layout({ navbar, article, children }) {
  
  return (
    <>
    <Navigation navbar={navbar}/>
    <div className="layout" data-sb-object-id={article.sys.id}>
      <header>
        <div>
            <h1>
              <span data-sb-field-path='title'>{article.fields.title}</span>
              <span data-sb-field-path='subheading'>{article.fields.subheading}</span>
            </h1>
            <h2 data-sb-field-path='text'>{article.fields.text}</h2>
        </div>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2023 Eco Plants :)</p>
      </footer>
    </div>
    </>
  )
}