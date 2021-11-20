/** @format */

import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

/**
 * @param { * } { location, title, children }
 * @return { * }
 */
const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;

  const isRootPath = location.pathname === rootPath;

  let header;

  // if at index show main header
  if (isRootPath) {
    header = (
      <h1 className='main-heading'>
        <Link to='/'>{title}</Link>
      </h1>
    );

    // else article header
  } else {
    header = (
      <Link className='header-link-home' to='/'>
        {title}
      </Link>
    );
  }

  // return html
  return (
    <div className='global-wrapper' data-is-root-path={isRootPath}>
      <header className='global-header'>{header}</header>
      <main>{children}</main>
      <footer>
        © {title} {new Date().getFullYear()},{' '}
        <img
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            marginTop: 'auto'
          }}
          src='https://img.icons8.com/fluent/15/000000/checked.png'
          alt='Checked Icon'
        />{' '}
        <a
          href='https://stats.uptimerobot.com/7WlovcmwBA'
          target='_blank'
          rel='noopener noreferrer'
        >
          Status Page
        </a>
      </footer>
    </div>
  );
};

// prop types
Layout.defaultProps = {
  location: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string
};

// prop types
Layout.propTypes = {
  location: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string
};

export default Layout;
