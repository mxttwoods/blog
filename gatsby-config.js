module.exports = {
  // main data for pages to query
  siteMetadata: {
    title: "Matthew Codes",
    author: {
      name: "Matthew Woods",
      summary: "UNCG Alumni & Software Engineer",
    },
    description: "Matthew Woods's Personal Blog",
    siteUrl: "https://matthew.codes",
    social: { email: "mailto:mxttwoods@gmail.com", twitter: "mxttwoods" },
  },
  // gatsby plugins
  plugins: [
    `gatsby-plugin-image`, // for images
    {
      resolve: `gatsby-source-filesystem`, // file sys routing
      options: {
        path: `${__dirname}/content/blog`, // path to content
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // file sys routing
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // path to images
      },
    },
    {
      resolve: `gatsby-transformer-remark`, // content transformer
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`, // transform images
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`, // transform iframe
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`, // transform other languages into html
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              // classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              // inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              // aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              // showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              // noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              // languageExtensions: [
              //   {
              //     language: 'superscript',
              //     extend: 'javascript',
              //     definition: {
              //       superscript_types: /(SuperType)/,
              //     },
              //     insertBefore: {
              //       function: {
              //         superscript_keywords: /(superif|superelse)/,
              //       },
              //     },
              //   },
              // ],
              // Customize the prompt used in shell output
              // Values below are default
              // prompt: {
              //   user: 'root',
              //   host: 'localhost',
              //   global: false,
              // },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              // escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`, // ??
          `gatsby-remark-smartypants`, // ??
        ],
      },
    },
    `gatsby-transformer-sharp`, // image transformer
    `gatsby-plugin-sharp`, // image processor
    {
      resolve: `gatsby-plugin-feed`, // feed object
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              })),
            title: "All Posts",
            query: `
              {
                allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // more meta data
      options: {
        name: "Matthew's Personal Blog",
        short_name: "Matthew's Blog",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#08f", // main color
        display: "minimal-ui",
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // offline pwa support
  ],
};
