import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


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
        <p>Created by Gunnar Bachelor &nbsp;
        <a href="https://twitter.com/justgnnr">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
