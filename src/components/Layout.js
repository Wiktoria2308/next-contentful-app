import Link from 'next/link'
import Navigation from './Navigation'

export default function Layout({ navbar, children }) {
  
  return (
    <>
    { navbar ? <Navigation navbar={navbar}/> : null}
    <div className="layout">
      <header>
        <Link href="/">
            <h1>
              <span>Eco Plants</span>
              <span>Webshop</span>
            </h1>
            <h2>Green life</h2>
        </Link>
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