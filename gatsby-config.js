module.exports = {
	siteMetadata: {
		title: `Actual Size Starter`,
		description: `Built by 👾 in Pittsburgh, PA.`,
		author: `@actualsize`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-emoji-favicon`,
			options: {
				emoji: `🚧`,
			},
		},
		`gatsby-plugin-image`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-image
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
	],
};
