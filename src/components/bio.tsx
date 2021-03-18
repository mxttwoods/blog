/** @format */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 *
 * @return { * } data
 */
const Bio = () => {
  /** @type { * } */
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  /** @type { string } */
  const { author, social } = data.site.siteMetadata

  // return html
  return (
    <div className='bio'>
      <StaticImage
        className='bio-avatar'
        layout='fixed'
        formats={['AUTO', 'WEBP', 'AVIF']}
        src='../images/profile-pic.jpg'
        width={50}
        height={50}
        quality={95}
        alt='Profile picture'
      />
      {author?.name && (
        <p>
          {' '}
          Written by{' '}
          <a href={social.email}>
            <strong>
              {author.name}
              <br />
            </strong>
          </a>{' '}
          {author.summary}
        </p>
      )}
    </div>
  )
}

export default Bio
