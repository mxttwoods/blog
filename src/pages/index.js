/* eslint-disable react/no-unescaped-entities */

import * as React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";

// import components
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const posts = data.allMarkdownRemark.nodes;

  // if no posts
  if (posts.length === 0) {
    // return html
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Gatsby Error" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }
  // otherwise return all posts (html)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

// prop types
BlogIndex.defaultProps = {
  data: PropTypes.string,
  location: PropTypes.string,
};

// prop types
BlogIndex.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
};

export default BlogIndex;

/**
 * BlogIndex component that queries for data
 * with Gatsby's graphql component
 *
 * See: https://www.gatsbyjs.com/docs/reference/graphql-data-layer/
 *
 * @return pageQuery
 */
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
