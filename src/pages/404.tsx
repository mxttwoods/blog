/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// import components
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * ErrorIndex
 *
 * @param { * } { data, location }
 * @return { * }
 */
const ErrorIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  // return html
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='404 - Not Found' />
      <h1>404 - Not Found</h1>{' '}
      <p>
        You've reached a page that doesn't exist please click{' '}
        <a href='/'>here</a>
      </p>
    </Layout>
  );
};

// prop types
ErrorIndex.defaultProps = {
  data: PropTypes.string,
  location: PropTypes.string,
};

// prop types
ErrorIndex.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
};

export default ErrorIndex;

/**
 * ErrorIndex component that queries for siteMetadata
 * with Gatsby's graphql component
 *
 * See: https://www.gatsbyjs.com/docs/reference/graphql-data-layer/
 *
 * @return { * } pageQuery
 */
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
