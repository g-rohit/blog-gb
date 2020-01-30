import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
 
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontSize: `2.5em`,
          }}
          className="homePageTitle">
          <Link to={`/`} >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,

          }}
          className="homePageTitle">
          <Link to={`/`} >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer className="pageFooter">
          <div  style= {{'fontSize': '0.8em',}}>
            <div>
               
                &copy; 2020{" "}
                <a href="https://allindiadankmemes.in/"  className="blackLink">
                  All India Dank Memes
                </a>
              
            </div>
            <div>
               
                Desinged & Developed with <span role='img' aria-label="heart emoji">❤️</span> by{" "}
                <a href="https://DesiMemeWala.com/" target="_blank" rel="noopener noreferrer" className="blackLink">DesiBoi</a>
              
            </div>
          </div>
        </footer>
       
      </div>
      
    )
  }
}

export default Layout
