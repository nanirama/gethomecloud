const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});


module.exports = {
  siteMetadata: {
    title: `HomeCloud`,
    description: `Your Home in the Cloud`,
    author: `@gatsbyjs`,
    siteUrl: `https://gethomecloud.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5TQTHQT",
          includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "homecloud-route",
        enableWebVitalsTracking: true,
        selfHostedOrigin: "https://www.googletagmanager.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 90,
          backgroundColor: `transparent`,
          webpOptions: {quality: 90}
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "displayName": false,
        "fileName": false,
        "minify": false,
        "transpileTemplateLiterals": false
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Get Home Cloud`,
        short_name: `Get Home Cloud`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/logos/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
    resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito Sans",
              variants: ["300", "400", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'homecloud',   
        accessToken: 'MC5ZY3BfakJJQUFDZ0FmUGl2.PH1pde-_vWNm77-977-9L--_vQLvv70b77-9Y--_vUNUcO-_vUMD77-977-977-977-977-9FO-_vWjvv70',
        customTypesApiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImhvbWVjbG91ZC04MGQzM2Y5NC0yZGI1LTRjYzktYTU0ZC1mZmViNThlNjI1OWJfNCIsImRhdGUiOjE2NDA2NTk3MDgsImRvbWFpbiI6ImhvbWVjbG91ZCIsImlhdCI6MTY0MDY1OTcwOH0.F54AJbbl-6f4wFtvi7FpW5tPSssE4UoPmM_LshQ3QIw',
        schemas: {
          faq: require('./src/schemas/faq.json'),
          page: require('./src/schemas/page.json'),
          an_unused_type: {},
        },
        lang: '*',
      },
    },    
    {
        resolve: `gatsby-plugin-polyfill-io`,
        options: {
          features: [`Array.prototype.map`, `fetch`]
        },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      }      
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gethomecloud.com/',
        sitemap: 'https://gethomecloud.com/sitemap/sitemap-0.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://www.googletagmanager.com', 'https://js.intercomcdn.com', 'https://js.intercomcdn.com'],
      },
    }, 
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/fonts/*": [
              "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ],
          "/meta/*": [
              "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ],
          "**/*.woff": [
              "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ],
          "**/*.woff2": [
              "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ],
      },
      allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
      ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
