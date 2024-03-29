import * as React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";

// import components
import Bio from "../components/bio";
import Layout from "../components/layout";
import SearchEngineOpt from "../components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;

  const siteTitle = data.site.siteMetadata?.title || "Title";

  const { previous, next } = data;

  // return html
  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOpt
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};
const props = {
  data: PropTypes.object,
  location: PropTypes.object,
};
BlogPostTemplate.defaultProps = props;
BlogPostTemplate.propTypesprops = props;

export default BlogPostTemplate;

/**
 * BlogPostTemplate component that queries for data
 * with Gatsby's graphql component
 *
 * See: https://www.gatsbyjs.com/docs/reference/graphql-data-layer/
 *
 * @return pageQuery
 */
export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
