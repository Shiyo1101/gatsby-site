import * as path from 'path'

import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Site`,
    description: `****`,
    siteUrl: `****`,
    image: `***`,
    themeColor: `#FFFFFF`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Noto Sans JP',
            file: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap',
          },
        ],
      },
    },
  ],
}

export default config