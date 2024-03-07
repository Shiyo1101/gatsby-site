import type { CreateSchemaCustomizationArgs } from 'gatsby'

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
      image: String!
      themeColor: String!
    }
  `
  createTypes(typeDefs)
}