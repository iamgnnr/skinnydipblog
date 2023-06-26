import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="title-header">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <Link className="about-link" to="/about" style={{fontSize:`1.3em`}}>
          About
        </Link>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} <span className="footer_logo">Psych0p0mp</span>.</p>
        <p>Created by <a href="https://twitter.com/justgnnr">gnnr</a>.</p>
      </footer>
    </div>
  )
}

export default Layout
