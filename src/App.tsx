import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pricing from './Pricing'
import './App.css'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      setCurrentPath(path)
    }
  }

  const handleLinkClick = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigateTo(path)
  }

  const isPricing = currentPath === '/pricing' || currentPath === '/pricing/'

  return (
    <div className="app-container">
      <nav className="site-nav">
        <a
          href="/"
          onClick={handleLinkClick('/')}
          className={`nav-link ${!isPricing ? 'active' : ''}`}
        >
          Home
        </a>
        <a
          href="/pricing"
          onClick={handleLinkClick('/pricing')}
          className={`nav-link ${isPricing ? 'active' : ''}`}
        >
          Pricing
        </a>
      </nav>

      {isPricing ? (
        <Pricing onNavigate={navigateTo} />
      ) : (
        <main className="home-content">
          <div>
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <div className="pricing-banner">
            <h2>Looking for our plans?</h2>
            <p>Check out our flexible options for developers and teams.</p>
            <a
              href="/pricing"
              onClick={handleLinkClick('/pricing')}
              className="cta-button"
            >
              View Pricing Plans
            </a>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </main>
      )}
    </div>
  )
}

export default App
