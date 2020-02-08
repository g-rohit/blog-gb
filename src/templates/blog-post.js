import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
const articleURL = window.location.href;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />{" "}
        <Link
          style={{ boxShadow: `none` }}
          className="blackLink small"
          to={"/"}
        >
          {"← Go back to blog homepage"}
        </Link>{" "}
        <span role="img" aria-label="home-emoji">
          🏠
        </span>
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
                color: `#DE1B85`, //pink color
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              <span role="img" aria-label="calender">
                📅
              </span>{" "}
              {post.frontmatter.date}
            </p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="eachBlogPost"
          />
          <div className="socialShareSection flex">
          <p>  If you loved what you read, feel free to share:</p>
            <ul class="flex">
              {/* <li>
                <a href="https://wa.me/send?text=" data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp    fa-2x"></i>
                </a>
              </li> */}
              
              <li>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=` + articleURL} target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square    fa-2x"></i>
                </a>
              </li>
             
              <li>
                <a href={`https://twitter.com/intent/tweet?text=Check out this article: ` + articleURL + '\n via ' + `@aidmemes`} target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square fa-2x"></i>
                </a>
              </li>
 
            </ul>
          </div>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{
                    "text-decoration": `none`,
                    "border-bottom": ` 1px solid`,
                    color: "#8300ff",
                  }}
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  style={{
                    "text-decoration": `none`,
                    "border-bottom": ` 1px solid`,
                    color: "#8300ff",
                  }}
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
      }
    }
  }
`
