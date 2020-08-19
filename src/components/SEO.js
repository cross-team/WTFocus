import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, pathname, article }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
          twitterUser: twitterUsername,
        }

        return (
          <>
            <Helmet
              title={seo.title}
              titleTemplate={titleTemplate}
              meta={[
                {
                  name: 'description',
                  content: seo.description,
                },
                {
                  property: `og:title`,
                  content: seo.title,
                },
                {
                  property: `og:description`,
                  content: seo.description,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:url`,
                  content: seo.url,
                },
                {
                  name: `twitter:creator`,
                  content: seo.twitterUser,
                },
                {
                  name: `twitter:title`,
                  content: seo.title,
                },
                {
                  name: `twitter:description`,
                  content: seo.description,
                },
              ].concat(
                seo.image
                  ? [
                      {
                        property: `og:image`,
                        content: seo.image,
                      },
                      {
                        property: `twitter:image`,
                        content: seo.image,
                      },
                      {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                      },
                    ]
                  : [
                      {
                        name: 'twitter:card',
                        content: 'summary',
                      },
                    ]
              )}
            >
              <html lang="en" />
              <meta charSet="utf-8" />
              <link
                href="https://fonts.googleapis.com/css?family=Miriam+Libre&display=swap"
                rel="stylesheet"
              ></link>

              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
            </Helmet>
          </>
        )
      }}
    />
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
