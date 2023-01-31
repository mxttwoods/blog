import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;

  const isRootPath = location.pathname === rootPath;

  let header;

  // if at index show main header
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );

    // else article header
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  // return html
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {title} {new Date().getFullYear()}
      </footer>
    </div>
  );
};

const props = {
  location: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.array,
};

Layout.defaultProps = props;
Layout.propTypes = props;

export default Layout;
